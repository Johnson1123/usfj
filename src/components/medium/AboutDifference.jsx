"use client";
import React from "react";
import PrimaryButton from "../small/PrimaryBtn";
import Image from "next/image";
import {
  headingStyle,
  pTextStyle,
  sectionTitleTextStyle,
  textStyle,
} from "@/style/common";
import Container from "../layout/Container";
import Link from "next/link";

function AboutDifference() {
  return (
    <Container>
      <div className="mx-auto min-h-[100vh] flex items-center mobile-landscape:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[5vw] md:gap-[10vw] mobile-landscape:grid-cols-2">
          <div className="col-span-1 md:col-start-1 md:col-end-2 flex flex-col gap-10 md:gap-[2rem] 2xl:gap-[4rem]">
            <h3 className={`font-bold headingStyle `}>
              Join Us in Making a{" "}
              <span className="text-primary">Difference</span>
            </h3>
            <p
              className={`text-textColor font-secondaryFont pTextStyle mobile-landscape:text-[3vw]`}
            >
              Through mentorship, community engagement, and spiritual guidance,
              we strive to create lasting change in the lives of those we serve.
            </p>
            <Link
              href="/"
              className={`hover:bg-bgWhite bg-bgBlue text-white transition-all duration-200 ease-linear border border-bgBlue 2xl:rounded-3xl xl:rounded-3xl lg:rounded-3xl lg:landscape:rounded-3xl 4k:rounded-3xl 3k:rounded-3xl md:portrait:rounded-3xl rounded-full font-[700] px-10 2xl:py-2 xl:py-2 lg:py-2 lg:landscape:py-2 4k:py-2 3k:py-2 md:portrait:py-2 py-3 hover:text-bgBlue w-max flex justify-center items-center`}
            >
              Join USFJ
            </Link>
          </div>
          <div className="w-full mt-10 md:mt-0 col-span-1 grid-cols-2 md:grid-cols-3">
            <Image
              src="/images/Join-us-Img.webp"
              alt="USFJ executives team"
              height={1358}
              width={1358}
              className="h-[350px] md:w-full md:h-auto object-cover rounded-3xl w-auto aspect-square"
              sizes=""
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default AboutDifference;
