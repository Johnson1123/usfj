'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import CategoriesOverlay from '../small/CategoriesOverlay';
import { Products, productsCategories } from '@/constant/product';

function ShpCategories() {
    const [categories, setCategories] = useState('all products');
    const [categoriesProduct, setCategoriesProducts] = useState([]);

    useEffect(() => {
        const filteredProducts = Products.filter(
            (product) => product.category == categories,
        );
        setCategoriesProducts(filteredProducts.slice(0, 4));
    }, [categories]);

    const handleFilter = (category) => {
        setCategories(category);
    };

    return (
        <div className="py-16 md:landscape:py-24 md:landscape:min-h-[100vh] md:flex items-center">
            <div className="2xl:w-[65%] 4k:w-[70%] w-[90%] mx-auto ">
                <div className="flex flex-col gap-10">
                    <h2 className="headingStyle sm:landscape:text-center md:text-center ">
                        Our Premium{' '}
                        <span className="text-primary ">Collection</span>
                    </h2>

                    <div className="w-[80%] md:w-max md:mx-auto sm:landscape:mx-auto h-max">
                        <div className="flex gap-x-5 gap-y-2 flex-wrap">
                            {productsCategories.map((item, i) => {
                                return (
                                    <button
                                        className={`${
                                            categories.toLowerCase() ===
                                            item.category.toLowerCase()
                                                ? 'text-primary'
                                                : 'text-bgBlue'
                                        } pTextStyle`}
                                        onClick={() =>
                                            handleFilter(item.category)
                                        }
                                        key={i}
                                    >
                                        {item.category}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                    {/* category images */}
                    <div className="h-max">
                        <div className="h-[950px] sm:landscape:h-[450px] md:h-[500px] md:landscape:h-[600px] w-full lg:w-[850px] xl:w-[900px] 2xl:w-[900px] 3k:w-[1000px] 4k:w-[1050px]  mx-auto mt-5 md:mt-10">
                            <div className="md:grid sm:landscape:grid grid-cols-5 grid-rows-2 gap-x-5  h-full w-full">
                                <div className="relative h-[450px] md:h-[auto] sm:landscape:h-auto col-start-1 col-end-3 row-start-1 row-end-3 rounded-lg bg-black">
                                    <Image
                                        src={`/categories-bag.png`}
                                        alt="Insight and Inspiration"
                                        fill={true}
                                        quality={100}
                                        layout="fill"
                                        className="object-contain rounded-[.5rem]"
                                    />
                                    <CategoriesOverlay
                                        name={'Woman'}
                                        link={'/shop'}
                                    />
                                </div>
                                <div className="grid grid-col-2 grid-rows-2 gap-y-5 col-start-3 col-end-6 row-start-1 row-end-3 mt-5 md:mt-0 sm:landscape:mt-0">
                                    <div className="relative h-[250px] md:h-[auto] sm:landscape:h-auto col-start-1 col-end-3 row-start-1 row-end-2 rounded-lg">
                                        <Image
                                            src={`/cap.png`}
                                            alt="Insight and Inspiration"
                                            fill={true}
                                            layout="fill"
                                            className="h-full w-full rounded-[.5rem]"
                                        />
                                        <CategoriesOverlay
                                            title={'Children'}
                                            link={'/shop'}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 grid-rows-1 gap-x-5 col-start-1 col-end-3 row-start-2 row-end-3">
                                        <div className="relative col-start-1 col-end-2 rounded-lg">
                                            <Image
                                                src={`/shirt.png`}
                                                alt="Insight and Inspiration"
                                                fill={true}
                                                layout="fill"
                                                className="h-full w-full rounded-[.5rem]"
                                            />
                                            <CategoriesOverlay
                                                title={'Men'}
                                                link={'/shop'}
                                            />
                                        </div>
                                        <div className="relative col-start-2 col-end-3  rounded-lg">
                                            <Image
                                                src={`/mug.png`}
                                                alt="Insight and Inspiration"
                                                fill={true}
                                                layout="fill"
                                                className="h-full w-full rounded-[.5rem]"
                                            />
                                            <CategoriesOverlay
                                                title={'Babies'}
                                                link={'/shop'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShpCategories;
