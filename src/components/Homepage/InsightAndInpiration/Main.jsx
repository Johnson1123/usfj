import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  ArrowIconWhite,
  BibleStudiesIcon,
  MentorshipIcon,
  PrayerGroupsIcon,
} from "../../../../public/SVGs/AllSvgs";

import Slider from "./Slider";
import Container from "@/components/layout/Container";
import { headingStyle, sectionTitleTextStyle } from "@/style/common";

const fakeData = [
  {
    icon: MentorshipIcon(),
    title: "Mentorship",
    smallInfo: `Personal, faith-based mentorship to help young adults grow spiritually and navigate life’s challenges.`,
    path: "/",
  },
  {
    icon: BibleStudiesIcon(),
    title: "Bible Studies",
    smallInfo: `Regular group sessions to explore and understand God’s word.`,
    path: "/",
  },
  {
    icon: PrayerGroupsIcon(),
    title: "Prayer Groups",
    smallInfo: `A supportive environment where individuals can share prayer requests and seek encouragement.`,
    path: "/",
  },
];

const Main = () => {
  const handlePrev = () => {
    ref.current?.slidePrev();
  };
  const handleNext = () => {
    ref.current?.slideNext();
  };

  const ref = useRef(null);
  return (
    <div className="py-24 md:min-h-[100vh] xl:py-[8rem] xl:flex items-center">
      <Container>
        <div className="xl:w-[90%] 3k:w-[70%] 4k:w-[65%] mx-auto">
          <div className="grid grid-cols-10  gap-5 items-center">
            <h3 className={`headingStyle col-span-8 md:col-span-6 `}>
              Insights and Inspiration for a{" "}
              <span className="text-bgOrange">Better World</span>
            </h3>
            <div className="col-span-2 md:col-span-4 justify-items-end flex justify-end gap-5">
              <button
                className="bg-bgBlue flex-shrink-0 rounded-full w-[45px] h-[45px] lg:w-[45px] lg:h-[45px]  flex justify-center items-center"
                onClick={handlePrev}
              >
                <ArrowLeft className="text-white" />
              </button>
              <button
                className="bg-bgBlue flex-shrink-0 rounded-full w-[45px] h-[45px] lg:w-[45px] lg:h-[45px]  flex justify-center items-center"
                onClick={handleNext}
              >
                <ArrowRight className="text-white" />
              </button>
            </div>
          </div>

          {/* Slider  */}

          <div className="mt-16 xl:mt-20">
            <Slider swiperRef={ref} />
          </div>
          {/* End of slider */}
        </div>
      </Container>
    </div>
  );
};

export default Main;
