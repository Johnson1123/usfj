import Image from "next/image";
import React from "react";
import { headingStyle, pTextStyle } from "@/style/common";
import NewletterForm from "../medium/form/Newletter";
import Container from "../layout/Container";

function ContactUsNewsletter() {
  return (
    <Container>
      <div className="h-auto flex items-center xl:min-h-[100vh] py-16">
        <div className="h-[60vh] mobile-landscape:min-h-[500px] w-full flex justify-center items-center relative left-0 right-0 rounded-xl overflow-hidden">
          <Image
            src={"/images/usfj-mission.png"}
            alt="mission banner image"
            fill={true}
            objectFit="cover"
          />

          <div className="absolute grid grid-cols-10 xl:w-[65%]">
            <div className="col-start-2 col-end-10 md:col-start-3 md:col-end-9 xl:col-start-1 xl:col-end-10 flex flex-col gap-10">
              <h3
                className={`font-bold text-white text-center ${headingStyle} mobile-landscape:text-[5vw]`}
              >
                Sign up to our newsletter
              </h3>
              <p
                className={`text-white font-secondaryFont text-center ${pTextStyle} mobile-landscape:text-[3vw]`}
              >
                Reciev latest news, update, and many other things every week.
              </p>
              <NewletterForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ContactUsNewsletter;
