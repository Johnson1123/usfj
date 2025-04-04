"use client";
import React, { useState } from "react";
import AboutWhoWeAreBtn from "../small/AboutWhoWeAreBtn";
import AboutMissionContainer from "./AboutMissionContainer";
import { mission } from "@/constant/data";
import Container from "../layout/Container";
import { headingStyle, sectionTitleTextStyle } from "@/style/common";

function AboutWhoWeAre() {
  const [steps, setSteps] = useState(1);
  return (
    <Container>
      <div
        className={`grid md:grid-cols-2 xl:w-[75%] mx-auto xl:gap-[7vw] min-h-[100vh] py-16 3k:py-[15vh] gap-5 ${sectionTitleTextStyle}`}
      >
        <div className="col-start-1 col-end-2 w-full">
          <h3
            className={`${headingStyle} font-bold mobile-landscape:text-[5vw] `}
          >
            Who we <span className={`text-primary`}>are</span>
          </h3>
          <div className="">
            <AboutWhoWeAreBtn
              label={"Our Mission Statement"}
              steps={steps}
              setSteps={setSteps}
              active={1}
            />
            {steps == 1 && (
              <AboutMissionContainer content={mission} hide={true} />
            )}
            <AboutWhoWeAreBtn
              label={"Our Vission Statement"}
              steps={steps}
              setSteps={setSteps}
              active={2}
            />
            {steps == 2 && (
              <AboutMissionContainer content={mission} hide={true} />
            )}
            <AboutWhoWeAreBtn
              label={"Our Core Values"}
              steps={steps}
              setSteps={setSteps}
              active={3}
            />
            {steps == 3 && (
              <AboutMissionContainer content={mission} hide={true} />
            )}
          </div>
        </div>
        <div className="col-start-2 col-end-3 w-full hidden md:block">
          {steps == 1 && <AboutMissionContainer content={mission} />}
          {steps == 2 && <AboutMissionContainer content={mission} />}
          {steps == 3 && <AboutMissionContainer content={mission} />}
        </div>
      </div>
    </Container>
  );
}

export default AboutWhoWeAre;
