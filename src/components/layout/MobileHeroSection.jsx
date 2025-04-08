import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import "swiper/css";

import Image from "next/image";

function MobileHeroSection() {
  const [currentActiveBox, setCurrentActiveBox] = useState("box_frame1");
  return (
    <div className="relative z-10 w-[90%] 4k:w-[75%] landscape:md-landscape:h-[60%] md:h-[67%] h-[75%] mt-[10vh]  mobile-landscape:h-[70%] flex  justify-center gap-2.5 md:hidden">
      <Swiper slidesPerView={2} spaceBetween={10}>
        {/* slide one */}
        <SwiperSlide
          className={`${
            currentActiveBox === "box_frame1"
              ? "!w-[80vw] rounded-3xl"
              : "!w-[10%] !md:w-[7%] mobile-landscape:w-[6%] xl:w-[5%] 3k:w-[4%] rounded-full"
          }          
             relative overflow-hidden 2xl:p-6 xl:p-6 lg:p-6 4k:p-6 3k:p-6 p-3 flex justify-start items-end transition-all duration-700 ease-in-out`}
        >
          <motion.div
            id="box_frame1"
            onClick={() => setCurrentActiveBox("box_frame1")}
          >
            <Image
              fill
              className="object-cover w-full h-full"
              src="/images/UnitedServiceImg1.png"
              alt="United-Service-Img1"
              priority
            />
            <motion.div
              animate={{
                opacity: currentActiveBox === "box_frame1" ? 1 : 0,
                zIndex: currentActiveBox === "box_frame1" ? 10 : -10,
              }}
              transition={{
                duration: 1,
                ease: "linear",
              }}
              className="relative bg-gray-500 bg-opacity-50 backdrop-blur-sm rounded-3xl 2xl:p-7 xl:p-7 lg:p-7 4k:p-4 3k:p-7 md:portrait:p-5 p-3 w-full"
            >
              <div className="mediumCircle bg-bgWhite">
                <h4 className="font-[500] font-secondaryFont text-textColor mediumCircleText">
                  01
                </h4>
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="uppercase !text-bgWhite font-secondaryFont font-[700] h3HeadingStyle">
                  United Servants For Jesus
                </h3>
                <p className="font-secondaryFont font-[600] !text-bgWhite pTextStyle">
                  Where Faith, Service, and Compassion Unite to Transform Lives.
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                opacity: currentActiveBox === "box_frame1" ? 0 : 1,
                zIndex: currentActiveBox === "box_frame1" ? -10 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "backInOut",
                delay: 0.3,
              }}
              className="absolute opacity-0 z-10 top-0 left-0 w-full h-full bg-[#6D93A5] flex flex-col justify-end items-center gap-3"
            >
              <p className="text-bgWhite font-secondaryFont font-[600] changeWrittingMode2 rotate-180 herosectionControlText">
                UNITED SERVANTS FOR JESUS
              </p>
              <div className="heroCircle rounded-full flex justify-center items-center bg-bgWhite my-4">
                <p className="font-[500] font-secondaryFont text-blackColor circleText">
                  01
                </p>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        {/* slide two */}
        <SwiperSlide
          className={`
              ${
                currentActiveBox === "box_frame2"
                  ? "!w-[80%]  rounded-3xl"
                  : "!w-[10%] md:w-[7%] mobile-landscape:w-[6%] xl:w-[5%] 3k:w-[4%] rounded-full"
              }
             relative overflow-hidden 2xl:p-6 xl:p-6 lg:p-6 4k:p-6 3k:p-6 md:portrait:p-4 p-3 flex justify-start items-end transition-all duration-700 ease-in-out`}
        >
          <motion.div onClick={() => setCurrentActiveBox("box_frame2")}>
            <Image
              fill
              className="object-cover w-full h-full"
              src="/images/UnitedServiceImg1.png"
              alt="United-Service-Img1"
              priority
            />
            <motion.div
              animate={{
                opacity: currentActiveBox === "box_frame2" ? 1 : 0,
                zIndex: currentActiveBox === "box_frame2" ? 10 : -10,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              className="relative bg-gray-500 bg-opacity-50 backdrop-blur-sm  rounded-3xl 2xl:p-7 xl:p-7 lg:p-7 4k:p-7 3k:p-7 md:portrait:p-5 p-3 w-full"
            >
              <div className="mediumCircle bg-bgWhite my-4">
                <h4 className="font-[500] font-secondaryFont text-blackColor mediumCircleText">
                  03
                </h4>
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="uppercase !text-bgWhite font-secondaryFont font-[700] h3HeadingStyle">
                  OUR CORE VALUES
                </h3>
                <p className="font-secondaryFont font-[600] !text-bgWhite pTextStyle">
                  Faith-Driven Service, Integrity, and Excellence: We serve with
                  unwavering faith, embodying Christ’s love while upholding the
                  highest moral standards and striving for excellence in our
                  mission.
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                opacity: currentActiveBox === "box_frame2" ? 0 : 1,
                zIndex: currentActiveBox === "box_frame2" ? -10 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: 0.3,
              }}
              className="absolute opacity-0 z-10 top-0 left-0 w-full h-full bg-[#6D93A5] flex flex-col justify-end items-center gap-3"
            >
              <p className="text-bgWhite font-secondaryFont font-[600] herosectionControlText changeWrittingMode2 rotate-180">
                OUR CORE VALUES
              </p>
              <div className="heroCircle rounded-full flex justify-center items-center bg-bgWhite my-4">
                <h4 className="font-[500] font-secondaryFont text-blackColor circleText">
                  02
                </h4>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        {/* slide three */}
        <SwiperSlide
          className={`
              ${
                currentActiveBox === "box_frame3"
                  ? "!w-[80%]  rounded-3xl"
                  : "!w-[10%] md:w-[7%] xl:w-[5%] 3k:w-[4%] mobile-landscape:w-[6%] rounded-full"
              }
             relative overflow-hidden 2xl:p-6 xl:p-6 lg:p-6 4k:p-6 3k:p-6 md:portrait:p-4 p-3 flex justify-start items-end transition-all duration-700 ease-in-out`}
        >
          <motion.div onClick={() => setCurrentActiveBox("box_frame3")}>
            <Image
              fill
              className="object-cover w-full h-full"
              src="/images/UnitedServiceImg1.png"
              alt="United-Service-Img1"
              priority
            />
            <motion.div
              animate={{
                opacity: currentActiveBox === "box_frame3" ? 1 : 0,
                zIndex: currentActiveBox === "box_frame3" ? 10 : -10,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              className="relative bg-gray-500 bg-opacity-50 backdrop-blur-sm  rounded-3xl 2xl:p-7 xl:p-7 lg:p-7 4k:p-7 3k:p-7 md:portrait:p-5 p-3 w-full"
            >
              <div className="mediumCircle rounded-full flex justify-center items-center bg-bgWhite my-4">
                <h4 className="font-[500] font-secondaryFont text-blackColor mediumCircleText">
                  03
                </h4>
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="uppercase !text-bgWhite font-secondaryFont font-[700] h3HeadingStyle">
                  OUR VISION
                </h3>
                <p className="font-secondaryFont font-[600] !text-bgWhite pTextStyle">
                  To be a Christ-centered community that transforms lives
                  through faith, service, and excellence, spreading God’s love
                  and making a lasting impact on the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                opacity: currentActiveBox === "box_frame3" ? 0 : 1,
                zIndex: currentActiveBox === "box_frame3" ? -10 : 0,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
                delay: 0.3,
              }}
              className="cursor-pointer absolute opacity-0 z-10 top-0 left-0 w-full h-full bg-[#6D93A5] flex flex-col justify-end items-center gap-3"
            >
              <p className="text-bgWhite font-secondaryFont font-[600] text-[1rem] changeWrittingMode2 rotate-180 herosectionControlText">
                OUR VISION
              </p>
              <div className="heroCircle rounded-full flex justify-center items-center bg-bgWhite my-4">
                <h4 className="font-[500] font-secondaryFont text-blackColor circleText">
                  03
                </h4>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>

        {/* slide four */}
        <SwiperSlide
          className={`
              ${
                currentActiveBox === "box_frame4"
                  ? "!w-[80%]  rounded-3xl"
                  : "!w-[10%] md:w-[7%] mobile-landscape:w-[6%] rounded-full"
              }
             relative overflow-hidden lg:hidden 2xl:p-6 xl:p-6 lg:p-6 4k:p-6 3k:p-6 md:portrait:p-4 p-3 flex justify-start items-end transition-all duration-700 ease-in-out`}
        >
          <motion.div onClick={() => setCurrentActiveBox("box_frame4")}>
            <Image
              fill
              className="object-cover w-full h-full"
              src="/images/UnitedServiceImg1.png"
              alt="United-Service-Img1"
              priority
            />
            <motion.div
              animate={{
                opacity: currentActiveBox === "box_frame4" ? 1 : 0,
                zIndex: currentActiveBox === "box_frame4" ? 10 : -10,
              }}
              transition={{
                duration: 1.2,
                ease: "linear",
              }}
              className="relative bg-gray-500 bg-opacity-50 backdrop-blur-sm  rounded-3xl 2xl:p-7 xl:p-7 lg:p-7 4k:p-7 3k:p-7 md:portrait:p-5 p-3 w-full"
            >
              <div className="mediumCircle rounded-full flex justify-center items-center bg-bgWhite my-4">
                <h4 className="font-[500] font-secondaryFont text-blackColor 2xl:text-[1.4vw] xl:text-[1.4vw] lg:text-[1.4vw] 4k:text-[1.4vw] 3k:text-[1.4vw] md:portrait:text-[2vw] mediumCircleText">
                  04
                </h4>
              </div>
              <div className="flex flex-col gap-2.5">
                <h3 className="uppercase !text-bgWhite font-secondaryFont font-[700] h3HeadingStyle">
                  OUR MISSION
                </h3>
                <p className="font-secondaryFont font-[600] !text-bgWhite pTextStyle">
                  To be a Christ-centered community that transforms lives
                  through faith, service, and excellence, spreading God’s love
                  and making a lasting impact on the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              animate={{
                opacity: currentActiveBox === "box_frame4" ? 0 : 1,
                zIndex: currentActiveBox === "box_frame4" ? -10 : 0,
              }}
              transition={{
                duration: 1.2,
                ease: "backInOut",
                delay: 0.3,
              }}
              className="absolute opacity-0 z-10 top-0 left-0 w-full h-full bg-[#6D93A5] flex flex-col justify-end items-center gap-3"
            >
              <p className="!text-bgWhite font-secondaryFont font-[600]  changeWrittingMode2 rotate-180 herosectionControlText">
                OUR MISSION
              </p>
              <div className="heroCircle bg-bgWhite my-4">
                <h4 className="font-[500] font-secondaryFont text-blackColor circleText">
                  04
                </h4>
              </div>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MobileHeroSection;
