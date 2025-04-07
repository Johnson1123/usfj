import HomeContactForm from "@/components/medium/form/HomeContactForm";
import {
  h3HeadingStyle,
  mediumTitleTextStyle,
  pTextStyle,
  subTitleStyle,
  textStyle,
} from "@/style/common";
import React from "react";

function Form() {
  return (
    <div className="py-10 px-7 rounded-3xl bg-white mt-16 mobile-landscape:mt-0 md:mt-0 mobile-landscape:py-5 md:py-7 xl:py-10 xl:col-span-3 xl:col-end-6">
      <div className="">
        <h3 className={`h3HeadingStyle font-bold text-center `}>
          Contact Us Today
        </h3>
        <p className={`pTextStyle text-textColor text-center mt-2`}>
          Join the team
        </p>
        <p className={`pTextStyle mt-10 font-[600]`}>Get In touch</p>
        <HomeContactForm />
      </div>
    </div>
  );
}

export default Form;
