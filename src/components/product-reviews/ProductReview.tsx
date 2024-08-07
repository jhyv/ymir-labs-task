import { useState } from 'react';
import { Product } from '../../models';
import './ProductReview.css';
import { FaStar } from "react-icons/fa6";
import { generateMockReviews, generateReview } from '../../utils';

interface ProductReviewProps {
    product: Product;
}

export const ProductReview: React.FC<ProductReviewProps> = ({
    product
}) => {
    const [reviews, setReviews] = useState(generateMockReviews());

    const stars = generateReview().toFixed(1);

    return (
        <div className='product-review-container'>
            <div className='product-stars'>
                Rating:&nbsp;
                {stars}
                <FaStar />
            </div>
            <div className='user-reviews'>
                {
                    reviews.map((review, index) => (
                        <div key={`review${index}`} className='review-item'>
                            <div className='user-img'>
                                <div className='profile-wrapper'>
                                    <img src="/logo192.png" alt="user profile" />
                                </div>
                            </div>
                            <div className='review-details'>
                                <div className='review-stars'>
                                    {review.rating}
                                    <FaStar />
                                </div>
                                <div className='review-comment'>
                                    {review.comment}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}