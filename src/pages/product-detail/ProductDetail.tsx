import { useParams } from 'react-router-dom';
import { Layout, ProductItem } from '../../components';
import { useProductStore } from '../../store';
import './ProductDetail.css';

interface ProductDetailProps { }

export const ProductDetail: React.FC<ProductDetailProps> = () => {
    const getProduct = useProductStore((state) => state.getProduct);
    const { id } = useParams();
    const product = getProduct(parseInt(id!));


    return (
        <Layout headerTitle={product.title}>
            <div className='product-details'>
                <ProductItem product={product} mode='detail' />
            </div>
        </Layout>
    )
}