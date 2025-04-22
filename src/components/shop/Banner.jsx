import Image from "next/image";
import React from "react";
import WhiteBgBtn from "../small/WhiteBgBtn";

function Banner() {
  return (
    <section className="h-[100vh] w-full flex justify-center items-center relative left-0 right-0">
      <Image
        src={"/cap.png"}
        alt="mission banner image"
        fill={true}
        objectFit="cover"
      />

      <div className="absolute grid grid-cols-10 2xl:w-[75%]  4k:w-[70%] w-[90%] mx-auto">
        <div className="col-start-2 col-end-10 md:col-start-3 md:col-end-9 xl:col-start-1 xl:col-end-6 flex flex-col gap-7">
          <h3 className={`font-bold  headingStyle !text-white`}>
            Be Part of <br />
            Something Bigger
          </h3>
          <p
            className={` font-secondaryFont pTextStyle text-white text-shadow-sm`}
          >
            Whether you’re looking for mentorship, spiritual growth, or a place
            to belong, United Servants for Jesus welcomes you with open arms.
          </p>
          <WhiteBgBtn label="Join USFJ" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
