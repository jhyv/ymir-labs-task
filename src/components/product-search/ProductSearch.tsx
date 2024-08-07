import { FaMagnifyingGlass } from 'react-icons/fa6';
import './ProductSearch.css';
import { useProductStore } from '../../store';
interface ProductSearchProps {
    keyword: string;
    setKeyword: any;
}

export const ProductSearch: React.FC<ProductSearchProps> = ({
    keyword,
    setKeyword
}) => {
    const products = useProductStore((state) => state.products);

    return (
        <div className='search-container'>
            <div className='search-icon'>
                <FaMagnifyingGlass />
            </div>
            <div className='search-wrapper'>
                <input type="text" placeholder='Search Product' value={keyword} onInput={(e: any) => setKeyword(e.target.value)} list='product-list' />
                <datalist id="product-list">
                    {
                        products.map((product) => (
                            <option value={product.title}></option>
                        ))
                    }
                </datalist>
            </div>
        </div>
    )
}