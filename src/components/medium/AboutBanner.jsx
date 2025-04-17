import Image from "next/image";
import React from "react";
import BannerContent from "../small/BannerContent";
import Container from "../layout/Container";

function AboutBanner() {
  return (
    <section className="min-h-[100dvh]  flex justify-center items-end">
      <div className="w-[90%] 4k:w-[75%] mobile-landscape:min-h-[500px] mobile-landscape:mt-[150px] h-[calc(100vh_-18vh)] 3k:h-[calc(100vh_-_250px)]  sm:h-[calc(100vh_-_135px)] md:h-[calc(100vh_-_150px)] relative overflow-hidden rounded-3xl">
        <Image
          src={"/images/Main-Hero.webp"}
          loading="lazy"
          fill={true}
          objectFit="cover"
          alt="usfj-admin-background"
        />

        {/* Banner content */}
        <BannerContent
          description="Our Mission to serve Jesus by Serving others, with a focus on
          empowering youth adults."
          pageName="About Us"
        />
      </div>
    </section>
  );
}

export default AboutBanner;
