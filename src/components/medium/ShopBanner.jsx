import Image from "next/image";
import React from "react";
import BannerContent from "../small/BannerContent";
import Container from "../layout/Container";

function ShopBanner() {
  return (
    <section className="min-h-[100dvh]  flex justify-center items-end">
      <div className="w-[90%] 4k:w-[75%] mobile-landscape:min-h-[500px] mobile-landscape:mt-[150px] h-[calc(100vh_-18vh)] 3k:h-[calc(100vh_-_250px)]  sm:h-[calc(100vh_-_135px)] md:h-[calc(100vh_-_150px)] relative overflow-hidden rounded-3xl">
        <Image
          src={"/banner-bag.png"}
          loading="lazy"
          fill={true}
          objectFit="cover"
          alt="shop banner background image"
        />

        {/* Banner content */}
        <div className="h-full w-full grid grid-cols-10 items-end">
          <div className="relative col-start-2 col-end-10   xl:col-end-10 bg-bgWhite/10 backdrop-blur-sm py-7 px-[1rem] mb-10 mobile-landscape:mb-6 2xl:px-16 flex flex-col gap-7 rounded-3xl">
            <h2 className={`!text-bgWhite headingStyle text-center`}>
              Faith-Inspired Merchandise for a Purpose-Driven Life
            </h2>
            <p
              className={`text-white text-center md:text-left pTextStyle 2xl:px-16`}
            >
              Our Counseling & Support services provide a safe, faith-based
              space where you can process your past, embrace your present, and
              step into a brighter future with confidence and hope.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ShopBanner;
