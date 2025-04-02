import Image from 'next/image'
import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";

const MeetingsCard = ({meeting}) => {
const {avatar, name, date, type, author } = meeting    


  return (
    <div className="w-full h-[285px] bg-white rounded-[22px] p-6 space-y-10 ">
      <div className="flex gap-2">
        <Image
          src={avatar}
          width={55}
          height={55}
          objectFit="fill"
          layout="contain"
        />
        <div>
          <h1 className="text-[19px] font-semibold  ">{name}</h1>
          <p className="text-[#333333B8]">{date}</p>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex gap-2 items-center">
          <IoLocationOutline size={19} />
          <p className="text-[#333333B8] text-[13px] ">{type}</p>
        </div>
        <div className="flex gap-2 items-center">
          <FiUser size={19} />
          <p className="text-[#333333B8] text-[13px] ">{author}</p>
        </div>
          </div>
          
          <div>
          <Image src={"/Group 48095661.png"} width={131} height={43} />
          </div>
    </div>
  );
}

export default MeetingsCard