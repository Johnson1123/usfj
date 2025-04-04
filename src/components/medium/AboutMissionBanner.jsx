import Image from "next/image";
import React from "react";
import WhiteBgBtn from "../small/WhiteBgBtn";
import {
  headingStyle,
  pTextStyle,
  sectionTitleTextStyle,
  textStyle,
} from "@/style/common";
import Container from "../layout/Container";

function AboutMissionBanner() {
  return (
    <section className="h-[100vh] w-full flex justify-center items-center relative left-0 right-0">
      <Image
        src={"/images/usfj-mission.png"}
        alt="mission banner image"
        fill={true}
        objectFit="cover"
      />

      <div className="absolute grid grid-cols-10 xl:w-[65%]">
        <div className="col-start-2 col-end-10 md:col-start-3 md:col-end-9 xl:col-start-1 xl:col-end-6 flex flex-col gap-7">
          <h3
            className={`font-bold  ${headingStyle} mobile-landscape:text-[5vw] text-white`}
          >
            Our Mission
          </h3>
          <p
            className={` font-secondaryFont ${pTextStyle} mobile-landscape:text-[3vw] text-white`}
          >
            We provide a safe, nurturing environment where they can grow in
            faith, develop essential life skills, and build the foundations for
            a successful, independent future. 
          </p>
          <WhiteBgBtn label="Join USFJ" />
        </div>
      </div>
    </section>
  );
}

export default AboutMissionBanner;
