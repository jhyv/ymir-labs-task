import { useEffect } from 'react';
import { Layout } from '../../components';
import { useProductStore } from '../../store';
import './Home.css';

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
            <h1>Home</h1>

            {
                products &&
                products.map((product) => (
                    <div>
                        {product.title}
                    </div>
                ))
            }
        </Layout>
    );
}