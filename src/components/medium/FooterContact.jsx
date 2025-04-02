"use client";
import React from "react";

function FooterContact({ data }) {
  return (
    <div className="footer__contact_box w-full  md:flex md:flex-col ">
      <div className="">
        <h3 className="sub__heading font-manFont font-medium text-[1.5vw] text-white text-center md:text-left lg:text-left">
          {data.title}
        </h3>
        <div className="contact_item_wrapper flex flex-col items-center md:items-start lg:items-start gap-1 mt-2">
          <p className="text-bgWhite/50 text-center md:text-left lg:text-left">
            {data.items.address}
          </p>
          <p className="text-white text-center md:text-left lg:text-left">
            {data.items.tel}
          </p>
          <p className="text-white text-center md:text-left lg:text-left">
            {data.items.email}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FooterContact;
