import { general } from "@/constant/data";
import React from "react";

const GeneralChats = () => {
  return (
    <div className="px-4 py-2 ">
      <h2 className="text-lg font-bold mb-2 text-bgBlue">General Chats</h2>
      <ul>
        {general.map((gen, index) => (
          <li
            key={index}
            className="py-1 cursor-pointer text-[#84818A] text-sm font-medium hover:bg-gray-200 rounded"
          >
            {gen}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GeneralChats;
