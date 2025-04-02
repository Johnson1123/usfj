import Image from "next/image";
import React from "react";
import BannerContent from "../small/BannerContent";
import Container from "../layout/Container";

function ContactBanner() {
  return (
    <Container>
      <section className="min-h-[100dvh]  flex justify-center items-end">
        <div className="mobile-landscape:min-h-[500px] mobile-landscape:mt-[150px] h-[calc(100vh_-_18vh)] 3k:h-[calc(100vh_-_300px)]  sm:h-[calc(100vh_-_135px)] md:h-[calc(100vh_-_150px)] w-full relative overflow-hidden rounded-3xl">
          <Image
            src={"/images/contact-us-banner.png"}
            loading="lazy"
            fill={true}
            objectFit="cover"
            alt="usfj-admin-background"
          />

          {/* Banner content */}
          <BannerContent
            description="We are here to answer your questions, listen to your ideas, and welcome your involvement. "
            pageName="Contact Us"
          />
        </div>
      </section>
    </Container>
  );
}

export default ContactBanner;
