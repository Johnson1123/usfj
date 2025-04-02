import React, { useState } from "react";
import { FaShop } from "react-icons/fa6";
import { IoArrowForwardOutline } from "react-icons/io5";
import { PiBuildingApartmentFill } from "react-icons/pi";

const JoinOurTeam = () => {
  const [activeTab, setActiveTab] = useState("volunteers");

  return (
    <div className="w-[410px] flex flex-col gap-[20px] justify-start">
      <div>
        <h1 className="text-[24px] font-semibold">Join our team</h1>
        <p className="text-[14px] text-[#484848]">
          Joining our team just became easy
        </p>
      </div>

      <div className="flex flex-col gap-[20px]">
        {/* Volunteers Tab */}
        <div
          onClick={() => setActiveTab("volunteers")}
          className={`w-[410px] h-[88px] p-[20px] border border-[#142560] flex items-center justify-between rounded-[100px] cursor-pointer transition-colors duration-300 ${
            activeTab === "volunteers"
              ? "border-[1px] border-[#142560] text-bgBlue"
              : "border-[1px] border-[#E8E8E8] text-[#484848]"
          }`}
        >
          <div className="flex gap-4 items-center">
            <FaShop size={40} />
            <div>
              <h2 className="text-[16px] font-bold">Volunteers</h2>
              <p className="">Join our volunteer team</p>
            </div>
          </div>

          <IoArrowForwardOutline size={24} />
        </div>

        {/* Staff Tab */}
        <div
          onClick={() => setActiveTab("staff")}
          className={`w-[410px] h-[88px] p-[20px] border border-[#142560] flex items-center justify-between rounded-[100px] cursor-pointer transition-colors duration-300 ${
            activeTab === "staff"
              ? "border-[1px] border-[#142560] text-bgBlue"
              : "border-[1px] border-[#E8E8E8] text-[#484848]"
          }`}
        >
          <div className="flex gap-4 items-center">
            <PiBuildingApartmentFill size={40} />
            <div>
              <h2 className="text-[16px] font-bold">Staff</h2>
              <p className="">Become a member of staff</p>
            </div>
          </div>

          <IoArrowForwardOutline size={24} />
        </div>
      </div>
    </div>
  );
};

export default JoinOurTeam;
