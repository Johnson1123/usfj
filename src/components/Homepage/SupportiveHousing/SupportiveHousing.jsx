import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const dummyData = [
  {
    title: "Life Coaching",
    raisedAmount: "300",
    images: "LifeCoachingImg.png",
    path: "/",
  },
  {
    title: "Community Building",
    raisedAmount: "400",
    images: "CommunityBuildingImg.png",
    path: "/",
  },
  {
    title: "Counseling Services",
    raisedAmount: "200",
    images: "CounselingSevicesImg.png",
    path: "/",
  },
];

export const SupportiveHousing = () => {
  return (
    <div className="2xl:min-h-[80dvh] xl:min-h-[80dvh] lg:min-h-[80dvh] 4k:min-h-[70dvh] 3k:min-h-[70dvh] md:portrait:min-h-[70dvh] min-h-[90dvh] bg-[#F7F9FF] flex justify-center items-center py-16">
      <div className="2xl:w-[80%] xl:w-[80%] lg:w-[85%] 4k:w-[80%] 3k:w-[80%] md:portrait:w-[90%] w-[90%] overflow-hidden">
        {/* header start */}
        <div className="flex justify-between items-center">
          <div>
            <h3 className="2xl:text-[4vw] xl:text-[4vw] lg:text-[4vw] 4k:text-[4vw] 3k:text-[4vw] md:portrait:text-[6vw] text-[7vw] leading-[8vw] font-[700] 2xl:leading-[6vw] xl:leading-[6vw] lg:leading-[6vw] 4k:leading-[6vw] 3k:leading-[6vw] md:portrait:leading-[8vw] text-bgBlue">
              Supportive <span className="text-bgOrange">Housing</span>
            </h3>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              //   onClick={handlePrev}
              className="hover:bg-bgBlue bg-bgWhite 2xl:h-[3vw] xl:h-[3vw] lg:h-[3vw] 4k:h-[3vw] 3k:h-[3vw] md:portrait:h-[5vw] h-[10vw] 2xl:w-[3vw] xl:w-[3vw] lg:w-[3vw] 4k:w-[3vw] 3k:w-[3vw] md:portrait:w-[5vw] w-[10vw] flex justify-center items-center rounded-full border-none outline-none text-bgBlue hover:text-white transition-all duration-300 ease-linear"
            >
              <ArrowLeft />
            </button>
            <button
              //   onClick={handleNext}
              className="hover:bg-bgBlue bg-bgWhite 2xl:h-[3vw] xl:h-[3vw] lg:h-[3vw] 4k:h-[3vw] 3k:h-[3vw] md:portrait:h-[5vw] h-[10vw] 2xl:w-[3vw] xl:w-[3vw] lg:w-[3vw] 4k:w-[3vw] 3k:w-[3vw] md:portrait:w-[5vw] w-[10vw] flex justify-center items-center rounded-full border-none outline-none text-bgBlue hover:text-white transition-all duration-300 ease-linear"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        {/* header end */}

        <div className="mt-8 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:portrait:grid-cols-1 4k:grid-cols-2 3k:grid-cols-2 2xl:gap-20 xl:gap-20 lg:gap-20 4k:gap-20 3k:gap-20 md:portrait:gap-10">
          <div className="flex flex-col gap-4">
            <div className="relative w-full 2xl:h-[20dvw] xl:h-[20dvw] lg:h-[20dvw] 4k:h-[20dvw] 3k:h-[20dvw] md:portrait:h-[45dvw] h-[55dvw] rounded-xl overflow-hidden">
              <Image
                fill
                src="/images/SafeAndStableImg.png"
                className="object-cover"
                alt="SafeAndStableImg"
              />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
              <div className="bg-primary px-4 py-1 rounded-full">
                <h4 className="font-manFont text-white 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] 4k:text-[.9dvw] 3k:text-[.9dvw] md:portrait:text-[1.4dvw] text-[3dvw] font-[500]">
                  $5,000 Raised
                </h4>
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="font-manFont font-[700] text-black 2xl:text-[1.8dvw] xl:text-[1.8dvw] lg:text-[1.8dvw] 4k:text-[1.8dvw] 3k:text-[1.8dvw] md:portrait:text-[4dvw] text-[6dvw]">
                  Safe and Stable Environment
                </h2>
                <p className="text-[#4D4D4D] font-secondaryFont font-[400] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] 4k:text-[1.1dvw] 3k:text-[1.1dvw] md:portrait:text-[2.5dvw] text-[4dvw]">
                  Our Supportive Housing Program will offer a safe, stable
                  living environment for young adults who need temporary housing
                  while they build a foundation for their future.
                </p>
                <div className="w-full">
                  <div className="relative w-full bg-primary/10 rounded-full h-[1.2dvh]">
                    <div className="absolute top-0 left-0 rounded-full bg-primary w-[10%] h-full" />
                  </div>
                  <div className="w-full flex justify-between items-center mt-1">
                    <h3 className="text-[#142560] font-manFont 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] 4k:text-[1.3dvw] 3k:text-[1.3dvw] md:portrait:text-[2.1dvw] text-[3.5dvw]  font-[600]">
                      10 Donors{" "}
                    </h3>
                    <h3 className="text-[#142560] font-manFont 2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] 4k:text-[1.3dvw] 3k:text-[1.3dvw] md:portrait:text-[2.1dvw] text-[3.5dvw] font-[600]">
                      20%
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid 2xl:grid-cols-1 xl:grid-cols-1 lg:grid-cols-1 4k:grid-cols-1 3k:grid-cols-1 md:portrait:grid-cols-2 grid-cols-1 2xl:gap-4 xl:gap-4 lg:gap-4 4k:gap-4 3k:gap-4 md:portrait:gap-2">
            {dummyData.map((item, id) => (
              <div
                key={id}
                className="flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-row 4k:flex-row 3k:flex-row  justify-center 2xl:gap-10 xl:gap-10 lg:gap-10 4k:gap-10 3k:gap-10 md:portrait:gap-8 gap-6 p-4"
              >
                <div className="relative 2xl:h-[10dvw] xl:h-[10dvw] lg:h-[10dvw] 4k:h-[10dvw] 3k:h-[10dvw] md:portrait:h-[14dvw] h-[40dvw]  2xl:flex-1 xl:flex-1 lg:flex-1 md:portrait:flex-1 4k:flex-1 3k:flex-1  rounded-lg w-full">
                  <Image
                    src={`/images/${item.images}`}
                    fill
                    className="object-cover rounded-lg"
                    alt={`${item.images}`}
                  />
                  <button className="bg-bgBlue text-bgWhite 2xl:h-[3vw] xl:h-[3vw] lg:h-[3vw] 4k:h-[3vw] 3k:h-[3vw] md:portrait:h-[5vw] h-[10vw] 2xl:w-[3vw] xl:w-[3vw] lg:w-[3vw] 4k:w-[3vw] 3k:w-[3vw] md:portrait:w-[5vw] w-[10vw] flex justify-center items-center rounded-full border-none outline-none hover:text-bgBlue hover:bg-white -rotate-45 transition-all duration-300 ease-linear absolute 2xl:-right-5 xl:-right-5 lg:-right-5 md:portrait:-right-5 4k:-right-5 3k:-right-5 -right-4 top-[35%]">
                    <ArrowRight />
                  </button>
                </div>
                <div className="flex-1 flex justify-start items-center">
                  <div className="flex flex-col gap-3">
                    <div className="bg-primary px-4 py-1 rounded-full max-w-max">
                      <h4 className="font-manFont text-white 2xl:text-[.9dvw] xl:text-[.9dvw] lg:text-[.9dvw] 4k:text-[.9dvw] 3k:text-[.9dvw] md:portrait:text-[1.4dvw] text-[3dvw] font-[500]">
                        ${item.raisedAmount} Raised
                      </h4>
                    </div>
                    <h3 className="font-manFont font-[700] 2xl:text-[1.8dvw] xl:text-[1.8dvw] lg:text-[1.8dvw] 4k:text-[1.8dvw] 3k:text-[1.8dvw] md:portrait:text-[2.4dvw] text-[6dvw]">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
