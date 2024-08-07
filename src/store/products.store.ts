import { create } from "zustand";
import { getProducts } from "../services";

interface ProductState {
    products: any[];
}

interface ProductActions {
    fetchProducts: () => any;
}

const initialState: ProductState = {
    products: []
}


export const useProductStore = create<ProductState & ProductActions>((set) => ({
    ...initialState,
    fetchProducts: async () => {
        const response: any = await getProducts();
        set({
            products: response.data
        });
    }
}))