import { useState, useEffect } from "react";

export const useDebounce = (cb: any, delay: number) => {
    const [debounceValue, setDebounceValue] = useState(cb);
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(cb);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [cb, delay]);
    return debounceValue;
}

export const generateReview = () => {
    const precision = 100;
    return Math.floor(Math.random() * (5 * precision - 1 * precision) + 1 * precision) / (1 * precision);
}

export const generateMockReviews = (length: number = 5) => {
    const reviews = [];
    const comments = [
        'Nice Product',
        'Bad Product',
        'Amazing',
        'Nice',
        'I recommend this product',
        'I do not recommend this product',
        'This product is good',
        'I will buy this again'
    ];

    for (let i = 0; i < length; i++) {
        reviews.push({
            name: `Reviewing User # ${i + 1}`,
            rating: generateReview().toFixed(1),
            comment: comments[Math.floor(Math.random() * comments.length)]
        })
    }

    return reviews;
}