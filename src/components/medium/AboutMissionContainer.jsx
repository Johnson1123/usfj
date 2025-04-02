import React from "react";
import AboutWhoWeAreMissonBox from "../small/AboutWhoWeAreBox";

function AboutMissionContainer({ content, hide }) {
  return (
    <div className={`flex-col gap-7 my-7 ${hide ? "flex md:hidden" : "flex"}`}>
      {content.map((item, index) => {
        return (
          <AboutWhoWeAreMissonBox
            title={item.title}
            text={item.text}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default AboutMissionContainer;
