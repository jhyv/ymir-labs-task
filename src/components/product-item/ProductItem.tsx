import { FaStar } from 'react-icons/fa6';
import { Product } from '../../models';
import { ProductReview } from '../product-reviews/ProductReview';
import './ProductItem.css';
import { Tooltip } from 'react-tooltip'
import { generateReview } from '../../utils';

interface ProductItemProps {
    product: Product;
    mode?: 'item' | 'detail'
}

export const ProductItem: React.FC<ProductItemProps> = ({
    product,
    mode
}) => {

    mode = mode ?? 'item';

    const previewImage = product?.images && product?.images.length > 0 ? product?.images[0] : '';

    const onImageError = (event: any) => {
        event.target.src = '/logo512.png';
    }

    return (
        <>
            <div className={`product-item ${mode}`}>
                <div className='product-img'>
                    <img
                        src={previewImage}
                        alt={product.title}
                        onError={onImageError}
                    />
                </div>
                <div className='product-desc'>
                    <a href={`/products/${product.id}`} className={`product-title product-title${product.id}`}>{product.title}</a>
                    <Tooltip anchorSelect={`.product-title${product.id}`}>{product.title}</Tooltip>
                    {
                        mode === 'detail' &&
                        <div className='product-body'>{product.description}</div>
                    }
                    <div className='product-cateogry'>{product.category?.name}</div>
                    <div className='product-price'>$ {product.price.toFixed(2)}</div>

                    {
                        mode === 'item' &&
                        <div className="product-review">
                            {generateReview().toFixed(1)}
                            <FaStar />
                        </div>
                    }
                </div>
            </div>
            {
                mode === 'detail' &&
                <ProductReview product={product} />
            }
        </>
    );
}