import React from 'react';
import Container from '../layout/Container';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

function ReviewsSection() {
    return (
        <div className=" bg-[#F7F9FF] flex justify-center items-center py-16 xl:py-[5rem] 3k:py-[20rem]">
            <Container>
                <div className="mx-auto">
                    <h2 className="headingStyle text-center">
                        What Our Customers{' '}
                        <span className="text-bgOrange">Say</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 grid-rows-1 sm:landscape:grid-cols-2 sm:landscape:grid-rows-2 md:landscape:grid-cols-2 md:landscape:grid-rows-2 md:grid-cols-2 md:grid-rows-2 sm:landscape:gap-10 gap-5 md:landscape:gap-5 2xl:landscape:gap-[2vw] w-full mt-16 md:landscape:w-[90%] lg:w-[90%] xl:w-[80%] 2xl:w-[70%] 3k:w-[75%] 4k:w-[70%]  mx-auto ">
                    {/* first box */}
                    <div className="col-span-1 col-row-1  p-3 bg-white rounded-2xl hover:bg-primary group lg:landscape:flex  items-center gap-5 transition-[background] duration-1000 aspect-[1/.4] 2xl:px-10 2xl:landscape:gap-[2.2vw]">
                        <div className="relative aspect-square w-full md:landscape:aspect-square">
                            <Image
                                src={`/images/customer-1.png`}
                                alt="Insight and Inspiration"
                                fill={true}
                                quality={100}
                                layout="fill"
                                className="rounded-[.5rem]"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-10 md:mt-5 xl:mt-0">
                            <div className="flex text-yellow-500 group-hover:text-white sm:text-base md:text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4 className="h3HeadingStyle mt-2 group-hover:!text-white">
                                Big Kante
                            </h4>

                            <p className="pTextStyle mt-2 group-hover:!text-white !text-sm 3k:!text-lg">
                                "I have been attending USFJ for a few months
                                now, and I must say it has been a life-changing
                                experience. The community is so supportive and
                                loving." - Emily Wilson
                            </p>

                            <h3 className="mt-2 pTextStyle group-hover:!text-white">
                                Marcon Flex
                            </h3>
                        </div>
                    </div>

                    {/* second box */}
                    <div className="col-span-1 col-row-1  p-3 bg-white rounded-2xl hover:bg-primary group lg:landscape:flex  items-center gap-5 transition-[background] duration-1000 aspect-[1/.4] 2xl:px-10 2xl:landscape:gap-[2.2vw]">
                        <div className="relative aspect-square w-full md:landscape:aspect-square">
                            <Image
                                src={`/images/customer-1.png`}
                                alt="Insight and Inspiration"
                                fill={true}
                                quality={100}
                                layout="fill"
                                className="rounded-[.5rem]"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-10 md:mt-5 xl:mt-0">
                            <div className="flex text-yellow-500 group-hover:text-white sm:text-base md:text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4 className="h3HeadingStyle mt-2 group-hover:!text-white">
                                Big Kante
                            </h4>

                            <p className="pTextStyle mt-2 group-hover:!text-white !text-sm 3k:!text-lg">
                                "I have been attending USFJ for a few months
                                now, and I must say it has been a life-changing
                                experience. The community is so supportive and
                                loving." - Emily Wilson
                            </p>

                            <h3 className="mt-2 pTextStyle group-hover:!text-white">
                                Marcon Flex
                            </h3>
                        </div>
                    </div>

                    {/* third box */}
                    <div className="col-span-1 col-row-1  p-3 bg-white rounded-2xl hover:bg-primary group lg:landscape:flex  items-center gap-5 transition-[background] duration-1000 aspect-[1/.4] 2xl:px-10 2xl:landscape:gap-[2.2vw]">
                        <div className="relative aspect-square w-full md:landscape:aspect-square">
                            <Image
                                src={`/images/customer-1.png`}
                                alt="Insight and Inspiration"
                                fill={true}
                                quality={100}
                                layout="fill"
                                className="rounded-[.5rem]"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-10 md:mt-5 xl:mt-0">
                            <div className="flex text-yellow-500 group-hover:text-white sm:text-base md:text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4 className="h3HeadingStyle mt-2 group-hover:!text-white">
                                Big Kante
                            </h4>

                            <p className="pTextStyle mt-2 group-hover:!text-white !text-sm 3k:!text-lg">
                                "I have been attending USFJ for a few months
                                now, and I must say it has been a life-changing
                                experience. The community is so supportive and
                                loving." - Emily Wilson
                            </p>

                            <h3 className="mt-2 pTextStyle group-hover:!text-white">
                                Marcon Flex
                            </h3>
                        </div>
                    </div>

                    {/* fouth box */}
                    <div className="col-span-1 col-row-1  p-3 bg-white rounded-2xl hover:bg-primary group lg:landscape:flex  items-center gap-5 transition-[background] duration-1000 aspect-[1/.4] 2xl:px-10 2xl:landscape:gap-[2.2vw]">
                        <div className="relative aspect-square w-full md:landscape:aspect-square">
                            <Image
                                src={`/images/customer-1.png`}
                                alt="Insight and Inspiration"
                                fill={true}
                                quality={100}
                                layout="fill"
                                className="rounded-[.5rem]"
                            />
                        </div>
                        <div className="flex flex-col justify-center mt-10 md:mt-5 xl:mt-0">
                            <div className="flex text-yellow-500 group-hover:text-white sm:text-base md:text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            <h4 className="h3HeadingStyle mt-2 group-hover:!text-white">
                                Big Kante
                            </h4>

                            <p className="pTextStyle mt-2 group-hover:!text-white !text-sm 3k:!text-lg">
                                "I have been attending USFJ for a few months
                                now, and I must say it has been a life-changing
                                experience. The community is so supportive and
                                loving." - Emily Wilson
                            </p>

                            <h3 className="mt-2 pTextStyle group-hover:!text-white">
                                Marcon Flex
                            </h3>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ReviewsSection;
