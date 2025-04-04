import Container from "@/components/layout/Container";
import React from "react";
import Form from "./Form";
import {
  headingStyle,
  pTextStyle,
  sectionTitleTextStyle,
  subTitleStyle,
} from "@/style/common";

function ContactSectionMain() {
  return (
    <div className="bg-bgBlue py-32 xl:min-h-[100vh] xl:py-[8rem] 3k:py-[20rem] flex items-center">
      <Container>
        <div className="grid grid-cols-1 xl:w-[80%] 3k:w-[70%] xl:mx-auto mobile-landscape:grid-cols-2 md:grid-cols-2 xl:grid-cols-5  md:gap-[10vw] md:items-center">
          <div className="xl:col-start-1 xl:col-end-3">
            <h2 className={`${headingStyle}  text-white`}>Contact Us Today</h2>
            <p className={`${pTextStyle} text-white mt-3`}>
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
