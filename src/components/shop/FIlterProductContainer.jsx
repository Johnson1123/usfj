'use client';
import React, { useState } from 'react';
import FilterProductCard from './FilterProductCard';
import { productsCategories } from '@/constant/product';
import { CiFilter } from 'react-icons/ci';

function FIlterProductContainer() {
    const [categories, setCategories] = useState('all products');

    return (
        <div className="flex justify-center items-center py-16 xl:py-[5rem] 3k:py-[20rem]">
            <div className="grid grid-cols-1 sm:landscape:grid-cols-6 md:portrait:grid-cols-6 md:landscape:w-[90%]  lg:landscape:w-[85%] xl:landscape:w-[80%]  2xl:landscape:w-[75%] 2xl:landscape:gap-20 3k:landscape:w-[70%] md:portrait:w-[90%] mx-auto">
                {/* navigation */}
                <div
                    className="bg-white py-10 px-5 sm:landscape:col-span-2 md:portrait:col-span-2
                "
                >
                    {/*  searchh*/}
                    <div className="flex items-center bg-white rounded-full overflow-hidden w-[70%] sm:landscape:w-full 2xl:landscape:w-[70%] border border-slate-400 px-1">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="p-1 w-full outline-none"
                        />
                        <button className="p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-[#d3d3d3]"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* price range */}
                    <div className="flex flex-col items-center gap-4 w-[70%] sm:landscape:w-full 2xl:landscape:w-[70%] mt-7">
                        <div className="flex items-center justify-between w-full">
                            <label
                                htmlFor="price-range"
                                className="text-sm text-gray-500 ml-2"
                            >
                                Price Range
                            </label>
                            <CiFilter />
                        </div>
                        <input
                            type="range"
                            id="price-range"
                            min="0"
                            max="1000"
                            className="w-full mt-1 bg-gray-200"
                        />
                        <div className="flex justify-between mt-2 w-full">
                            <span className="text-sm text-gray-500">0</span>
                            <span className="text-sm text-gray-500">1000</span>
                        </div>
                    </div>

                    {/*  */}

                    <div className="md:mx-auto sm:landscape:mx-auto h-max mt-3">
                        <h5 className="h3HeadingStyle py-5">
                            Product Categories
                        </h5>
                        <div className="flex gap-x-5 gap-y-2 flex-wrap sm:landscape:flex-col md:portrait:flex-col sm:landscape:gap-y-3 ">
                            {/* All product button */}

                            <button
                                className={`${
                                    categories.toLowerCase() === 'all products'
                                        ? 'text-primary'
                                        : 'text-bgBlue'
                                } pTextStyle sm:landscape:!text-left md:portrait:!text-left`}
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
                                        } pTextStyle sm:landscape:!text-left md:portrait:!text-left`}
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
                </div>

                {/*  */}
                <div className="flex justify-center py-4 sm:landscape:col-span-4 md:portrait:col-span-4 bg-white">
                    <div className="grid grid-cols-2 sm:landscape:grid-cols-3 sm:portrait:grid-cols-3 w-full">
                        <FilterProductCard
                            name={'Tropical Rain bag'}
                            sponsor={'USFJ'}
                            discount_price={'65.00'}
                            total_reviews={4.5}
                            img={'/images/Stacy.webp'}
                        />
                        <FilterProductCard
                            name={'Tropical Rain bag'}
                            sponsor={'USFJ'}
                            discount_price={'65.00'}
                            total_reviews={4.5}
                            img={'/images/Stacy.webp'}
                        />
                        <FilterProductCard
                            name={'Tropical Rain bag'}
                            sponsor={'USFJ'}
                            discount_price={'65.00'}
                            total_reviews={4.5}
                            img={'/images/Stacy.webp'}
                        />
                        <FilterProductCard
                            name={'Tropical Rain bag'}
                            sponsor={'USFJ'}
                            discount_price={'65.00'}
                            total_reviews={4.5}
                            img={'/images/Stacy.webp'}
                        />
                        <FilterProductCard
                            name={'Tropical Rain bag'}
                            sponsor={'USFJ'}
                            discount_price={'65.00'}
                            total_reviews={4.5}
                            img={'/images/Stacy.webp'}
                        />
                        <FilterProductCard
                            name={'Tropical Rain bag'}
                            sponsor={'USFJ'}
                            discount_price={'65.00'}
                            total_reviews={4.5}
                            img={'/images/Stacy.webp'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FIlterProductContainer;
