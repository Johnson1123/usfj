import Container from "@/components/layout/Container";
import React from "react";
import Form from "./Form";
import { sectionTitleTextStyle, subTitleStyle } from "@/style/common";

function ContactSectionMain() {
  return (
    <div className="bg-bgBlue py-16 xl:min-h-[100vh] flex items-center">
      <Container>
        <div className="grid grid-cols-1 xl:w-[75%] 2k:w-[70%] 3k:w-[70%] xl:mx-auto mobile-landscape:grid-cols-2 md:grid-cols-2 xl:grid-cols-5  md:gap-[10vw] md:items-center">
          <div className="xl:col-start-1 xl:col-end-3">
            <h3
              className={`${sectionTitleTextStyle} text-white font-bold mobile-landscape: `}
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
