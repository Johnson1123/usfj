import React from "react";
import Container from "../layout/Container";
import Image from "next/image";
import BannerContent from "../small/BannerContent";

function CommunityBanner() {
  return (
    <Container>
      <section className="min-h-[100dvh] flex justify-center items-end">
        <div className="mobile-landscape:min-h-[500px] mobile-landscape:mt-[150px] h-[calc(100vh_-18vh)] 3k:h-[calc(100vh_-_250px)]  sm:h-[calc(100vh_-_135px)] md:h-[calc(100vh_-_150px)] w-full relative overflow-hidden rounded-3xl">
          <Image
            src={"/images/community-banner-image.png"}
            loading="lazy"
            fill={true}
            objectFit="cover"
            alt="usfj-admin-background"
          />

          {/* Banner content */}
          <BannerContent
            description="We believe that true transformation happens in the heart of a supportive and faith-driven community "
            pageName="Join a Community That Empowers and Transforms"
          />
        </div>
      </section>
    </Container>
  );
}

export default CommunityBanner;
