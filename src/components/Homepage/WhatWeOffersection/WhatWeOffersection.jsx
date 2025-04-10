import React, { useRef, useState } from "react";
import "./WhatWeOffersection.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

import WhatWeOfferSlider from "./WhatWeOfferSlider";

export const WhatWeOffersection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    ref.current?.slidePrev();
  };
  const handleNext = () => {
    ref.current?.slideNext();
  };

  const ref = useRef(null);
  return (
    <div className=" bg-[#F7F9FF] flex justify-center items-center py-16 xl:py-[5rem] 3k:py-[20rem]">
      <div className="2xl:w-[80%] xl:w-[80%] lg:w-[85%] 4k:w-[80%] 3k:w-[80%] md:portrait:w-[90%] w-[90%] overflow-hidden">
        {/* header start */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="headingStyle">
              What we <span className="text-bgOrange">Offer</span>
            </h2>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={handlePrev}
              className="hover:bg-bgBlue bg-bgWhite mediumCircle flex justify-center items-center rounded-full border-none outline-none text-bgBlue hover:text-white transition-all duration-300 ease-linear"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={handleNext}
              className="hover:bg-bgBlue bg-bgWhite mediumCircle  flex justify-center items-center rounded-full border-none outline-none text-bgBlue hover:text-white transition-all duration-300 ease-linear"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        {/* header end */}

        <div className="mt-16 xl:mt-20">
          <WhatWeOfferSlider swiperRef={ref} />
        </div>
      </div>
    </div>
  );
};

{
  /* slider wrapper start */
}
{
  /* <div className="flex flex-col justify-center items-center gap-4 my-6 w-full">
          <div className="flex justify-start 2xl:gap-10 xl:gap-10 lg:gap-7 4k:gap-10 3k:gap-10 md:portrait:gap-7 gap-5 p-6 overflow-x-auto no-scrollbar ">
            {fakeData.map((cur, id) => (
              <div
                className="2xl:max-w-[23vw] 4k:max-w-[23vw] 3k:max-w-[23vw] xl:max-w-[23vw] lg:max-w-[23vw] md:portrait:max-w-[40vw] max-w-[95vw] flex-shrink-0 bg-bgWhite 2xl:p-8 xl:p-8 lg:p-6 4k:p-8 3k:p-8 md:portrait:p-6 p-8 flex justify-center items-center flex-col gap-4 rounded-lg  overflow-hidden transition-all  duration-700 ease-in-out "
                style={{
                  transform: `translateX(-${currentIndex * 90}%) `,
                }}
                key={id}
              >
                <div className="h-[5rem] w-[5rem]   p-5 bg-bgWhite rounded-full shadow-md flex justify-center items-center">
                  {cur?.icon}
                </div>
                <div>
                  <h3 className="text-[#323232] font-6700] h3HeadingStyle">
                    {cur?.title}
                  </h3>
                </div>
                <div>
                  <p
                    className={`font-secondaryFont font-[500] pTextStyle text-[#323232]/65 text-center`}
                  >
                    {cur?.smallInfo}
                  </p>
                </div>
                <Link
                  href={cur.path}
                  className="bg-bgWhite hover:bg-bgBlue hover:text-white transition-all duration-200 ease-linear border border-bgBlue rounded-3xl font-[700] px-10 py-2 text-bgBlue pTextStyle"
                >
                  Join USFJ
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2">
            {/* indicators wrapper */
}
{
  /* {fakeData.map((_, id) => (
              <div
                key={id}
                className={`h-[.5vw] w-[.5vw] rounded-full  ${
                  currentIndex === id
                    ? "bg-bgBlue scale-110"
                    : "bg-[#D8D8D8] scale-100"
                } transition-all duration-200 ease-linear`}
              />
            ))}
          </div>
        </div> */
}
{
  /* slider wrapper end */
}
