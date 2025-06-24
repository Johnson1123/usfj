import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';

const AccordionItem = ({ title, content, isOpen, index, onClick, image }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 5, delay: index * 0.1 }}
            className={`rounded-full my-5 py-5   ${
                isOpen ? '' : 'border-b border-gray-100'
            }`}
        >
            <button
                className={`w-full py-3 grid grid-cols-10 lg:gap-10 items-center transition-colors bg-white rounded-3xl  px-2 ${
                    isOpen ? 'rounded-br-none rounded-bl-none' : 'rounded-3xl'
                }`}
                onClick={onClick}
            >
                <div className="col-span-2 lg:col-span-3 justify-items-start">
                    {isOpen && (
                        <AnimatePresence>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className={` text-textColor/30 transition-all duration-700 text-[6vw] md:text-[5vw] lg:text-[4vw] 2xl:text-[3vw]`}
                            >
                                0{index + 1}.
                            </motion.p>
                        </AnimatePresence>
                    )}
                </div>

                <h3
                    className={`col-span-6 lg:col-span-6 text-left h3HeadingStyle`}
                >
                    {title}
                </h3>
                <div className="col-span-2 lg:col-span-1 justify-items-end">
                    <button
                        className={` flex-shrink-0 rounded-full w-[45px] h-[45px] lg:w-[45px] lg:h-[45px]  flex justify-center items-center ${
                            isOpen ? 'bg-white' : 'bg-bgBlue'
                        }`}
                    >
                        <ArrowRight
                            className={` text-2xl lg:text-3xl transition-all duration-500 ${
                                isOpen
                                    ? 'rotate-0 text-bgBlue'
                                    : '-rotate-45 text-white'
                            }`}
                        />
                    </button>
                </div>
            </button>
            <div className="grid grid-cols-1 mobile-landscape:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 ">
                <div className="mobile-landscape:col-start-2 mobile-landscape:col-span-2 md:col-start-2 md:col-span-2">
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.8 }}
                                className="overflow-hidden"
                            >
                                <div className="py-6 bg-white space-y-4">
                                    <p className={`pTextStyle`}>{content}</p>
                                </div>
                                <Image
                                    src={image}
                                    alt="hello"
                                    height={1500}
                                    width={200}
                                    className="w-full object-cover aspect-video rounded-xl"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default AccordionItem;
