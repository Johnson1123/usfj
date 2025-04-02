"use client";
import React, { useState, useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import httpClient from "@/utils/api";
import AuthSliders from "@/components/medium/authSliders";



export const ConfirmOTPContent = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email") || "your email";
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const inputRefs = useRef([]);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) inputRefs.current[index + 1]?.focus();
  };

  const handleBackspace = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const otpCode = otp.join(""); // Convert OTP array to a string

    try {
      const res = await httpClient.post("/auth/verify-otp", {
        email,
        otp: otpCode, // Send OTP along with the email
      });

      if (res.status === 200 || res.status === 201) {
        alert("OTP Confirmed");
        router.push("/onboarding");
      }

      console.log("OTP Verified Successfully:", res.data);
    } catch (error) {
      setError(
        error.response?.data?.message || "Invalid OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setResendLoading(true);
    setError("");

    try {
      const res = await httpClient.post("/auth/resend-otp", { email });

      if (res.status === 200 || res.status === 201) {
        alert("New OTP sent successfully!");
        setTimeLeft(60); // Reset timer
      }
    } catch (error) {
      setError("Failed to resend OTP. Please try again.");
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col-reverse md:flex-row">
      <div className="w-full h-full md:w-[50%] p-[20px]">
        <div className="h-[10%]">
          <Link href="/">
            <Image src="/logo.png" width={60} height={60} alt="Logo" />
          </Link>
        </div>
        <div className="w-full h-[90%] flex flex-col gap-[40px] items-center justify-center">
          <div className="text-center w-[459px]">
            <h1 className="text-[32px] font-semibold text-[#0C141D]">
              Email Verification
            </h1>
            <p className="text-[18px] text-[#667085] font-medium">
              A 6-digit code has been sent to
            </p>
            <p className="text-[18px] text-primary font-medium">({email})</p>
          </div>
          <form className="w-[459px] text-center" onSubmit={handleVerify}>
            <div className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e, index)}
                  onKeyDown={(e) => handleBackspace(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              ))}
            </div>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="bg-primary w-full h-[52px] mt-40 text-white text-lg font-medium px-[20px] py-[8px] rounded-[8px]"
            >
              {loading ? "Verifying..." : "Continue"}
            </button>
            <p className="mt-4 text-textColor font-medium">
              {timeLeft > 0 ? (
                `Resend OTP in ${timeLeft}s`
              ) : (
                <button
                  onClick={handleResendOTP}
                  disabled={resendLoading}
                  className="text-textColor font-medium"
                >
                  {resendLoading ? "Resending..." : "Didn't receive OTP? "}
                  <span className="text-primary">Click to resend</span>
                </button>
              )}
            </p>
          </form>
        </div>
      </div>
      {/* Right side */}
      <div className="w-full md:w-1/2 overflow-hidden flex justify-end items-center ">
        <AuthSliders />
      </div>
    </div>
  );
};

const ConfirmOTP = () => {
  return (
    <Suspense>
    <ConfirmOTPContent />
    </Suspense>
  )
}

export default ConfirmOTP;
