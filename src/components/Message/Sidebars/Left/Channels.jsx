import { channels } from "@/constant/data";
import React from "react";

const Channels = () => {
  return (
    <div className="px-4 py-2">
      <h2 className="text-lg font-bold mb-2 text-bgBlue">Channels</h2>
      <ul>
        {channels.map((channel, index) => (
          <li
            key={index}
            className="py-1 cursor-pointer text-[#84818A] text-sm font-medium hover:bg-gray-200 rounded"
          >
            {channel}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Channels;
