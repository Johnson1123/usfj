import { navItems } from "@/constant/navItems";
import Link from "next/link";
import React, { useState } from "react";
import { TfiAngleDown } from "react-icons/tfi";
import TransparentButton from "../small/TransparentButton";
import SecondaryButton from "../small/SecondaryButton";

function LargeNav() {
  const [dropdown, setDropdown] = useState(false);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <nav className="bg-blueColor rounded-[50px] px-7 py-3 hidden lg:flex">
      <ul className="flex justify-center gap-4 ">
        {navItems.map((item, i) => {
          return item.items ? (
            <div className="flex flex-col gap-3 relative left-0 top-0">
              <li className="flex  items-center gap-3">
                <span className="text-white">{item.label}</span>
                <i onClick={() => handleDropdown()}>
                  <TfiAngleDown
                    color="white"
                    className={`${dropdown && "rotate-180"}`}
                  />
                </i>
              </li>
              <ul
                className={`absolute left-0 top-8 flex-col gap-5 mt-1 w-max py-5 px-10 bg-gray-100 rounded-md transition-all duration-300 h-4 ${
                  dropdown ? "flex h-max" : "hidden"
                }`}
              >
                {item.items.map((item, i) => {
                  return (
                    <li className="relative left-0 top-0 cursor-pointer">
                      <Link
                        href={item.link}
                        className="text-blueColor  hover:opacity-50"
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <li key={i} className="text-white px-[10px] hover:opacity-50 tra">
              <Link href={item.link}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default LargeNav;
