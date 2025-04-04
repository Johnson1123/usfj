"use client";
import { pTextStyle, subTitleStyle } from "@/style/common";

function HomeContactForm() {
  const inputContainerStyle = `flex flex-col gap-2 border-b-2 my-7 md:my-5 border-gray-100`;
  const inputStyle = `outline-none px-1 h-[35px] xl:h-[2.5vw]`;
  return (
    <form action="" className="pt-5 w-full order-last xl:col-span-3">
      <div className={`${inputContainerStyle}`}>
        <label htmlFor="" className={`font-normal ${pTextStyle}`}>
          Full Name
        </label>
        <input type="text" className={`${inputStyle}`} />
      </div>
      <div className={`${inputContainerStyle}`}>
        <label htmlFor="" className={`font-normal ${pTextStyle}`}>
          Telephone
        </label>
        <input type="text" className={`${inputStyle}`} />
      </div>
      <div className={`${inputContainerStyle}`}>
        <label htmlFor="" className={`font-normal ${pTextStyle}`}>
          Email
        </label>
        <input type="text" className={`${inputStyle}`} />
      </div>
      <div className="flex justify-center mt-10 md:mt-7 mobile-landscape:mt-7 xl:mt-10">
        <button
          className={`${pTextStyle} bg-transparent text-bgBlue px-4 xl:px-10 py-2 rounded-full border border-bgBlue cursor-pointer hover:bg-bgBlue hover:text-white transition-all duration-200`}
        >
          Contact USFJ
        </button>
      </div>
    </form>
  );
}

export default HomeContactForm;
