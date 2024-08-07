import { Product } from '../../models';
import './ProductItem.css';
import { Tooltip } from 'react-tooltip'

interface ProductItemProps {
    product: Product;
}

export const ProductItem: React.FC<ProductItemProps> = ({
    product
}) => {

    const previewImage = product?.images && product?.images.length > 0 ? product?.images[0] : '';

    const onImageError = (event: any) => {
        event.target.src = '/logo512.png';
    }

    return (
        <div className='product-item'>
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
                <div className='product-price'>$ {product.price.toFixed(2)}</div>
            </div>
        </div>
    );
}