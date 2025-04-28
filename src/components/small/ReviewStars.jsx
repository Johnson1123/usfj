import React from 'react';
import { FaStar } from 'react-icons/fa';

function ReviewStars({ number_of_reviews }) {
    return (
        <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`text-${
                        number_of_reviews >= index + 1 ? 'yellow' : 'gray'
                    }-500`}
                >
                    <FaStar />
                </span>
            ))}
        </div>
    );
}

export default ReviewStars;
