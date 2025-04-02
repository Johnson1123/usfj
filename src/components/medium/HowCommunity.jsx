"use client";
import React from "react";
import Container from "../layout/Container";
import OtherButton from "../small/OtherButton";
import { sectionTitleTextStyle } from "@/style/common";
import Image from "next/image";

function HowCommunity() {
  return (
    <Container>
      <div className="py-16 grid grid-cols-1 lg:grid-cols-2  md:w-[90%] lg:w-[75% xl:w-[60%] 3k:w-[50%] md:mx-auto gap-10 md:gap-16 xl:gap-7 xl:py-[20vh]">
        <div className="lg:order-last">
          <h3
            className={`${sectionTitleTextStyle} font-bold md:text-center xl:text-left`}
          >
            How You Can Get <span className="text-primary">Involved</span>
          </h3>

          <div className="">
            <div className="flex flex-col gap-5 mt-10 xl:mt-3 xl:gap-2">
              <p>🔹 Join a Small Group </p>
              <p>🔹Attend Events & Workshops</p>
              <p>🔹 Volunteer & Serve</p>
              <p>🔹 Become a Mentor</p>
            </div>
          </div>
          <div className="mt-10 xl:mt-5">
            <OtherButton label={"Join Our Small Group"} handler={() => {}} />
          </div>
        </div>

        <div className="w-full col-span-1 grid-cols-2 lg:grid-cols-3">
          <Image
            src="/images/discussion.png"
            alt="Usfj Admin Image"
            height={1358}
            width={1358}
            className="h-[350px] md:w-full xl:w-auto  xl:h-[400px] object-cover rounded-3xl w-auto aspect-square md:aspect-video"
            sizes=""
          />
        </div>
      </div>
    </Container>
  );
}

export default HowCommunity;
