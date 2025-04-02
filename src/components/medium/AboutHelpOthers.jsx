import { helpOthers } from "@/constant/data";
import { sectionTitleTextStyle, textStyle } from "@/style/common";
import React from "react";
import AboutHelpBox from "../small/AboutHelpBox";
import Container from "../layout/Container";

function AboutHelpOthers() {
  return (
    <Container>
      <div className=" py-16 3k:py-[15vh] xl:w-[75%] mx-auto">
        <div className="grid lg:grid-cols-2 lg:gap-[7vw]">
          <h3
            className={`${sectionTitleTextStyle} mobile-landscape:text-[5vw] text-bgBlue`}
          >
            Help others with your{" "}
            <span className="text-primary">Substance</span>
          </h3>
          <p
            className={`font-secondaryFont ${textStyle} my-8 mobile-landscape:text-[3vw]`}
          >
            There are many ways you can get involved with United Servants for
            Jesus and help us make a lasting impact in the lives of young adults
            in Kentucky.
          </p>
        </div>
        <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 3k:gap-[1.5vw] xl:mt-[10vh]">
          {helpOthers.map((item, index) => {
            return <AboutHelpBox {...item} key={index} />;
          })}
        </div>
      </div>
    </Container>
  );
}

export default AboutHelpOthers;
