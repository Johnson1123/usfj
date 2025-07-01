'use client';
import React, { useEffect, useRef, useState } from 'react';

import './layout.css';
import { navItems } from '@/constant/navItems';
import Link from 'next/link';
import { TfiAngleDown } from 'react-icons/tfi';
import { useRouter } from 'next/navigation';
import { Logs } from 'lucide-react';
import { MdClose } from 'react-icons/md';
import useClickOutside from '@/hooks/ClickOutside';
import useBaseurl from '@/utils/baseurl';
import { IoArrowBackOutline } from 'react-icons/io5';
import AboutMissionContainer from '../medium/AboutMissionContainer';
import { mission, whatwedo } from '@/constant/data';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [subDropDown, setSubDropdown] = useState(-1);
    const [scrollPositionY, setScrollPositionY] = useState(0);
    const [steps, setSteps] = useState(-1);

    const ref = useRef();
    const baseurl = useBaseurl();
    const router = useRouter();

    // Handle scroll position for header styling
    useEffect(() => {
        const handleScrollPosition = () => setScrollPositionY(window.scrollY);
        window.addEventListener('scroll', handleScrollPosition);
        return () => window.removeEventListener('scroll', handleScrollPosition);
    }, []);

    // Close dropdown when clicking outside
    useClickOutside(ref, () => {
        setIsOpen(false);
        setDropdown(false);
        setSubDropdown(-1);
    });

    // Toggle dropdown
    const handleDropdown = () => setDropdown((prev) => !prev);

    // Toggle mobile nav
    const handleOpen = () => setIsOpen((prev) => !prev);

    // Route to login page
    const handleLogin = () => {
        router.push(baseurl + '/auth/login');
    };

    // Route to donate page
    const handleDonate = () => {
        router.push('https://buy.stripe.com/fZebMI29Ze2s1TG146');
    };

    // Handle sub-dropdown (for future use)
    const handleSubDropDown = (index) => {
        setSubDropdown(index);
    };

    // Toggle steps for AboutMissionContainer
    const handleSteps = (num) => {
        setSteps(steps === num ? -1 : num);
    };

    return (
        <>
            <header
                className={`w-full fixed ${
                    scrollPositionY >= 5
                        ? 'top-[0%] py-0 bg-[#fff]/50 backdrop-blur-md'
                        : 'top-[2%] py-2'
                } left-0 flex justify-center items-center z-50 transition-all duration-300 ease-linear`}
            >
                <div
                    className={`bg-bgWhite w-[90%] flex justify-between items-center py-3 px-3 mobile-landscape:py-3 ${
                        scrollPositionY >= 5
                            ? 'rounded-none w-full !bg-transparent'
                            : 'rounded-full headerMainWrapper'
                    } transition-all duration-300 ease-linear h-full`}
                >
                    {/* Logo */}
                    <div className="w-auto h-full">
                        <Link href={baseurl}>
                            <img
                                src="/images/USFJ-DARK-Logo.png"
                                alt="usfj-logo"
                                className="w-[150px] 3k:w-[180px]"
                            />
                        </Link>
                    </div>

                    {/* Navbar container */}
                    <div
                        className={`bg-bgBlue lg:bg-transparent md-landscape:bg-transparent ${
                            isOpen
                                ? 'fixed left-0 top-0 z-50 h-[100vh] w-[100vw] lg:relative'
                                : 'hidden'
                        } lg:flex md-landscape:flex`}
                    >
                        <nav
                            className={`bg-bgBlue w-full ${
                                isOpen
                                    ? 'h-auto rounded-none md-landscape:h-[125%] mobile-landscape:h-[125%]'
                                    : ''
                            } px-4 py-2.5 lg:py-2.5 xl:py2.5 rounded-full border-none overflow-y-scroll md-landscape:overflow-hidden no-scrollbar`}
                        >
                            <ul
                                className={`${
                                    isOpen
                                        ? ' mt-10 w-[80%] pt-10 md-landscape:mt-4 landscape:md-landscape:pt-4 landscape:mobile-landscape:mt-4 mobile-landscape:pt-4 lg:px-3 px-5 '
                                        : ''
                                } flex flex-col lg:flex-row lg:justify-center lg:items-center gap-8 lg:gap-1 xl:gap-8`}
                                ref={ref}
                            >
                                {navItems.map((item, i) =>
                                    item.items ? (
                                        // Dropdown container link
                                        <div key={i} className="flex">
                                            <div
                                                className="flex items-center justify-between gap-3  lg:gap-3"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDropdown();
                                                }}
                                            >
                                                <p className="flex items-center  gap-3 cursor-pointer font-300">
                                                    <span className="!text-white">
                                                        {item.label}
                                                    </span>
                                                </p>
                                                <i>
                                                    <TfiAngleDown
                                                        color="white"
                                                        className={`-rotate-90 lg:rotate-0 ${
                                                            dropdown &&
                                                            'rotate-90 lg:-rotate-180'
                                                        }`}
                                                    />
                                                </i>
                                            </div>
                                            <ul
                                                className={`fixed left-0 top-0 z-20 w-[100vw] lg:w-[93vw] lg:left-[3.5vw] h-[100vh] lg:h-[75vh] lg:absolute rounded-none lg:top-[4.3rem] 3k:top-14 gap-5 py-3 lg:rounded-none px-10 bg-bgBlue  lg:bg-transparent transition-all duration-300 overflow-y-scroll no-scrollbar ${
                                                    dropdown
                                                        ? 'flex flex-col items-center justify-center'
                                                        : 'hidden'
                                                }`}
                                            >
                                                <div className="flex items-center justify-between py-3 mb-4 lg:hidden">
                                                    <IoArrowBackOutline
                                                        className="text-white text-2xl"
                                                        onClick={handleDropdown}
                                                    />
                                                    <p className="text-white">
                                                        Our Causes
                                                    </p>
                                                    <div
                                                        className="lg:hidden rounded-full h-10 w-10 flex justify-center items-center"
                                                        onClick={handleOpen}
                                                    >
                                                        <MdClose className="text-2xl text-white font-bold" />
                                                    </div>
                                                </div>
                                                <div className="flex w-full lg:py-4 lg:px-10 lg:rounded-[15px] lg:h-full mx-auto lg:justify-around lg:bg-bgBlue">
                                                    <div className="w-full lg:w-[20%]">
                                                        {item.items.map(
                                                            (subItem, j) => (
                                                                <li
                                                                    key={j}
                                                                    className="cursor-pointer group pl-2 lg:p-0 my-[18px] lg:my-4"
                                                                >
                                                                    <div
                                                                        className="w-full flex justify-between items-center"
                                                                        onClick={() =>
                                                                            setSubDropdown(
                                                                                j,
                                                                            )
                                                                        }
                                                                    >
                                                                        <p
                                                                            className={`!text-white font-300 relative text-lg lg:my-2 text-center ${
                                                                                dropdown &&
                                                                                steps ===
                                                                                    j &&
                                                                                ' !text-bgOrange'
                                                                            }`}
                                                                        >
                                                                            {
                                                                                subItem.label
                                                                            }
                                                                        </p>
                                                                        <i>
                                                                            <TfiAngleDown
                                                                                className={`-rotate-[135deg] text-sm text-white ${
                                                                                    dropdown &&
                                                                                    steps ===
                                                                                        j &&
                                                                                    '-rotate-[90deg] !text-bgOrange'
                                                                                }`}
                                                                                onClick={(
                                                                                    e,
                                                                                ) => {
                                                                                    e.stopPropagation();
                                                                                    handleSteps(
                                                                                        j,
                                                                                    );
                                                                                }}
                                                                            />
                                                                        </i>
                                                                    </div>
                                                                    {/* Show AboutMissionContainer only for selected step */}
                                                                    <div className="lg:hidden">
                                                                        {steps ===
                                                                            j && (
                                                                            <AboutMissionContainer
                                                                                content={
                                                                                    whatwedo[
                                                                                        steps
                                                                                    ]
                                                                                }
                                                                            />
                                                                        )}
                                                                    </div>
                                                                </li>
                                                            ),
                                                        )}
                                                    </div>
                                                    <div className="hidden lg:block lg:w-[50%] h-full overflow-y-scroll no-scrollbar">
                                                        {steps >= 0 && (
                                                            <AboutMissionContainer
                                                                content={
                                                                    whatwedo[
                                                                        steps
                                                                    ]
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                </div>
                                            </ul>
                                        </div>
                                    ) : (
                                        // Regular links
                                        <li
                                            key={i}
                                            className="text-white lg:px-[10px] hover:opacity-50"
                                        >
                                            <Link
                                                href={baseurl + item.link}
                                                className=""
                                            >
                                                {item.label}
                                            </Link>
                                        </li>
                                    ),
                                )}
                            </ul>
                            <div className="lg:hidden flex justify-center flex-col mt-10 gap-7 ml-5 md-landscape:mt-10 mobile-landscape:mt-10 md-landscape:gap-7 mobile-landscape:gap-7">
                                {/* Donate Now button for mobile */}
                                <div>
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
                            className="absolute top-8 mobile-landscape:top-1 right-7 lg:hidden rounded-full h-9 w-9 flex justify-center items-center bg-white"
                            onClick={handleOpen}
                        >
                            <MdClose className="text-2xl text-bgBlue" />
                        </div>
                    </div>

                    {/* Authentication/Donate button and mobile nav toggle */}
                    <div className="flex justify-center items-center lg:gap-2 xl:gap-5">
                        {/* Donate Now button for desktop */}
                        <div className="2xl:flex xl:flex lg:flex 4k:flex 3k:flex 5k:flex hidden">
                            <Link
                                className="text-center 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full px-4 py-2 text-white bg-bgOrange cursor-pointer font-manFont !font-medium transition-all duration-300 ease-in-out hover:bg-transparent border hover:border-bgOrange hover:text-bgOrange"
                                href="https://buy.stripe.com/fZebMI29Ze2s1TG146"
                                target="_blank"
                            >
                                Donate Now
                            </Link>
                        </div>
                        {/* Mobile nav toggle button */}
                        <button
                            className="text-black px-2 cursor-pointer flex 2xl:hidden xl:hidden lg:hidden 4k:hidden 3k:hidden lg:landscape:hidden"
                            onClick={handleOpen}
                            aria-label="Open navigation menu"
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
