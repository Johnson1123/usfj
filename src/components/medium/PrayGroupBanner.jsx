import React from "react";
import Container from "../layout/Container";
import Image from "next/image";
import BannerContent from "../small/BannerContent";

function PrayGroupBanner() {
  return (
    <Container>
      <section className="min-h-[100dvh] flex justify-center items-end">
        <div className="mobile-landscape:min-h-[500px] mobile-landscape:mt-[150px] h-[calc(100vh_-18vh)] 3k:h-[calc(100vh_-_250px)]  sm:h-[calc(100vh_-_135px)] md:h-[calc(100vh_-_150px)] w-full relative overflow-hidden rounded-3xl">
          <Image
            src={"/images/praying.png"}
            loading="lazy"
            fill={true}
            objectFit="cover"
            alt="usfj-admin-background"
          />

          {/* Banner content */}
          <BannerContent
            description="Our Prayer Groups provide a space where young adults can come together in faith, share their hearts, and experience the peace that comes from seeking God together."
            pageName="Strength in Prayer, Unity in Faith"
          />
        </div>
      </section>
    </Container>
  );
}

export default PrayGroupBanner;
