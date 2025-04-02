import React from "react";
import Container from "../layout/Container";
import { sectionTitleTextStyle } from "@/style/common";
import { getInvolvedInPrayerGroup } from "@/constant/data";
import InvolvedBox from "./InvolvedBox";

function GetInvolved() {
  return (
    <section className="py-16 flex items-center mobile-landscape:min-h-[600px]">
      <Container>
        <div className="">
          <h3 className={`${sectionTitleTextStyle} font-bold`}>
            How to Get <span className="text-primary">Involved</span>
          </h3>
          <div className="mt-10 grid grid-cols-1 gap-5 mobile-landscape:grid-cols-3">
            {getInvolvedInPrayerGroup.map((item, index) => {
              return <InvolvedBox {...item} key={index} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default GetInvolved;
