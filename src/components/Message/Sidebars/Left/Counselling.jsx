import { counsel } from "@/constant/data";
import React from "react";

const Counselling = () => {
  return (
    <div className="px-4 py-2 ">
      <h2 className="text-lg font-bold mb-2 text-bgBlue">Counselling</h2>
      <ul>
        {counsel.map((coun, index) => (
          <li
            key={index}
            className="py-1 cursor-pointer text-[#84818A] text-sm font-medium hover:bg-gray-200 rounded"
          >
            {coun}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Counselling;
