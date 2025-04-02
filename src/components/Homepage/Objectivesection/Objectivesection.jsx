import React from "react";
import "./Objectivesection.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowIconWhite } from "../../../../public/SVGs/AllSvgs";
import { ArrowRight } from "lucide-react";

export const Objectivesection = () => {
  return (
    <div className="ojectiveSection__mainOutterWrapper relative min-h-[100dvh] flex justify-center items-center py-16">
      <div className="absolute top-0 left-0 w-full h-full opacity-60">
        <Image
          fill={true}
          loading="lazy"
          src="/images/SectionBg.jpeg"
          className="object-cover opacity-30 w-full h-full"
          alt="section-bg-image"
        />
      </div>

      <div className="2xl:w-[70%] xl:w-[70%] lg:w-[75%] 4k:w-[70%] 3k:w-[70%] md:portrait:w-[90%] w-[90%] flex justify-center items-center flex-col gap-8 relative opacity-100 z-20">
        <div className="w-full p-4 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 4k:grid-cols-2 3k:grid-cols-2 md:portrait:grid-cols-1 grid-cols-1 gap-8">
          <div>
            <h3 className="text-bgBlue font-manFont font-[700] 2xl:text-[3vw] xl:text-[3vw] lg:text-[3vw] 4k:text-[3vw] 3k:text-[3vw] md:portrait:text-[5.5vw] text-[7vw] 2xl:leading-[4vw] xl:leading-[4vw] lg:leading-[4vw] 4k:leading-[4vw] 3k:leading-[4vw] md:portrait:leading-[7vw] leading-[8vw]">
              Building a Better World Through{" "}
              <span className="text-primary">Unity and Compassion</span>
            </h3>
          </div>
          <div className="flex 2xl:flex-col xl:flex-col lg:flex-col 4k:flex-col 3k:flex-col md:portrait:flex-row flex-col gap-6 w-full">
            <div className="relative 2xl:h-[14dvw] xl:h-[14dvw] lg:h-[14dvw] 4k:h-[14dvw] 3k:h-[14dvw] md:portrait:h-[20dvw] h-[60dvw] 2xl:w-[24dvw] xl:w-[24dvw] lg:w-[24dvw] 4k:w-[24dvw] 3k:w-[24dvw] md:portrait:w-[34dvw] w-[70dvw] rounded-lg overflow-hidden 2xl:ml-auto xl:ml-auto lg:ml-auto 4k:ml-auto 3k:ml-auto md:portrait:mx-auto mx-auto">
              <Image
                src="/images/BuildingABetterImg.png"
                alt="Building a Better World Through Unity and Compassion"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="2xl:max-w-[24dvw] xl:max-w-[24dvw] lg:max-w-[24dvw] 4k:max-w-[24dvw] 3k:max-w-[24dvw] md:portrait:max-w-[40dvw] 2xl:ml-auto xl:ml-auto lg:ml-auto 4k:ml-auto 3k:ml-auto md:portrait:mx-auto mx-auto px-4 py-1.5">
              <p className="font-secondaryFont font-[500] text-bgBlack/70 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] 4k:text-[1.1vw] 3k:text-[1.1vw] md:portrait:text-[2vw] text-[3.4vw] 2xl:text-right xl:text-right lg:text-right lg:landscape:text-right md:portrait:text-right text-start">
                Through practical service, our goal is to create a community
                where everyone has the opportunity to thrive and grow, both
                personally and spiritually
              </p>
            </div>
          </div>
        </div>

        <div className="w-full p-4 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 4k:grid-cols-2 3k:grid-cols-2 md:portrait:grid-cols-2 grid-cols-1 gap-8">
          <div className="flex 2xl:flex-col xl:flex-col lg:flex-col 4k:flex-col 3k:flex-col md:portrait:flex-row flex-col gap-6 w-full flex-1 justify-start">
            <div className="flex justify-center items-center 2xl:justify-start xl:justify-start lg:justify-start lg:landscape:justify-start 4k:justify-start 3k:justify-start md:portrait:justify-center">
              <div className="relative 2xl:h-[20dvw] xl:h-[20dvw] lg:h-[20dvw] 4k:h-[20dvw] 3k:h-[20dvw] md:portrait:h-[30dvw] h-[60dvw] 2xl:w-[24dvw] xl:w-[24dvw] lg:w-[24dvw] 4k:w-[24dvw] 3k:w-[24dvw] md:portrait:w-[34dvw] w-[70dvw] rounded-lg overflow-hidden 2xl:mr-auto xl:mr-auto lg:mr-auto 4k:mr-auto 3k:mr-auto md:portrait:mx-auto">
                <Image
                  src="/images/SupportingImg.png"
                  alt="Building a Better World Through Unity and Compassion"
                  fill
                  className="object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="">
            <div className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] 4k:w-[65%] 3k:w-[65%] md:portrait:w-full ml-auto flex flex-col justify-end items-end 2xl:gap-16 xl:gap-16 lg:gap-16 4k:gap-16 3k:gap-16 md:portrait:gap-8">
              <h3 className="text-bgBlue font-manFont font-[700] 2xl:text-[3vw] xl:text-[3vw] lg:text-[3vw] 4k:text-[3vw] 3k:text-[3vw] md:portrait:text-[5.5vw] text-[7vw] 2xl:leading-[4vw] xl:leading-[4vw] lg:leading-[4vw] 4k:leading-[4vw] 3k:leading-[4vw] md:portrait:leading-[7vw] leading-[8vw]">
                Supporting Causes that{" "}
                <span className="text-primary">Change Lives</span>
              </h3>

              <Link
                href="/"
                className="hover:bg-bgWhite bg-bgBlue text-white transition-all duration-200 ease-linear border border-bgBlue 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full font-[700] px-10 2xl:py-2 xl:py-2 lg:py-2 lg:landscape:py-2 4k:py-2 3k:py-2 md:portrait:py-2 py-3 hover:text-bgBlue 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[2vw] text-[4vw] 2xl:mt-auto xl:mt-auto lg:mt-auto lg:landscape:mt-auto 4k:mt-auto 3k:mt-auto md:portrait:mt-auto mt-5 w-full flex justify-center items-center 2xl:w-auto xl:w-auto lg:w-auto lg:landscape:w-auto 4k:w-auto 3k:w-auto "
              >
                Join USFJ
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full p-4 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 4k:grid-cols-2 3k:grid-cols-2 md:portrait:grid-cols-2 grid-cols-1 gap-8 ">
          <div className="flex flex-col gap-6 ">
            <div>
              <h3 className="text-bgBlue font-manFont font-[700] 2xl:text-[3vw] xl:text-[3vw] lg:text-[3vw] 4k:text-[3vw] 3k:text-[3vw] md:portrait:text-[5vw] text-[7vw] 2xl:leading-[4vw] xl:leading-[4vw] lg:leading-[4vw] 4k:leading-[4vw] 3k:leading-[4vw] md:portrait:leading-[7vw] leading-[8vw]">
                Driven by Hope, Committed to{" "}
                <span className="text-primary">Humanity</span>
              </h3>
            </div>
            <div className="md:portrait:hidden hidden 2xl:flex lg:flex xl:flex 4k:flex 3k:flex lg:landscape:flex">
              <p className="font-secondaryFont font-[500] text-bgBlack/70 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] 4k:text-[1.1vw] 3k:text-[1.1vw] md:portrait:text-[2vw] text-[3.2vw] text-left">
                We believe that every individual has the potential to live a
                fulfilling life, grounded in faith and equipped with the tools
                needed for independence and personal growth.
              </p>
            </div>
          </div>
          <div className="flex 2xl:justify-end xl:justify-end lg:justify-end lg:landscape:justify-end md:portrait:justify-end 4k:justify-end 3k:justify-end justify-center items-center w-full">
            <div className="relative 2xl:h-[18dvw] xl:h-[18dvw] lg:h-[18dvw] 4k:h-[18dvw] 3k:h-[18dvw] md:portrait:h-[27dvw] h-[60dvw] 2xl:w-[24dvw] xl:w-[24dvw] lg:w-[24dvw] 4k:w-[24dvw] 3k:w-[24dvw] md:portrait:w-[37dvw]  w-[70dvw] rounded-lg overflow-hidden 2xl:ml-auto xl:ml-auto lg:ml-auto 4k:ml-auto 3k:ml-auto md:portrait:mx-auto  ">
              <Image
                src="/images/DrivenByHopeImg.png"
                alt="Building a Better World Through Unity and Compassion"
                fill
                className="object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-6 justify-center items-center">
          <div className="flex justify-between items-center w-[90%]">
            <h3 className="2xl:text-[3dvw] xl:text-[3dvw] lg:text-[3dvw] lg:landscape:text-[3dvw] 4k:text-[3dvw] 3k:text-[3dvw] md:portrait:text-[4dvw] text-[6.5dvw] font-[700] font-manFont text-bgBlue">
              Championing Causes that{" "}
              <span className="text-primary">Matter</span>
            </h3>
            <button className="bg-bgBlue flex-shrink-0 rounded-full 2xl:h-[3dvw] xl:h-[3dvw] lg:h-[3dvw] lg:landscape:h-[3dvw] 4k:h-[3dvw] 3k:h-[3dvw] md:portrait:h-[6dvw] h-[8dvw] 2xl:w-[3dvw] xl:w-[3dvw] lg:w-[3dvw] lg:landscape:w-[3dvw] 4k:w-[3dvw] 3k:w-[3dvw] md:portrait:w-[6dvw] w-[8dvw] flex justify-center items-center">
              <ArrowIconWhite />
            </button>
          </div>
          <div className="w-[90%] flex flex-col md:portrait:flex-col 2xl:flex-row xl:flex-row lg:flex-row lg:landscape:flex-row 4k:flex-row 3k:flex-row justify-center items-center gap-6">
            <div className="2xl:w-[40%] xl:w-[40%] lg:w-[40%] lg:landscape:w-[40%] 4k:w-[40%] 3k:w-[40%] md:portrait:w-full w-full relative">
              <div className="relative w-full 2xl:h-[15dvw] xl:h-[15dvw] lg:h-[15dvw] lg:landscape:h-[15dvw] 4k:h-[15dvw] 3k:h-[15dvw] md:portrait:h-[25dvw] h-[35dvw] rounded-lg overflow-hidden">
                <Image
                  src="/images/MonthlySupportImg.png"
                  fill
                  loading="lazy"
                  className="object-cover brightness-75"
                />
              </div>
              <div className="absolute bottom-0 w-full left-0 p-6">
                <h4 className="font-[500] font-manFont 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:landscape:text-[1.5dvw] 4k:text-[1.5dvw] 3k:text-[1.5dvw] md:portrait:text-[3dvw] text-[4.5dvw] text-white">
                  Monthly Administrative Support
                </h4>
              </div>
            </div>
            <div className="flex-1 relative w-full">
              <div className="relative w-full 2xl:h-[15dvw] xl:h-[15dvw] lg:h-[15dvw] lg:landscape:h-[15dvw] 4k:h-[15dvw] 3k:h-[15dvw] md:portrait:h-[25dvw] h-[35dvw] rounded-xl overflow-hidden">
                <Image
                  fill
                  className="object-cover brightness-75"
                  src="/images/HousingImg.png"
                  loading="lazy"
                />
              </div>
              <div className="absolute bottom-0 w-full left-0 p-6 flex justify-between items-center">
                <h4 className="font-[500] font-manFont 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:landscape:text-[1.5dvw] 4k:text-[1.5dvw] 3k:text-[1.5dvw] md:portrait:text-[3dvw] text-[4.5dvw] text-white">
                  Purchase of Housing Facilities
                </h4>

                <button className="flex justify-center text-bgBlue items-center 2xl:h-[3dvw] xl:h-[3dvw] lg:landscape:h-[3dvw] 4k:h-[3dvw] 3k:h-[3dvw] md:portrait:h-[5dvw] h-[7dvw] 2xl:w-[3dvw] xl:w-[3dvw] lg:landscape:w-[3dvw] 4k:w-[3dvw] 3k:w-[3dvw] md:portrait:w-[5dvw] w-[7dvw] bg-white rounded-full hover:text-white hover:bg-bgBlue transition-all duration-200 ease-linear">
                  <ArrowRight className=" -rotate-45" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
