import React from "react";
import { footer } from "@/constant/footer";
import FooterBox from "../medium/FooterBox";
import FooterContact from "../medium/FooterContact";

function Footer() {
  return (
    <footer className="w-full flex bg-blueColor flex-col items-center">
      <div className="flex flex-col items-center w-full">
        <div className="w-full bg-bgWhite flex justify-center items-center py-5">
          <div className="w-[32%] md:w-[25%] lg:w-[13%]">
            <img
              src="/images/USFJ-DARK-Logo.png"
              alt="logo"
              className="w-full"
            />
          </div>
        </div>

        <div className="w-full bg-bgBlue flex justify-center flex-col py-5 md:py-10">
          <div className="w-[90%] mx-auto py-5 grid grid-cols-4 gap-5">
            <FooterBox data={footer.useFul} />
            <FooterBox data={footer.ourCauses} />

            <FooterBox data={footer.socialMedia} />

            <FooterContact data={footer.contactInfo} />
          </div>
          <div className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto py-3 text-white text-center">
            <p
              className="font-primary opacity-35
            "
            >
              Designed by Kaltech Consultancy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
