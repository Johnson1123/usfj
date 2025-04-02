import React from "react";
import Image from "next/image";
import { messages } from "@/constant/data";

const DirectMessages = () => {
  return (
    <div className="px-4 py-2">
      <h2 className="text-lg font-bold mb-2 text-bgBlue">Direct Messages</h2>
      <ul>
        {messages.map((user, index) => (
          <li
            key={index}
            className="flex items-center gap-3 py-2 px-3 cursor-pointer text-[#84818A] text-sm font-medium hover:bg-gray-200 rounded transition-all duration-200"
          >
            {/* User Avatar */}
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image
                src={user.avatar}
                alt={user.name}
                width={32}
                height={32}
                objectFit="cover"
              />
            </div>

            {/* User Name */}
            <span>{user.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DirectMessages;
