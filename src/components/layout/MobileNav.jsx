import React, { useState } from "react";
import TransparentButton from "../small/TransparentButton";
import SecondaryButton from "../small/SecondaryButton";
import { IoCloseSharp } from "react-icons/io5";
import { TfiAngleDown } from "react-icons/tfi";
import { navItems } from "@/constant/navItems";
import Link from "next/link";

function MobileNav({ handleOpen }) {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="fixed flex flex-col left-0 top-0 h-[100vh] w-[100vw] bg-white z-100 py-10 px-7 lg:hidden">
      {/* logo wrapper */}
      <div className="w-[30%] mt-5">
        <img src="/images/USFJ-Logo.jpg" alt="USFJ logo" />
      </div>

      {/* nav wrapper */}
      <nav className="w-full mt-10 h-[70%]">
        <ul className="flex flex-col gap-4">
          {navItems.map((item, i) => {
            return item.items ? (
              <div className="flex flex-col gap-4 relative left-0 top-0">
                <li className="flex justify-between items-center">
                  <span>{item.label}</span>
                  <i onClick={() => handleDropdown()}>
                    <TfiAngleDown className={dropdown && "rotate-180"} />
                  </i>
                </li>
                <ul
                  className={`flex-col gap-4 mt-1 py-5 px-5 bg-gray-100 rounded-md transition-all duration-300 h-4 ${
                    dropdown ? "flex h-max" : "hidden"
                  }`}
                >
                  {item.items.map((item, i) => {
                    return (
                      <li className="relative left-0 top-0" key={i}>
                        <Link href={item.link}>{item.label}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : (
              <li key={i}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* action button */}
      <div className="w-full flex justify-center gap-6 mt-auto">
        <TransparentButton label={"Sign In"} handler={() => {}} />
        <SecondaryButton label={"Donate Now"} handler={() => {}} />
      </div>

      {/* close button */}
      <i
        className="cursor-pointer absolute right-5 top-5 flex justify-center items-center h-[35px] w-[35px] rounded-full bg-gray-100"
        onClick={() => handleOpen()}
      >
        <IoCloseSharp className="text-[20px] font-extrabold" />
      </i>
    </div>
  );
}

export default MobileNav;
