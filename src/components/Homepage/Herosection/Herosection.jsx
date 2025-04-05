import React, { useState } from "react";
import "./Herosection.css";
import { ArrowIconBlack } from "../../../../public/SVGs/AllSvgs";
import Image from "next/image";
import { motion } from "framer-motion";
import "../../../style/style.css";

export const Herosection = () => {
  const [currentActiveBox, setCurrentActiveBox] = useState("box_frame1");

  return (
    <div className="h-[100dvh] mobile-landscape:min-h-[500px]  flex justify-center items-center relative">
      {/* Hero section background */}
      <div className="absolute top-0 left-0 w-full h-full  opacity-30">
        <Image
          fill={true}
          loading="lazy"
          src="/images/SectionBg.jpeg"
          className="object-cover opacity-30 w-full h-full"
          alt="section-bg-image"
        />
      </div>
      {/* End of Hero section background */}

      <div className="relative z-10 w-[90%] 4k:w-[75%] h-[calc(100vh_-_35vh)] mb-[3rem] md:h-[calc(100vh_-_35vh)] md:mb-[5vh] 2xl:h-[calc(100vh_-_34vh)] 2xl:mb-[11vh] 3k:h-[calc(100vh_- 40vh)] mt-[10rem] md:mt-[15vh] 2xl:mt-[11rem] 3k:mt-[19rem] mobile-landscape:h-[70%] flex flex-col 2xl:flex-row xl:flex-row lg:flex-row md:portrait:flex-col 4k:flex-row 3k:flex-row justify-center 2xl:gap-5 xl:gap-5 lg:gap-5 4k:gap-10 3k:gap-10 md:portrait:gap-5 gap-2.5">
        <div className="flex-1 h-full flex justify-center xl:gap-5 3k:gap-10 md:gap-5 gap-3">
          <motion.div
            id="box_frame1"
            onClick={() => setCurrentActiveBox("box_frame1")}
            className={`${
              currentActiveBox === "box_frame1"
                ? "flex-1 rounded-3xl"
                : "w-[10%] md:w-[7%] xl:w-[5%] 3k:w-[4%] rounded-full"
            }          
             relative overflow-hidden 2xl:p-6 xl:p-6 lg:p-6 4k:p-6 3k:p-6 md:portrait:p-4 p-3 flex justify-start items-end transition-all duration-700 ease-in-out`}
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
                duration: 3,
                ease: "linear",
              }}
              className="relative bg-bgWhite/10 backdrop-blur-sm rounded-3xl 2xl:p-7 xl:p-7 lg:p-7 4k:p-4 3k:p-7 md:portrait:p-5 p-3 w-full"
            >
              <div className="mediumCircle bg-bgWhite my-4">
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

          {/* Item two */}
          <motion.div
            onClick={() => setCurrentActiveBox("box_frame2")}
            className={`
              ${
                currentActiveBox === "box_frame2"
                  ? "flex-1 rounded-3xl"
                  : "w-[10%] md:w-[7%] xl:w-[5%] 3k:w-[4%] rounded-full"
              }
              relative overflow-hidden bg-[#A8B9C0] h-full flex flex-col justify-end items-center gap-5 transition-all  duration-700 ease-in-out`}
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
                opacity: currentActiveBox === "box_frame2" ? 1 : 0,
                zIndex: currentActiveBox === "box_frame2" ? 10 : -10,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              className="relative bg-bgWhite/10 backdrop-blur-sm  rounded-3xl 2xl:p-7 xl:p-7 lg:p-7 4k:p-7 3k:p-7 md:portrait:p-5 p-3 w-full"
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

          {/* Item three */}
          <motion.div
            onClick={() => setCurrentActiveBox("box_frame3")}
            className={`
              ${
                currentActiveBox === "box_frame3"
                  ? "flex-1 rounded-3xl"
                  : "w-[10%] md:w-[7%] xl:w-[5%] 3k:w-[4%] rounded-full"
              }
              relative overflow-hidden bg-[#A8B9C0] h-full flex flex-col justify-end items-center gap-5 transition-all  duration-700 ease-in-out`}
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
                opacity: currentActiveBox === "box_frame3" ? 1 : 0,
                zIndex: currentActiveBox === "box_frame3" ? 10 : -10,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              className="relative bg-bgWhite/10 backdrop-blur-sm  rounded-3xl 2xl:p-7 xl:p-7 lg:p-7 4k:p-7 3k:p-7 md:portrait:p-5 p-3 w-full"
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
              className="absolute opacity-0 z-10 top-0 left-0 w-full h-full bg-[#6D93A5] flex flex-col justify-end items-center gap-3"
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

          {/* Ithem four */}
          <motion.div
            onClick={() => setCurrentActiveBox("box_frame4")}
            className={`
              ${
                currentActiveBox === "box_frame4"
                  ? "flex-1 rounded-3xl"
                  : "w-[10%] md:w-[7%] rounded-full"
              }
              relative lg:hidden overflow-hidden bg-[#A8B9C0] h-full flex flex-col justify-end items-center gap-5 transition-all  duration-700 ease-in-out`}
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
                opacity: currentActiveBox === "box_frame4" ? 1 : 0,
                zIndex: currentActiveBox === "box_frame4" ? 10 : -10,
              }}
              transition={{
                duration: 0.6,
                ease: "linear",
              }}
              className="relative bg-bgWhite/10 backdrop-blur-sm  rounded-3xl 2xl:p-7 xl:p-7 lg:p-7 4k:p-7 3k:p-7 md:portrait:p-5 p-3 w-full"
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
                duration: 0.6,
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
        </div>

        {/* Our mission sendtion */}
        <div className="hidden 2xl:w-[20%] xl:w-[20%] lg:w-[20%] lg:landscape:w-[25%] md:portrait:w-full  2xl:h-full xl:h-full lg:h-full md:h-[40%] h-[35%] relative rounded-3xl overflow-hidden flex-shrink-0 2xl:p-4 xl:p-4 lg:p-4 4k:p-4 3k:p-4 md:p-4 p-2 lg:flex justify-center items-center">
          <Image
            fill
            priority
            src="/images/OurMissionImg1.png"
            alt="our-mission-image"
            className="w-full h-full absolute top-0 left-0 object-cover"
          />
          <div className="relative w-full h-full bg-bgWhite/10 backdrop-blur-sm rounded-3xl p-5 flex flex-col">
            <div className="mediumCircle items-center bg-bgWhite">
              <h4 className="font-[500] font-secondaryFont text-bgBlack mediumCircleText">
                04
              </h4>
            </div>
            <div className="flex flex-col 2xl:gap-5 xl:gap-5 lg:gap-5 4k:gap-5 3k:gap-5 md:gap-3 gap-2 mt-5">
              <h3 className="uppercase !text-bgWhite font-secondaryFont font-[700] h3HeadingStyle">
                OUR MISSION
              </h3>
              <p className="font-secondaryFont font-[600] !text-bgWhite pTextStyle">
                Our mission is to foster a community where our shared faith
                drives action.
              </p>
            </div>
            <div className="flex justify-end items-center gap-3 mt-auto md:portrait:mt-5 2xl:mt-auto xl:mt-auto lg:mt-auto 4k:mt-auto 3k:mt-auto">
              <button className="border border-bgWhite font-secondaryFont rounded-full text-bgWhite px-5 py-1 2xl:text-[.9vw] xl:text-[.9vw] lg:text-[1.2vw] 4k:text-[.9vw] 3k:text-[.9vw] md:portrait:text-[1.6vw] text-[3vw]">
                Donate Now{" "}
              </button>
              <button className="bg-whiteColor h-[3vw] w-[3vw] rounded-full flex justify-center items-center">
                <ArrowIconBlack />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
