import Container from "@/components/layout/Container";
import React from "react";
import Form from "./Form";
import { sectionTitleTextStyle, subTitleStyle } from "@/style/common";

function ContactSectionMain() {
  return (
    <div className="bg-bgBlue py-16 xl:min-h-[100vh] flex items-center">
      <Container>
        <div className="grid grid-cols-1 xl:w-[90%] 2k:w-[70%] xl:mx-auto mobile-landscape:grid-cols-2 md:grid-cols-2 xl:grid-cols-5  md:gap-[10vw] md:items-center">
          <div className="xl:col-start-1 xl:col-end-3">
            <h3
              className={`4k:text-[3.5vw] 3k:text-[3.5vw] mobile-landscape:text-[clamp(20px,_5vw,_35px)] md:portrait:text-[clamp(3.5vw,_30px)] 2xl:text-[clamp(20px,_3.75vw_60px)] xl:text-[clamp(20px,_3vw,_56px)] lg:text-[clamp(20px,_4vw,_48px)] md:text-[clamp(20px,_5vw,_40px)] text-[6vw] text-white font-bold mobile-landscape: `}
            >
              Contact Us Today
            </h3>
            <p className={`${subTitleStyle} text-white mt-3 mobile-landscape:`}>
              Join us on this journey to make a meaningful impact in our
              community and beyond.
            </p>
          </div>
          <Form />
        </div>
      </Container>
    </div>
  );
}

export default ContactSectionMain;
