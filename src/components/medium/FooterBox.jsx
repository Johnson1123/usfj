"use client";
import React from "react";

function FooterBox({ data }) {
  return (
    <div className="footer__box w-full  md:p-4">
      <h3 className="sub__heading text-white text-center md:text-left lg:text-left">
        {data.title}
      </h3>
      <ul className="footer__box_ul flex flex-col items-center mt-2 md:items-start md:mt-2 gap-10px mt-15px">
        {data.items.map((item, i) => {
          return (
            <li key={i}>
              <a
                href={item.link}
                key={i}
                className="text-black text-decoration-none"
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FooterBox;
