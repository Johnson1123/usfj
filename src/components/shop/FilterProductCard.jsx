import React from 'react';
import ReviewStars from '../small/ReviewStars';
import Image from 'next/image';
import { reviews } from '@/constant/data';

function FilterProductCard({
    name,
    sponsor,
    discount_price,
    total_reviews,
    img,
}) {
    return (
        <div>
            <div className=" w-full h-auto p-3 rounded-lg bg-white">
                {/* Image */}
                <div className="relative left-0 top-0 aspect-square w-full">
                    <Image
                        src={img}
                        alt={name}
                        fill={true}
                        layout="fill"
                        quality={100}
                        className="rounded-lg"
                    />
                </div>

                {/* description */}
                <div className="pt-4 flex flex-col gap-1">
                    <h3>{name}</h3>
                    <p className="text-sm text-slate-500">{sponsor}</p>
                    <p className="h3HeadingStyle">${discount_price}</p>
                    <div className="flex items-center justify-between">
                        <ReviewStars number_of_reviews={4} />
                        <p className="flex">(10)</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilterProductCard;
