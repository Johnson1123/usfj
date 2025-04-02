import React from "react";
import Image from "next/image";
import { members } from "@/constant/data";

const MembersList = ({ onSelectMember }) => {
  if (!onSelectMember) {
    console.error(
      "onSelectMember is undefined. Make sure it's passed correctly."
    );
  }

  return (
    <div className="px-4 py-2">
      <h2 className="text-lg font-bold mb-2 text-bgBlue">Members</h2>
      <ul>
        {members.map((user, index) => (
          <li
            key={index}
            className="flex items-center gap-3 py-2 px-3 cursor-pointer hover:bg-gray-200 rounded transition"
            onClick={() => onSelectMember && onSelectMember(user)}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <Image src={user.avatar} alt={user.name} width={32} height={32} />
            </div>

            <div>
              <span className="text-black">{user.name}</span>
              <span className="text-xs block">{user.status}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
