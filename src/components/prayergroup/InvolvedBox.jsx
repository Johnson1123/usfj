"use client";
import { useRouter } from "next/navigation";
import React from "react";
import Icons from "../small/Icons";
import { subTitleStyle } from "@/style/common";
import Image from "next/image";

function InvolvedBox({ image, text, link }) {
  const route = useRouter();

  const handleNavigation = () => {
    route.push(link);
  };

  return (
    <div className="">
      <div className="relative left-0 right-0">
        <Image
          src={`/images/${image}`}
          alt="local prayer group"
          height={600}
          width={1300}
          objectFit="cover"
          className="w-full aspect-square object-cover rounded-2xl"
        />
        <button
          className="absolute bottom-5 right-5"
          onClick={() => handleNavigation}
        >
          <Icons />
        </button>
      </div>
      <div className="mt-3 w-[80%]">
        <p className={`${subTitleStyle} text-black font-semibold`}>{text}</p>
      </div>
    </div>
  );
}

export default InvolvedBox;
