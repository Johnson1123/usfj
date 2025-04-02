"use client";
import React from "react";
import Image from "next/image";
import { files } from "@/constant/data";

const MemberDetails = ({ member, onClose }) => {
  return (
    <div className="w-full relative p-4 bg-white shadow-lg rounded-md h-full">
      {/* Close Button */}
      <button className="absolute top-2 left-4 text-black" onClick={onClose}>
        ✕
      </button>

      {/*Members details*/}
      <div className="w-full flex flex-col justify-center items-center mt-16 border-b pb-4 ">
        <Image
          src={member.avatar}
          alt={member.name}
          width={80}
          height={80}
          className="rounded-full"
        />

        <h2 className="text-2xl font-bold text-bgBlue">{member.name}</h2>
        <p className="text-gray-600">{member.status}</p>
      </div>

      {/*Media and Files*/}
      <div className="w-full flex flex-col  gap-4 pt-4 ">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-[18px] text-bgBlue font-semibold ">Media</h2>
          <h2 className="font-semibold text-bgBlue">See all</h2>
        </div>
        <div className="flex justify-center gap-2">
          <Image src={"/Rectangle 15 (1).png"} width={82} height={100} />
          <Image src={"/Rectangle 16 (1).png"} width={82} height={100} />
          <Image src={"/Rectangle 15 (1).png"} width={82} height={100} />
        </div>

        <div className="w-full flex justify-between items-center">
          <h2 className="text-[18px] text-bgBlue font-semibold ">Files</h2>
          <h2 className="font-semibold text-bgBlue">See all</h2>
        </div>

        <div className="flex flex-col gap-4">
          {files.map((file) => (
            <div className="flex gap-4" key={file.id}>
              <div className="w-[42px] h-[42px] flex items-center justify-center rounded-[12px] bg-[#F3F1F4] ">
                {file.icon}
              </div>
              <div>
                <h2 className="font-medium text-[#180A29]">{file.title}</h2>
                <p className="text-sm">{file.size}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Starred messages*/}
      <div className="mt-4">
        <div className="w-full flex justify-between items-center">
          <h2 className="text-[18px] text-bgBlue font-semibold ">
            Stared Message
          </h2>
          <h2 className="font-semibold text-bgBlue">See all</h2>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
