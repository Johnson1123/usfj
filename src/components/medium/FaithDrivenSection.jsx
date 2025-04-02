"use client";
import React from "react";
import OtherButton from "../small/OtherButton";
import Container from "../layout/Container";
import { sectionTitleTextStyle, textStyle } from "@/style/common";
import Image from "next/image";

function FaithDrivenSection() {
  return (
    <Container>
      <div className="grid grid-cols-1 py-16 xl:py-24 md:w-[80%] lg:w-[75%] xl:w-[60%] 3k:w-[50%] md:mx-auto gap-10 md:gap-16 xl:gap-7 lg:min-h-[100vh]">
        {/* top section */}

        <div className="flex flex-col justify-center items-center">
          <h3 className={`${sectionTitleTextStyle} font-bold text-center`}>
            A faith-driven <span className="text-primary">community</span>
          </h3>
          <p className={`${textStyle} font-secondaryFont mt-7 md:text-center`}>
            Our mission is to serve Jesus by serving others, creating a
            nurturing space where young adults can grow spiritually, develop
            essential life skills, and build meaningful relationships that last
            a lifetime.
          </p>
          <div className="mt-10">
            <OtherButton label={"Join Our Community"} handler={() => {}} />
          </div>
        </div>

        {/* Bottom Section */}

        <div className="w-full col-span-1 grid-cols-2">
          <Image
            src="/images/faith-community.png"
            alt="Usfj Admin Image"
            height={1358}
            width={1358}
            className="h-[350px] xl:h-[300px] md:w-full md:h-auto object-cover rounded-3xl w-auto aspect-square md:aspect-video"
            sizes=""
          />
        </div>
      </div>
    </Container>
  );
}

export default FaithDrivenSection;
