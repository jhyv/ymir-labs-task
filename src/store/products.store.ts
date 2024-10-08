import { StateStorage, createJSONStorage, persist } from "zustand/middleware";
import { create } from "zustand";
import { getProducts } from "../services";
import { Product } from "../models";
import { immer } from "zustand/middleware/immer";

interface ProductState {
    products: Product[];
}

interface ProductActions {
    fetchProducts: (keywords?: string) => any;
    getProduct: (id: number) => Product;
}

const initialState: ProductState = {
    products: []
}

const persistStorage: StateStorage = localStorage;

const storageOptions = {
    name: 'products.store',
    storage: createJSONStorage(() => persistStorage),
    partialize: (state: ProductState & ProductActions) => ({
        products: state.products
    })
};

export const useProductStore = create<ProductState & ProductActions>()(
    persist(
        immer(
            (set, get) => ({
                ...initialState,
                fetchProducts: async (keywords?: string) => {
                    const response: any = await getProducts(keywords);

                    set({
                        products: response.data
                    });
                },
                getProduct: (id: number) => {
                    return get().products.find((product) => product.id === id)!;
                }
            })
        ),
        storageOptions
    )
);