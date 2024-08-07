import { useEffect, useState } from 'react';
import { Layout, ProductItem, ProductSearch } from '../../components';
import { useProductStore } from '../../store';
import './Home.css';
import { Product } from '../../models';
import { useDebounce } from '../../utils';

interface HomeProps { }

export const Home: React.FC<HomeProps> = () => {
    const { fetchProducts, products } = useProductStore(({
        fetchProducts,
        products
    }) => ({
        fetchProducts,
        products
    }));
    const [keywords, setKeywords] = useState('');

    useEffect(() => {
        fetchProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const debounceValue = useDebounce(keywords, 2000);

    useEffect(() => {
        if (keywords.length > 0)
            fetchProducts(keywords);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [debounceValue]);

    return (
        <Layout headerTitle='Products'>
            <div className='product-container product-header'>
                <h2>Product List</h2>
                <ProductSearch keyword={keywords} setKeyword={setKeywords} />
                {
                    products.length > 0 &&
                    <h3>{products.length} total products</h3>
                }
            </div>
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