"use client";
import React from "react";
import OtherButton from "../small/OtherButton";
import Container from "../layout/Container";
import Image from "next/image";
import { sectionTitleTextStyle, textStyle } from "@/style/common";

function WhyCommunity() {
  return (
    <div className="md:bg-gray-100 py-16 xl:flex items-center">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2  md:w-[80%] lg:w-[75%] xl:w-[60%] 3k:w-[50%] md:mx-auto gap-10 md:gap-16 xl:gap-7 xl:py-[20vh]">
          <div>
            <h3
              className={`${sectionTitleTextStyle} font-bold md:text-center lg:text-left`}
            >
              Why Join Our <span className="text-primary">Community?</span>
            </h3>
            <div className="flex flex-col gap-5 mt-7 xl:mt-5 xl:gap-3">
              {/* benefit box */}
              <div className="">
                <div className=""></div>
                <div className="">
                  <h4 className={`${textStyle} text-primary font-semibold`}>
                    Faith & Spiritual Growth
                  </h4>
                  <p className={`${textStyle} font-secondaryFont mt-1`}>
                    Deepen your relationship with Jesus through guided
                    mentorship, prayer, and fellowship.
                  </p>
                </div>
              </div>
              {/* benefit box */}

              <div className="">
                <div className=""></div>
                <div className="">
                  <h4>Mentorship & Life Skills</h4>
                  <p>
                    Learn from experienced mentors who will help you navigate
                    life’s challenges with wisdom and faith.
                  </p>
                </div>
              </div>

              {/* benefit box */}

              <div className="">
                <div className=""></div>
                <div className="">
                  <h4>Supportive Network</h4>
                  <p>
                    Connect with like-minded individuals who encourage, uplift,
                    and walk alongside you in your journey.
                  </p>
                </div>
              </div>

              {/* button */}
              <div className="mt-7">
                <OtherButton label={"Join Community"} handler={() => {}} />
              </div>
            </div>

            {/* second div */}
            <div className=""></div>
          </div>

          {/* bottom section */}
          <div className="w-full  col-span-1 grid-cols-2 md:grid-cols-3 ">
            <Image
              src="/images/joint-hand.png"
              alt="Usfj Admin Image"
              height={1358}
              width={1358}
              className="h-[350px] md:w-full xl:w-auto xl:h-full object-cover rounded-3xl w-auto aspect-square"
              sizes=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default WhyCommunity;
