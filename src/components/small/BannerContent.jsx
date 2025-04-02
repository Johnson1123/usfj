import { sectionTitleTextStyle, textStyle } from "@/style/common";
import React from "react";

function BannerContent({ pageName, description }) {
  return (
    <div className="h-full w-full grid grid-cols-10 items-end">
      <div className="relative col-start-2 col-end-10 md:col-end-9 lg:col-end-8 xl:col-end-7 bg-bgWhite/10 backdrop-blur-sm py-7 px-3 mb-10 mobile-landscape:mb-6 flex flex-col gap-7 rounded-3xl">
        <h2
          className={`text-bgWhite font-bold w-full text-center md:text-left mobile-landscape:text-[5vw] 2xl:text-[3vw] xl:text-[2.8vw] lg:text-[clamp(1.rem,_7vw,_2.5rem] 4k:text-[2vw] 3k:text-[2vw] text-[clamp(1.5rem,_7vw,_2.5rem)]`}
        >
          {pageName}
        </h2>
        <p
          className={`text-white text-center md:text-left ${textStyle} mobile-landscape:text-[3vw]`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

export default BannerContent;
