"use client";
import React from "react";
import "./Donationsection.css";
import Image from "next/image";
import { ArrowIconWhite } from "../../../../public/SVGs/AllSvgs";
import Link from "next/link";
import { headingStyle, pTextStyle } from "@/style/common";
import PrimaryButton from "@/components/small/PrimaryBtn";

const fakeData = [
  {
    name: "Buzz P",
    amount: "2,000",
    date: "31/01/2025",
  },
  {
    name: "Joshua M",
    amount: "300",
    date: "31/01/2025",
  },

  {
    name: "Mike D",
    amount: "900",
    date: "30/01/2025",
  },
  {
    name: "Dan F",
    amount: "1,800",
    date: "15/01/2025",
  },
  {
    name: "Felix Q",
    amount: "1,100",
    date: "12/01/2025",
  },
];

export const Donationsection = () => {
  return (
    <div className="relative 2xl:min-h-[90dvh] 3k:min-h-[70dvh] flex justify-center items-center py-16 md:py-10">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <Image
          fill={true}
          loading="lazy"
          src="/images/SectionBg.jpeg"
          className="object-cover opacity-30 w-full h-full"
          alt="section-bg-image"
        />
      </div>
      {/* first columns */}
      <div className="2xl:w-[75%] 4k:w-[70%] w-[90%] grid grid-cols-1 md:grid-cols-2 sm:landscape:grid-cols-2">
        {/* heading text box  */}
        <div className="grid grid-cols-1 col-span-1 gap-10 md-landscape:h-max mobile-landscape:h-max md-landscape:gap-7 mobile-landscape:gap-7 md:gap-7 md:h-max">
          <h2
            className={`headingStyle leading-[1.5] font-[700]  text-bgBlue w-[80%] md:w-[90%] lg:w-[95%] xl:w-[90%] 2xl:w-[95%] 3k:w-[90%] 4k:w-[95%]`}
          >
            Transforming Lives With Your Kind <br />
            <span className="text-bgOrange">Generosity</span>
          </h2>
        </div>

        {/* description text box  */}
        <div className="col-span-1 place-self-end mt-10 sm:landscape:mt-0 md:mt-0">
          <div className="w-full 2xl:w-[70%] 3k:w-[60%] md:ml-auto sm:landscape:ml-auto">
            <div className="flex-1 w-full border-r-[5px] border-primary">
              <p
                className={`pTextStyle leading-[1.5] pr-1 text-justify font-secondaryFont font-[600]  text-textColor`}
              >
                We are a Christ-centered organization dedicated to empowering
                young adults in Kentucky by providing spiritual guidance, life
                skills, and educational opportunities........{" "}
                <Link href="/" className="pTextStyle text-primary">
                  More Information
                </Link>{" "}
              </p>
            </div>
            <div className="mt-3">
              <PrimaryButton label={"Start Now"} handler={() => {}} />
            </div>
          </div>

          {/* button */}
        </div>
      </div>
    </div>
  );
};
