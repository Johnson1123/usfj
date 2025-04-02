"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import Link from "next/link";
import AuthSliders from "@/components/medium/authSliders";


const ForgotPassword = () => {
  return (
    <div className="w-full h-screen flex flex-col-reverse md:flex-row">
      <div className="w-full h-full md:w-[50%] p-[20px]  ">
        <div className="h-[10%]">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={60} height={60} alt="USFJ Logo" />
          </Link>
        </div>

        {/*ForgotPassword*/}
        <div className="w-full h-[90%] flex flex-col gap-[40px] items-center justify-center">
          <div className="w-[459px] text-center ">
            <h1 className="text-[32px] font-semibold text-[#0C141D] ">
              Forgot password?
            </h1>
            <p className="text-[18px] text-[#667085] font-medium ">
              No worriest! Just enter your email and we’ll send you a reset
              password link.
            </p>
          </div>

          <div className="w-[459px] text-center">
            <form action="">
              <div className="w-full flex flex-col gap-[32px]">
                <div className="w-full flex flex-col gap-[16px] ">
                  <div className="w-full relative">
                    <input
                      type="text"
                      placeholder="Email"
                      required
                      className="w-full h-[52px] pl-[40px] pr-[16px] border-[1px] border-[#D0D5DD] rounded-[8px] placeholder:text-[#98A2B3] placeholder:text-[18px] font-medium focus:outline-none focus:right-0 text-[#98A2B3] "
                    />
                    <HiOutlineMail className="absolute bottom-4 left-4 text-[20px] text-[#98A2B3] " />
                  </div>
                </div>

                <button className="bg-primary w-full h-[52px] text-center text-[18px] font-medium text-white px-[20px] py-[8px] rounded-[8px]  ">
                  Send Recovery Email
                </button>

                <h3 className="font-medium text-textColor">
                  Just remember?
                  <Link href={"/auth/register"} className="text-primary">
                    Signup
                  </Link>
                </h3>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 overflow-hidden flex justify-end items-center ">
        <AuthSliders />
      </div>
    </div>
  );
};

export default ForgotPassword;
