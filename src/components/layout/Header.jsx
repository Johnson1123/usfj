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

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [setActiveItem] = useState(0);
    const [dropdown, setDropdown] = useState(false);
    const router = useRouter();
    const [scrollPositionY, setScrollPositionY] = useState(0);

    const ref = useRef();
    const angleRef = useRef();

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
        router.push('/auth/login');
    };
    const handleRegister = () => {
        router.push('/auth/register');
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
                        <Link href="/">
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
                                : ' md:portrait:hidden hidden'
                        } 2xl:flex xl:flex lg:flex lg:landscape:flex 4k:flex 3k:flex 5k:flex`}
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
                                                    className="flex  items-center gap-3 cursor-pointer"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleDropdown();
                                                    }}
                                                >
                                                    <span className="!text-white linkText">
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
                                                className={`absolute left-0 top-8 3k:top-14 flex-col gap-5 mt-1 w-max py-5 px-10 bg-gray-100 rounded-md transition-all duration-300 h-4 ${
                                                    dropdown
                                                        ? 'flex h-max'
                                                        : 'hidden'
                                                }`}
                                            >
                                                {item.items.map((item, i) => {
                                                    return (
                                                        <li
                                                            key={i}
                                                            className="relative left-0 top-0 cursor-pointer"
                                                        >
                                                            <Link
                                                                href={item.link}
                                                                className={`!text-blueColor  hover:opacity-50 linkText`}
                                                            >
                                                                {item.label}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    ) : (
                                        // links
                                        <li
                                            key={i}
                                            className="text-white lg:px-[10px] hover:opacity-50 linkText"
                                        >
                                            <Link
                                                href={item.link}
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
                                    'lg:hidden flex justify-center flex-col mt-16 gap-7 ml-5 md-landscape:mt-10 mobile-landscape:mt-10 md-landscape:gap-7 mobile-landscape:gap-7 '
                                }
                            >
                                <div className="">
                                    <button
                                        onClick={handleLogin}
                                        className="text-center rounded-full px-10 py-2 text-bgBlack bg-bgWhite cursor-pointer font-manFont transition-all duration-300 ease-in-out hover:text-blueColor hover:bg-transparent border hover:border-white hover:text-bgWhite !font-semibold linkText"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div className="">
                                    <SecondaryButton
                                        label="Donate Now"
                                        handler={handleRegister}
                                    />
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
                        <div className="2xl:flex xl:flex lg:flex 4k:flex 3k:flex 5k:flex hidden">
                            <TransparentButton
                                label="Sign In"
                                handler={handleLogin}
                            />
                        </div>

                        <div className="2xl:flex xl:flex lg:flex 4k:flex 3k:flex 5k:flex hidden">
                            <SecondaryButton label="Donate Now" />
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
