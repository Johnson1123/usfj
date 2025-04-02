import { prayers } from "@/constant/data";
import React from "react";

const PrayerGroups = () => {
  return (
    <div className="px-4 py-2 ">
      <h2 className="text-lg font-bold mb-2 text-bgBlue">Prayer Groups</h2>
      <ul>
        {prayers.map((prayer, index) => (
          <li
            key={index}
            className="py-1 cursor-pointer text-[#84818A] text-sm font-medium hover:bg-gray-200 rounded"
          >
            {prayer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrayerGroups;
