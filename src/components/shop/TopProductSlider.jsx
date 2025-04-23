// import ProductSlide from "./Slider";

import ProductSlide from './Slider';

export const TopProductsSection = () => {
    return (
        <div className=" bg-[#F7F9FF] flex py-16 md:landscape:py-24 md:landscape:min-h-[100vh] md:flex items-center">
            <div className="overflow-hidden">
                {/* header start */}
                <div className="flex justify-between items-center">
                    <div className="w-[80%] md:w-[65%] sm:landscape:w-[65%] lg:landscape:w-[60%] 2xl:w-[40%] 3k:w-[30%] mx-auto">
                        <h2 className="headingStyle text-center">
                            Top <span className="text-bgOrange">Product</span>
                        </h2>
                        <p className="pTextStyle text-center mt-5">
                            Discover faith-filled essentials designed to uplift
                            and inspire. Shop our bestsellers and carry your
                            faith wherever you go.
                        </p>
                    </div>
                </div>
                {/* header end */}

                <div className="mt-16 xl:mt-20 ">
                    <ProductSlide />
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
