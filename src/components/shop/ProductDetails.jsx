import React, { useState } from 'react';
import Container from '../layout/Container';
import Image from 'next/image';
import { Products } from '@/constant/product';
import { FaAngleRight } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';

function ProductDetails() {
    const [imageState, setImageState] = useState(0);

    const handleImageState = (num) => {
        setImageState(num);
    };

    const [qty, setQty] = useState(1);

    const handleDecrease = () => {
        if (qty <= 1) return;
        setQty(qty - 1);
    };
    const handleIncrease = () => {
        if (qty >= 10) return;
        setQty(qty + 1);
    };

    const [size, setSize] = useState(1);

    const product = Products[0];

    return (
        <div className="py-10">
            <Container>
                <div className="">
                    {/* Product details container */}
                    <div className="">
                        {/* product top label */}
                        <div className="flex items-center">
                            <span>Shop</span>
                            <FaAngleRight />
                            <span>Tees</span>
                            <FaAngleRight />
                            <span>Tropical Tree</span>
                        </div>

                        <div className="mt-10">
                            {/* product top */}
                            <div className="">
                                {/* product image */}
                                <div className="">
                                    <div className="relative aspect-square w-full">
                                        <Image
                                            src={product.images[imageState]}
                                            layout="fill"
                                            fill="true"
                                        />
                                    </div>
                                    {/* image control */}
                                    <div className="grid grid-cols-3 gap-5 mt-5">
                                        {product.images.map((item, i) => {
                                            return (
                                                <div
                                                    className={`relative col-span-1 w-full aspect-square rounded-md overflow-hidden ${
                                                        i == imageState
                                                            ? 'border border-primary'
                                                            : ''
                                                    }`}
                                                    onClick={() =>
                                                        handleImageState(i)
                                                    }
                                                >
                                                    <Image
                                                        src={product.images[i]}
                                                        layout="fill"
                                                        fill="true"
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Product name, review datail */}
                                <div className="">
                                    <div className="">
                                        <h3>{product.title}</h3>{' '}
                                    </div>
                                    <div className="">
                                        {/* stars reviews */}
                                        <div className="flex text-yellow-500 sm:text-base md:text-lg">
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </div>
                                    </div>

                                    {/* Price  */}
                                    <div className="">
                                        <p>
                                            <sub className="text-primary text-sm">
                                                $ {''}
                                            </sub>
                                            <span>{product.price}</span>
                                        </p>
                                    </div>

                                    {/* product details */}
                                    <div className="">
                                        <p className="h3HeadingStyle">
                                            {' '}
                                            Details Product
                                        </p>
                                        <p>{product.details}</p>
                                    </div>

                                    {/* product cart */}
                                    <div className="mt-3">
                                        <div className="flex justify-between">
                                            <p>Quantity</p>
                                            <div className="border border-bgBlue rounded-full px-2 py-1 flex gap-5">
                                                <button
                                                    onClick={handleDecrease}
                                                    className="cursor-pointer"
                                                >
                                                    -
                                                </button>
                                                <span className="pTextStyle">
                                                    {qty}
                                                </span>
                                                <button
                                                    onClick={handleIncrease}
                                                    className="cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* product bottom */}
                            <div className="">
                                <div className="">
                                    <p className="h3HeadingStyle">
                                        Description
                                    </p>

                                    <p>{product.description}</p>
                                </div>
                                <div className="relative aspect-square w-full">
                                    <Image
                                        src={product.images[imageState]}
                                        layout="fill"
                                        fill="true"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProductDetails;
