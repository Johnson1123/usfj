'use client';
import React, { useEffect, useState } from 'react';
import Container from '../layout/Container';
import Image from 'next/image';
import { Products } from '@/constant/product';
import { FaAngleRight } from 'react-icons/fa6';
import { FaStar } from 'react-icons/fa';
import SecondaryButton from '../small/SecondaryButton';
import { useRouter } from 'next/navigation';

function ProductDetails({ id }) {
    const [product, setProduct] = useState(null);

    const [imageState, setImageState] = useState(0);

    const route = useRouter();

    const handleImageState = (num) => {
        setImageState(num);
    };

    const [qty, setQty] = useState(1);

    // decrease quantity
    const handleDecrease = () => {
        if (qty <= 1) return;
        setQty(qty - 1);
    };

    // increase quantity
    const handleIncrease = () => {
        if (qty >= 10) return;
        setQty(qty + 1);
    };

    const handleBuy = async (quantity, product_id, amount) => {
        try {
            const response = await fetch('/api/stripe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quantity: quantity,
                    product_id,
                    amount: amount * 100,
                }),
            });
            const data = await response.json();

            if (response.ok) {
                // toast.success('Successfully subscribed!');
                console.log('good');
                route.push(data.data.url);
            } else {
                // toast.error('Failed to subscribe. Please try again.');
                console.log('error');
            }
        } catch (error) {
            console.log(error);
            // toast.error('Failed to subscribe. Please try again.');
        }
    };

    useEffect(() => {
        const foundProduct = Products.find((p) => p.id === Number(id));
        setProduct(foundProduct);
    }, [id]);

    console.log(product);
    return (
        <div className="py-10 md:landscape:py-20">
            <Container>
                <div className="">
                    <div className="">
                        {/* product label */}
                        <div className="flex items-center">
                            <span>Shop</span>
                            <FaAngleRight />
                            <span>{'tag'}</span>
                            <FaAngleRight />
                            <span>Tropical Tree</span>
                        </div>

                        {/* Product details container */}
                        <div className="mt-7 grid grid-cols-1 ">
                            {/* product top */}
                            <div className="grid py-4 grid-cols-1 sm:landscape:grid-cols-2 sm:landscape:gap-10 md:grid-cols-2 md:gap-10 2xl:landscape:gap-36">
                                {/* product image */}
                                <div className="">
                                    <div className="relative aspect-square w-full sm:landscape:aspect-[1/1.6] md:landscape:aspect-[1/1.1] 2xl:landscape:aspect-square">
                                        <Image
                                            src={product?.images[imageState]}
                                            layout="fill"
                                            fill="true"
                                        />
                                    </div>
                                    {/* image control */}
                                    <div className="grid grid-cols-3 gap-5 mt-7">
                                        {product?.images.map((item, i) => {
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
                                                        quality={100}
                                                    />
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Product name, review datai, cart */}
                                <div className="mt-10 sm:landscape:mt-0 md:mt-0">
                                    {/* product title */}
                                    <div className="">
                                        <h3 className="headingStyle">
                                            {product?.name}
                                        </h3>{' '}
                                    </div>

                                    {/* product star reviews */}
                                    <div className="mt-3">
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
                                    <div className="mt-3">
                                        <p>
                                            <sub className="text-primary text-sm">
                                                $ {''}
                                            </sub>
                                            <span>{product?.price}</span>
                                        </p>
                                    </div>

                                    {/* product details */}
                                    <div className="mt-7">
                                        <p className="h3HeadingStyle">
                                            {' '}
                                            Details Product
                                        </p>
                                        <p className="py-3 pTextStyle">
                                            {product?.details}
                                        </p>
                                    </div>

                                    {/* product cart */}
                                    <div className="mt-3 flex flex-col gap-5 md:landscape:mt-10">
                                        {/* Quantity */}
                                        <div className="flex justify-between font-normal">
                                            <p className="pTextStyle !font-bold">
                                                Quantity
                                            </p>
                                            <div className="border border-bgBlue rounded-full px-2 py-[2px] flex gap-5">
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
                                        {/* size */}
                                        {product?.size && (
                                            <div className="flex justify-between">
                                                <p className="pTextStyle !font-bold">
                                                    Size
                                                </p>
                                                <div className="  flex gap-4">
                                                    {product?.size.map(
                                                        (item, i) => {
                                                            return (
                                                                <button
                                                                    key={i}
                                                                    className=" border border-bgBlue rounded-full px-3 py-[2px]"
                                                                >
                                                                    {item}
                                                                </button>
                                                            );
                                                        },
                                                    )}
                                                </div>
                                            </div>
                                        )}
                                        {/* subTotal */}
                                        <div className="flex justify-between items-center">
                                            <p className="pTextStyle !font-bold">
                                                Sub total
                                            </p>
                                            <p className="h3HeadingStyle">
                                                <span className="text-primary">
                                                    $
                                                </span>{' '}
                                                {(qty * product?.price).toFixed(
                                                    2,
                                                )}
                                            </p>
                                        </div>
                                    </div>

                                    {/* checkout button */}
                                    <div className="mt-7">
                                        <SecondaryButton
                                            label={'Buy Now'}
                                            handler={() =>
                                                handleBuy(
                                                    qty,
                                                    product.product_id,
                                                    product.discount_price,
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* product bottom */}
                            <div className="mt-7 grid py-4 grid-cols-1 sm:landscape:grid-cols-2 sm:landscape:gap-10 sm:landscape:mt-24 2xl:landscape:gap-36 md:grid-cols-2 md:gap-10 md:mt-24">
                                <div className="">
                                    <p className="h3HeadingStyle">
                                        Description
                                    </p>

                                    <p className="py-3 pTextStyle">
                                        {product?.description}
                                    </p>
                                </div>
                                <div className="relative aspect-square sm:landscape:aspect-[1/1.6] md:landscape:aspect-[1/1.15] md:aspect-[1/1.3] w-full">
                                    <Image
                                        src={product?.images[imageState]}
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
