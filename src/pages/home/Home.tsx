import { useEffect } from 'react';
import { Layout, ProductItem } from '../../components';
import { useProductStore } from '../../store';
import './Home.css';
import { Product } from '../../models';

interface HomeProps { }

export const Home: React.FC<HomeProps> = () => {
    const { fetchProducts, products } = useProductStore(({
        fetchProducts,
        products
    }) => ({
        fetchProducts,
        products
    }))

    useEffect(() => {
        fetchProducts();
    }, []);


    return (
        <Layout headerTitle='Products'>
            <h3>{products.length} total products</h3>
            <div className='product-container'>
                {
                    products.length > 0 &&
                    products.map((product: Product) => (
                        <ProductItem product={product} key={product.id} />
                    ))
                }
            </div>
        </Layout>
    );
}