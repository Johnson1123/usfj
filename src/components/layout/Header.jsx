"use client";
import React, { useEffect, useState } from "react";

import TransparentButton from "../small/TransparentButton";
import SecondaryButton from "../small/SecondaryButton";
import "./layout.css";
import { navItems } from "@/constant/navItems";
import Link from "next/link";
import { TfiAngleDown } from "react-icons/tfi";
import { useRouter } from "next/navigation";
import { Logs } from "lucide-react";
import { MdClose } from "react-icons/md";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const router = useRouter();
  const [scrollPositionY, setScrollPositionY] = useState(0);

  const handleScrollPosition = () => {
    setScrollPositionY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPosition);

    return () => {
      window.removeEventListener("scroll", handleScrollPosition);
    };
  }, []);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleActiveItem = () => {
    setActiveItem(index);
  };

  // route to the login page
  const handleLogin = () => {
    router.push("/auth/login");
  };

  return (
    <>
      <header
        className={`w-full fixed ${
          scrollPositionY >= 5
            ? "top-[0%] py-0 bg-[#fff]/50 backdrop-blur-md"
            : "top-[2%] py-2"
        }  left-0 flex justify-center items-center  z-50  transition-all  duration-300 ease-linear`}
      >
        <div
          className={` bg-bgWhite   flex justify-between items-center 2xl:py-4 xl:py-4 lg:py-4 4k:py-8 3k:py-8 2xl:px-6 xl:px-6 lg:px-6 4k:px-10 3k:px-10 md:portrait:py-6 py-3 px-6 ${
            scrollPositionY >= 5
              ? " rounded-none w-full"
              : "rounded-full headerMainWrapper w-[90%]"
          } transition-all  duration-300 ease-linear`}
        >
          <div className="relative">
            <Link href="/">
              <img
                src="/images/USFJ-DARK-Logo.png"
                fill
                alt="usfj-logo"
                className="2xl:w-[12vw] 4k:w-[12vw] 3k:w-[12vw] 5k:w-[12vw] xl:w-[12vw] lg:w-[12vw] md:portrait:w-[20vw] w-[35vw] h-auto"
              />
            </Link>
          </div>

          {/*  */}

          <div
            className={`${
              isOpen
                ? "fixed left-0 top-0 h-[100vh] w-full bg-white"
                : " md:portrait:hidden hidden"
            } 2xl:flex xl:flex lg:flex lg:landscape:flex 4k:flex 3k:flex 5k:flex`}
          >
            <nav
              className={`bg-bgBlue ${
                isOpen ? "h-full w-[80%] rounded-none" : ""
              } px-4 py-2.5 rounded-full border-none`}
            >
              <ul
                className={`${
                  isOpen ? "flex-col mt-10 pt-10 px-5" : ""
                } flex lg:justify-center lg:items-center gap-8`}
              >
                {navItems.map((item, i) => {
                  return item.items ? (
                    <div
                      key={i}
                      className="flex flex-col gap-3 relative left-0 top-0"
                    >
                      <div className="flex  items-center gap-3">
                        <p
                          className="flex  items-center gap-3 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleDropdown();
                          }}
                        >
                          <span className="text-white text-[4vw] md:text-[2.5vw] lg:text-[1vw]">
                            {item.label}
                          </span>
                        </p>
                        <i>
                          <TfiAngleDown
                            color="white"
                            className={`${dropdown && "rotate-180"}`}
                          />
                        </i>
                      </div>
                      <ul
                        className={`absolute left-0 top-8 3k:top-14 flex-col gap-5 mt-1 w-max py-5 px-10 bg-gray-100 rounded-md transition-all duration-300 h-4 ${
                          dropdown ? "flex h-max" : "hidden"
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
                                className={`text-blueColor  hover:opacity-50 text-[4vw] md:text-[2.5vw] lg:text-[1vw]`}
                              >
                                {item.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : (
                    <li
                      key={i}
                      className="text-white lg:px-[10px] hover:opacity-50 text-[4vw] md:text-[2.5vw] lg:text-[1vw]"
                    >
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div
              className="absolute top-12 right-7 lg:hidden rounded-full h-10 w-10 flex justify-center items-center "
              onClick={() => setIsOpen()}
            >
              <MdClose className="text-2xl text-bgBlue" />
            </div>
          </div>

          <div className="flex justify-center items-center gap-5">
            <div className="2xl:flex xl:flex lg:flex 4k:flex 3k:flex 5k:flex md:portrait:flex hidden">
              <TransparentButton label="Sign In" handler={handleLogin} />
            </div>
            <div className="2xl:flex xl:flex lg:flex 4k:flex 3k:flex 5k:flex md:portrait:flex hidden">
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
