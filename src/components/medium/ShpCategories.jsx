'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import CategoriesOverlay from '../small/CategoriesOverlay';
import { Products, productsCategories } from '@/constant/product';
import Container from '../layout/Container';

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
            <Container>
                <div className="flex flex-col gap-10">
                    <h2 className="headingStyle sm:landscape:text-center md:text-center ">
                        Our Premium{' '}
                        <span className="text-primary ">Collection</span>
                    </h2>

                    <div className="md:mx-auto sm:landscape:mx-auto h-max">
                        <div className="flex gap-x-5 gap-y-2 flex-wrap">
                            {/* All product button */}
                            <button
                                className={`${
                                    categories.toLowerCase() === 'all products'
                                        ? 'text-primary'
                                        : 'text-bgBlue'
                                } pTextStyle`}
                                onClick={() => handleFilter(item.category)}
                            >
                                All Products
                            </button>
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
                        <div className=" w-full md:landscape:w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] 3k:w-[75%] 4k:w-[70%]   mx-auto mt-5 md:mt-10">
                            <div className="md:grid sm:landscape:grid grid-cols-5 grid-rows-2 gap-x-5  h-full w-full">
                                <div className="relative h-[450px] md:h-[auto] sm:landscape:h-auto col-start-1 col-end-3 row-start-1 row-end-3 rounded-lg bg-black overflow-hidden group">
                                    <Image
                                        src={`/categories-bag.png`}
                                        alt="Insight and Inspiration"
                                        fill={true}
                                        quality={100}
                                        layout="fill"
                                        className="object-contain rounded-[.5rem]"
                                    />
                                    <div className="absolute opacity-30 h-full w-full left-0 top-0 bg-black group-hover:bg-transparent rounded-[.5rem] transition-all duration-700"></div>
                                    <CategoriesOverlay
                                        name={'Woman'}
                                        link={'/shop/filter/bags'}
                                    />
                                </div>
                                {/* right columns */}
                                <div className="grid grid-col-2 grid-rows-2 gap-y-5 col-start-3 col-end-6 row-start-1 row-end-3 mt-5 md:mt-0 sm:landscape:mt-0">
                                    {/* right top box */}
                                    <div className="relative h-[250px] md:h-[auto] sm:landscape:h-auto col-start-1 col-end-3  row-start-1 row-end-2 rounded-lg group overflow-hidden">
                                        <Image
                                            src={`/cap.png`}
                                            alt="Insight and Inspiration"
                                            fill={true}
                                            layout="fill"
                                            className="h-full w-full rounded-[.5rem]"
                                        />
                                        <div className="absolute opacity-30 h-full w-full left-0 top-0 bg-black group-hover:bg-transparent rounded-[.5rem] transition-all duration-700"></div>
                                        <CategoriesOverlay
                                            name={'Children'}
                                            link={'/shop/filter/caps'}
                                        />
                                    </div>

                                    {/* buttom right column */}
                                    <div className="grid grid-cols-2 grid-rows-1 gap-x-5 col-start-1 col-end-3 row-start-2 row-end-3">
                                        {/* bottom right box */}
                                        <div className="relative col-start-1 col-end-2 rounded-lg aspect-square overflow-hidden group">
                                            <Image
                                                src={`/shirt.png`}
                                                alt="Insight and Inspiration"
                                                fill={true}
                                                layout="fill"
                                                className="h-full w-full rounded-[.5rem]"
                                            />
                                            <div className="absolute opacity-30 h-full w-full left-0 top-0 bg-black group-hover:bg-transparent rounded-[.5rem] transition-all duration-700"></div>
                                            <CategoriesOverlay
                                                name={'Men'}
                                                link={'/shop/filter/t-shirts'}
                                            />
                                        </div>

                                        {/* bottom left box */}
                                        <div className="relative col-start-2 col-end-3  rounded-lg aspect-square overflow-hidden group">
                                            <Image
                                                src={`/mug.png`}
                                                alt="Insight and Inspiration"
                                                fill={true}
                                                layout="fill"
                                                className="h-full w-full rounded-[.5rem]"
                                            />
                                            <div className="absolute opacity-30 h-full w-full left-0 top-0 bg-black group-hover:bg-transparent rounded-[.5rem] transition-all duration-700"></div>
                                            <CategoriesOverlay
                                                name={'Babies'}
                                                link={'/shop/filter/mugs'}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ShpCategories;
