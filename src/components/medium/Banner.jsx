import { sectionTitleTextStyle, textStyle } from "@/style/common";
import Image from "next/image";
import React from "react";
import WhiteBgBtn from "../small/WhiteBgBtn";
function Banner({ title, text, link, btnText, bg }) {
  const bannerBg = `/images/${bg ? bg : "usfj-mission.png"}`;
  return (
    <section
      className="h-[100vh] w-full flex justify-center items-center relative left-0 right-0 bg-center"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="absolute grid grid-cols-10 xl:w-[65%]">
        <div className="col-start-2 col-end-10 md:col-start-3 md:col-end-9 xl:col-start-1 xl:col-end-6 flex flex-col gap-7">
          <h3
            className={`font-bold text-white ${sectionTitleTextStyle} mobile-landscape:text-[5vw]`}
          >
            {title}
          </h3>
          <p
            className={`text-white font-secondaryFont ${textStyle} mobile-landscape:text-[3vw]`}
          >
            {text}
          </p>
          <WhiteBgBtn label={btnText} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
