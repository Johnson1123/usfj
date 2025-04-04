"use client";
import {
  h3HeadingStyle,
  pTextStyle,
  subTitleStyle,
  textStyle,
} from "@/style/common";

import OtherButton from "@/components/small/OtherButton";

function ContactForm() {
  const inputContainerStyle = `flex flex-col gap-2 border-b-2 my-5 border-[#8D8D8D]`;
  const inputStyle = `outline-none px-1 py-1 h-[45px] xl:h-[2.5vw] text-[1vw]`;
  return (
    <form action="" className="py-16 w-full order-last xl:col-span-3">
      <div className="grid grid-cols-1 gap-2 mobile-landscape:grid-cols-2 mobile-landscape:gap-10 md:grid-cols-2 md:gap-10 xl:my-[1vw]">
        <div className={`${inputContainerStyle}`}>
          <label htmlFor="" className={`font-bold ${subTitleStyle}`}>
            First Name
          </label>
          <input type="text" className={`${inputStyle}`} />
        </div>
        <div className={`${inputContainerStyle}`}>
          <label htmlFor="" className={`font-bold ${subTitleStyle}`}>
            Last Name
          </label>
          <input type="text" className={`${inputStyle}`} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 mobile-landscape:grid-cols-2 mobile-landscape:gap-10 md:grid-cols-2 md:gap-10 xl:my-[1vw]">
        <div className={`${inputContainerStyle}`}>
          <label htmlFor="" className={`font-bold ${pTextStyle}`}>
            Email
          </label>
          <input type="text" className={`${inputStyle}`} />
        </div>
        <div className={`${inputContainerStyle}`}>
          <label htmlFor="" className={`font-bold ${pTextStyle}`}>
            Phone Number
          </label>
          <input type="text" className={`${inputStyle}`} />
        </div>
      </div>
      <div className="mt-7 xl:my-[2vw]">
        <p className={`${pTextStyle} font-bold`}>Select Subject</p>
        <div className="my-3 flex flex-col gap-4 mt-5 mobile-landscape:flex-row mobile-landscape:gap-10 md:flex-row md:gap-10">
          <div className="flex gap-3 items-center">
            <input type="radio" size={30} />
            <label htmlFor="" className={`${textStyle}`}>
              General Inquiry
            </label>
          </div>
          <div className="flex gap-3 items-center">
            <input type="radio" size={30} />
            <label htmlFor="" className={`${textStyle}`}>
              Donation
            </label>
          </div>
          <div className="flex gap-3 items-center">
            <input type="radio" size={30} />
            <label htmlFor="Message" className={`${textStyle}`}>
              Our Causes
            </label>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <div className="flex flex-col gap-2 border-b-2 border-bgBlue">
          <label htmlFor="" className={`font-bold ${subTitleStyle}`}>
            Message
          </label>
          <textarea
            cols={7}
            rows={2}
            className="border-none outline-none"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <OtherButton label="Send Message" handler={() => {}} />
      </div>
    </form>
  );
}

export default ContactForm;
