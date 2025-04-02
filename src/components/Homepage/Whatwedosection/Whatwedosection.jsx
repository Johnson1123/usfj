import React from "react";
import "./Whatwedosection.css";
import Link from "next/link";
import { AngleArrowRight } from "../../../../public/SVGs/AllSvgs";
import Image from "next/image";

export const Whatwedosection = () => {
  return (
    <>
      <div className="min-h-[100dvh] 2xl:py-12 xl:py-12 lg:py-12 4k:py-20 3k:py-12 md:portrait:py-12 py-12">
        <div className="2xl:w-[60%] xl:w-[60%] lg:w-[60%] 4k:w-[60%] 3k:w-[60%] md:portrait:w-[85%] w-[95%] mx-auto flex justify-between items-center flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row 3k:flex-row md:portrait:flex-row gap-y-4">
          <div className="flex-1">
            <h3 className="2xl:text-[3.5dvw] xl:text-[3.5dvw] lg:text-[3.5dvw] 4k:text-[3.5dvw] 3k:text-[3.5dvw] md:portrait:text-[5.5dvw] text-[8dvw] text-bgBlue font-[700]">
              What We <span className="text-primary">Do</span>
            </h3>
          </div>
          <div className="flex-1 2xl:px-3 xl:px-3 lg:px-3 4k:px-3 3k:px-3 md:portrait:px-1.5">
            <p className="2xl:text-right xl:text-right lg:text-right 4k:text-right 3k:text-right md:portrait:text-right text-center font-secondaryFont 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] 4k:text-[1.1dvw] 3k:text-[1.1dvw] md:portrait:text-[2dvw] text-[4dvw] 2xl:leading-[2dvw] xl:leading-[2dvw] lg:leading-[2dvw] 4k:leading-[2dvw] 3k:leading-[2dvw] md:portrait:leading-[3dvw] leading-[6dvw] text-bgBlack/70 font-[500]">
              Our services are rooted in faith, driven by compassion, and aimed
              at empowering young adults to succeed in every aspect of life.
            </p>
          </div>
        </div>

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 4k:grid-cols-4 3k:grid-cols-4 md:portrait:grid-cols-2 grid-cols-1 2xl:gap-y-8 xl:gap-y-8 lg:gap-y-8 4k:gap-y-8 3k:gap-y-8 md:portrait:gap-y-4 gap-y-5 2xl:mt-6 xl:mt-6 lg:mt-6 lg:landscape:mt-6 4k:landscape:mt-10 3k:landscape:mt-10 md:portrait:mt-10 mt-10 2xl:w-full xl:w-full lg:w-full 4k:w-full 3k:w-full md:portrait:w-[90%] w-[90%] mx-auto">
          <div className="rounded-xl overflow-hidden">
            <div className="relative w-full 2xl:h-[24dvw] xl:h-[24dvw] lg:h-[24dvw] 4k:h-[24dvw] 3k:h-[24dvw] md:portrait:h-[40dvw] h-[80dvw]">
              <Image
                src="/images/SpiritualGuidanceImg.png"
                fill
                className="object-cover"
                alt="Spiritual Guidance & Mentorship"
              />
            </div>
          </div>
          <div className="px-4 py-8 flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-manFont font-[600] 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] 4k:text-[1.5dvw] 3k:text-[1.5dvw] md:portrait:text-[3.5dvw] text-[6dvw] text-bgBlack">
                Spiritual Guidance & Mentorship
              </h4>
              <p className="text-bgBlack/70 font-[400] font-secondaryFont 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] 4k:text-[1.1dvw] 3k:text-[1.1dvw] md:portrait:text-[2dvw] text-[4.2dvw]">
                Spiritual growth is at the heart of everything we do. Through
                Bible studies, prayer groups, and one-on-one mentorship, we
                guide individuals on their journey of faith.{" "}
              </p>
              <Link
                href="/"
                className="flex justify-start items-center gap-4 text-primary font-manFont font-[600] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] 4k:text-[1.2dvw] 3k:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[4.3dvw]"
              >
                Get Started <AngleArrowRight />
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="relative w-full 2xl:h-[24dvw] xl:h-[24dvw] lg:h-[24dvw] 4k:h-[24dvw] 3k:h-[24dvw] md:portrait:h-[40dvw] h-[80dvw]">
              <Image
                src="/images/LifeSkillsImg.png"
                fill
                className="object-cover"
                alt="Life Skills"
              />
            </div>
          </div>
          <div className="px-4 py-8 flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-manFont font-[600] 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] 4k:text-[1.5dvw] 3k:text-[1.5dvw] md:portrait:text-[3.5dvw] text-[6dvw] text-bgBlack">
                Life Skills
              </h4>
              <p className="text-bgBlack/70 font-[400] font-secondaryFont 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] 4k:text-[1.1dvw] 3k:text-[1.1dvw] md:portrait:text-[2dvw] text-[4.2dvw]">
                We provide practical training in financial literacy, career
                development, and personal responsibility to help young adults
                develop the tools they need for independent living.
              </p>
              <Link
                href="/"
                className="flex justify-start items-center gap-4 text-primary font-manFont font-[600] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] 4k:text-[1.2dvw] 3k:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[4.3dvw]"
              >
                Get Started <AngleArrowRight />
              </Link>
            </div>
          </div>

          <div className="px-4 py-8 flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-manFont font-[600] 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] 4k:text-[1.5dvw] 3k:text-[1.5dvw] md:portrait:text-[3.5dvw] text-[6dvw] text-bgBlack">
                Supportive Housing
              </h4>
              <p className="text-bgBlack/70 font-[400] font-secondaryFont 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] 4k:text-[1.1dvw] 3k:text-[1.1dvw] md:portrait:text-[2dvw] text-[4.2dvw]">
                We provide a safe and supportive living environment for young
                adults who need a stable place to live while they work on
                building their future.
              </p>
              <Link
                href="/"
                className="flex justify-start items-center gap-4 text-primary font-manFont font-[600] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] 4k:text-[1.2dvw] 3k:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[4.3dvw]"
              >
                Get Started <AngleArrowRight />
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <div className="relative w-full 2xl:h-[24dvw] xl:h-[24dvw] lg:h-[24dvw] 4k:h-[24dvw] 3k:h-[24dvw] md:portrait:h-[40dvw] h-[80dvw]">
              <Image
                src="/images/SupportiveHousingImg.png"
                fill
                className="object-cover"
                alt="Supportive Housing"
              />
            </div>
          </div>

          <div className="px-4 py-8 flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-manFont font-[600] 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] 4k:text-[1.5dvw] 3k:text-[1.5dvw] md:portrait:text-[3.5dvw] text-[6dvw] text-bgBlack">
                Education Support
              </h4>
              <p className="text-bgBlack/70 font-[400] font-secondaryFont 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] 4k:text-[1.1dvw] 3k:text-[1.1dvw] md:portrait:text-[2dvw] text-[4.2dvw]">
                We offer educational programs and tutoring to help young adults
                further their education, pursue new opportunities, and reach
                their academic goals.
              </p>
              <Link
                href="/"
                className="flex justify-start items-center gap-4 text-primary font-manFont font-[600] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] 4k:text-[1.2dvw] 3k:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[4.3dvw]"
              >
                Get Started <AngleArrowRight />
              </Link>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <div className="relative w-full 2xl:h-[24dvw] xl:h-[24dvw] lg:h-[24dvw] 4k:h-[24dvw] 3k:h-[24dvw] md:portrait:h-[40dvw] h-[80dvw]">
              <Image
                src="/images/EducationSupportImg.png"
                fill
                className="object-cover"
                alt="Education Support"
              />
            </div>
          </div>

          <div className="rounded-xl overflow-hidden">
            <div className="relative w-full 2xl:h-[24dvw] xl:h-[24dvw] lg:h-[24dvw] 4k:h-[24dvw] 3k:h-[24dvw] md:portrait:h-[40dvw] h-[80dvw]">
              <Image
                src="/images/CommunitySupportImg.png"
                fill
                className="object-cover"
                alt="Community Support and Volunteerism"
              />
            </div>
          </div>
          <div className="px-4 py-8 flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-manFont font-[600] 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] 4k:text-[1.5dvw] 3k:text-[1.5dvw] md:portrait:text-[3.5dvw] text-[6dvw] text-bgBlack">
                Community Support and Volunteerism
              </h4>
              <p className="text-bgBlack/70 font-[400] font-secondaryFont 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] 4k:text-[1.1dvw] 3k:text-[1.1dvw] md:portrait:text-[2dvw] text-[4.2dvw]">
                Service to others is a core value at United Servants for Jesus.
                We encourage our participants to engage with their community
                through volunteer work.
              </p>
              <Link
                href="/"
                className="flex justify-start items-center gap-4 text-primary font-manFont font-[600] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] 4k:text-[1.2dvw] 3k:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[4.3dvw]"
              >
                Get Started <AngleArrowRight />
              </Link>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden">
            <div className="relative w-full 2xl:h-[24dvw] xl:h-[24dvw] lg:h-[24dvw] 4k:h-[24dvw] 3k:h-[24dvw] md:portrait:h-[40dvw] h-[80dvw]">
              <Image
                src="/images/HealthAndWellneeImg.png"
                fill
                className="object-cover"
                alt="Health and Wellness Support"
              />
            </div>
          </div>
          <div className="px-4 py-8 flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <h4 className="font-manFont font-[600] 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] 4k:text-[1.5dvw] 3k:text-[1.5dvw] md:portrait:text-[3.5dvw] text-[6dvw] text-bgBlack">
                Health and Wellness Support
              </h4>
              <p className="text-bgBlack/70 font-[400] font-secondaryFont 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] 4k:text-[1.1dvw] 3k:text-[1.1dvw] md:portrait:text-[2dvw] text-[4.2dvw]">
                Our Health and Wellness Support services are designed to promote
                balanced living and ensure that young adults are equipped to
                maintain healthy lifestyles.
              </p>
              <Link
                href="/"
                className="flex justify-start items-center gap-4 text-primary font-manFont font-[600] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] 4k:text-[1.2dvw] 3k:text-[1.2dvw] md:portrait:text-[2.1dvw] text-[4.3dvw]"
              >
                Get Started <AngleArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
