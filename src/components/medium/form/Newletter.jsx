"use client";
import OtherButton from "@/components/small/OtherButton";
import React from "react";

function NewletterForm() {
  return (
    <div>
      <form
        action=""
        className="flex items-center gap-7 lg:gap-10 mx-auto w-max"
      >
        <input
          type="text"
          placeholder="Enter Your Email"
          className="py-2 px-3 rounded-[20px] w-[40vw] xl:w-[18vw] outline-none h-[45px] 3k:h-[2vw]"
        />

        <OtherButton label="Subscribe" handler={() => {}} />
      </form>
    </div>
  );
}

export default NewletterForm;
