'use client';
import React, { useEffect, useRef, useState } from 'react';

import TransparentButton from '../small/TransparentButton';
import SecondaryButton from '../small/SecondaryButton';
import './layout.css';
import { navItems } from '@/constant/navItems';
import Link from 'next/link';
import { TfiAngleDown } from 'react-icons/tfi';
import { useRouter } from 'next/navigation';
import { Logs } from 'lucide-react';
import { MdClose } from 'react-icons/md';
import useClickOutside from '@/hooks/ClickOutside';
import useBaseurl from '@/utils/baseurl';
import AboutWhoWeAreMissonBox from '../small/AboutWhoWeAreBox';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [setActiveItem] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const router = useRouter();
    const [scrollPositionY, setScrollPositionY] = useState(0);

    const ref = useRef();
    const angleRef = useRef();

    const baseurl = useBaseurl();

    // function handleOutide(event) {
    //     if (angleRef.current == angleRef.current.contains(event.target)) return;
    //     setDropdown(!dropdown);
    // }

    const handleScrollPosition = () => {
        setScrollPositionY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPosition);

        return () => {
            window.removeEventListener('scroll', handleScrollPosition);
        };
    }, []);

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    useClickOutside(ref, () => setDropdown(false));

    const handleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleActiveItem = () => {
        setActiveItem(index);
    };

    // route to the login page
    const handleLogin = () => {
        router.push(baseurl + '/auth/login');
    };

    const handleDonate = () => {
        router.push('https://buy.stripe.com/fZebMI29Ze2s1TG146');
    };

    return (
        <>
            <header
                className={`w-full fixed ${
                    scrollPositionY >= 5
                        ? 'top-[0%] py-0 bg-[#fff]/50 backdrop-blur-md'
                        : 'top-[2%] py-2'
                }  left-0 flex justify-center items-center  z-50  transition-all  duration-300 ease-linear`}
            >
                <div
                    className={`bg-bgWhite w-[90%] lg:[80%]  flex justify-between items-center py-3 px-3 mobile-landscape:py-3 md-landscape:py-3 ${
                        scrollPositionY >= 5
                            ? ' rounded-none w-full !bg-transparent'
                            : 'rounded-full headerMainWrapper'
                    } transition-all  duration-300 ease-linear h-full`}
                >
                    <div className="w-auto h-full">
                        <Link href={baseurl}>
                            <img
                                src="/images/USFJ-DARK-Logo.png"
                                fill
                                alt="usfj-logo"
                                className="w-[150px] 3k:w-[180px]"
                            />
                        </Link>
                    </div>

                    {/*navbar container  */}

                    <div
                        className={`${
                            isOpen
                                ? 'fixed left-0 top-0 h-[100vh] w-full bg-white mobile-landscape:overflow-y-scroll md-landscape:overflow-y-scroll no-scrollbar'
                                : 'hidden'
                        }  lg:flex`}
                    >
                        <nav
                            className={`bg-bgBlue ${
                                isOpen
                                    ? 'h-full w-[80%] rounded-none md-landscape:h-[125%] mobile-landscape:h-[125%]'
                                    : ''
                            } px-4 py-2.5 lg:py-2.5 xl:py2.5 rounded-full border-none`}
                        >
                            <ul
                                className={`${
                                    isOpen
                                        ? 'flex-col mt-10 pt-10 md-landscape:mt-4 landscape:md-landscape:pt-4 landscape:mobile-landscape:mt-4 mobile-landscape:pt-4 lg:px-3 px-5 '
                                        : ''
                                } flex lg:justify-center lg:items-center gap-8 lg:gap-1 xl:gap-8`}
                            >
                                {navItems.map((item, i) => {
                                    return item.items ? (
                                        // dropdown container link
                                        <div
                                            key={i}
                                            className="flex flex-col gap-3 relative left-0 top-0"
                                            ref={ref}
                                        >
                                            <div className="flex  items-center gap-3 ">
                                                <p
                                                    className="flex  items-center gap-3 cursor-pointer font-300"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDropdown();
                                                    }}
                                                >
                                                    <span className="!text-white">
                                                        {item.label}
                                                    </span>
                                                </p>
                                                <i>
                                                    <TfiAngleDown
                                                        color="white"
                                                        className={`${
                                                            dropdown &&
                                                            'rotate-180'
                                                        }`}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleDropdown();
                                                        }}
                                                    />
                                                </i>
                                            </div>

                                            <ul
                                                className={`absolute left-0 top-8 3k:top-14 flex-col gap-5 mt-1 w-max py-5 px-10 bg-gray-100 rounded-md transition-all duration-300 ${
                                                    dropdown
                                                        ? 'flex h-max'
                                                        : 'hidden'
                                                }`}
                                            >
                                                {item.items.map(
                                                    (subItem, i) => {
                                                        return (
                                                            <li
                                                                key={i}
                                                                className="relative left-0 top-0 cursor-pointer group"
                                                            >
                                                                <div
                                                                    className={`!text-blueColor font-300 relative`}
                                                                >
                                                                    {
                                                                        subItem.label
                                                                    }

                                                                    <div className="absolute left-full top-0 ml-2 w-max hidden group-hover:block bg-white">
                                                                        <div
                                                                            className={`flex-col gap-7 my-7`}
                                                                        >
                                                                            {subItem.content?.map(
                                                                                (
                                                                                    contentItem,
                                                                                    index,
                                                                                ) => {
                                                                                    return (
                                                                                        <div
                                                                                            key={
                                                                                                index
                                                                                            }
                                                                                            className="bg-[#F7F9FF] rounded-[20px] px-5 flex flex-col gap-5 py-7"
                                                                                        >
                                                                                            <h3
                                                                                                className={`h3HeadingStyle`}
                                                                                            >
                                                                                                {
                                                                                                    contentItem.title
                                                                                                }
                                                                                            </h3>
                                                                                            <p
                                                                                                className={`pTextStyle`}
                                                                                            >
                                                                                                {
                                                                                                    contentItem.text
                                                                                                }
                                                                                            </p>
                                                                                        </div>
                                                                                    );
                                                                                },
                                                                            )}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        );
                                                    },
                                                )}
                                            </ul>
                                        </div>
                                    ) : (
                                        // links
                                        <li
                                            key={i}
                                            className="text-white lg:px-[10px] hover:opacity-50"
                                        >
                                            <Link
                                                href={baseurl + item.link}
                                                className="!text-white "
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                            <div
                                className={
                                    'lg:hidden flex justify-center flex-col mt-10 gap-7 ml-5 md-landscape:mt-10 mobile-landscape:mt-10 md-landscape:gap-7 mobile-landscape:gap-7 '
                                }
                            >
                                {/* sign In btn */}
                                {/* <div className="">
                                    <TransparentButton
                                        handler={handleLogin}
                                        label={'Sign In'}
                                    />
                                </div> */}

                                <div className="">
                                    <Link
                                        className="text-center 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full px-4 py-2 text-white bg-bgOrange cursor-pointer font-manFont !font-medium transition-all duration-300 ease-in-out hover:bg-transparent border hover:border-bgOrange hover:text-bgOrange"
                                        href="https://buy.stripe.com/fZebMI29Ze2s1TG146"
                                        target="_blank"
                                    >
                                        Donate Now
                                    </Link>
                                </div>
                            </div>
                        </nav>

                        <div
                            className="absolute top-12 right-7 lg:hidden rounded-full h-10 w-10 flex justify-center items-center "
                            onClick={() => setIsOpen()}
                        >
                            <MdClose className="text-2xl text-bgBlue" />
                        </div>
                    </div>

                    {/* authentication button */}

                    <div className="flex justify-center items-center lg:gap-2 xl:gap-5 ">
                        {/* login btn */}
                        {/* <div className="2xl:flex xl:flex lg:flex 4k:flex 3k:flex 5k:flex hidden">
                            <TransparentButton
                                label="Sign In"
                                handler={handleLogin}
                            />
                        </div> */}

                        <div className="2xl:flex xl:flex lg:flex 4k:flex 3k:flex 5k:flex hidden">
                            <Link
                                className="text-center 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full px-4 py-2 text-white bg-bgOrange cursor-pointer font-manFont !font-medium transition-all duration-300 ease-in-out hover:bg-transparent border hover:border-bgOrange hover:text-bgOrange"
                                href="https://buy.stripe.com/fZebMI29Ze2s1TG146"
                                target="_blank"
                            >
                                Donate Now
                            </Link>
                        </div>

                        <button
                            className="text-black px-2 cursor-pointer flex 2xl:hidden xl:hidden lg:hidden 4k:hidden 3k:hidden lg:landscape:hidden"
                            onClick={() => handleOpen()}
                        >
                            <Logs size={35} />
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;

// ('our believe statement');
// Join now
// remove arrow btn
// arrow point up
// more info to about page
// Join us change lifes
