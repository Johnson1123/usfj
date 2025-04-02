"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import httpClient from "@/utils/api";
import AuthSliders from "@/components/medium/authSliders";


const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // const [termsAccepted, setTermsAccepted] = useState(false);
  const router = useRouter();

  // Form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    termsAccepted: "false"
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Register handler
  const registerHandler = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    const { email, password, termsAccepted } = formData;

    if (!email || !password || !termsAccepted) {
      setError("Email, password and terms and conditions are required.");
      return;
    }

    try {
      setLoading(true);
      const res = await httpClient.post("/auth/register", formData);

      if (res.status === 201 || res.status === 200) {
        localStorage.setItem("token", res.data.token);
        router.push(
          `/confirm-otp?email=${encodeURIComponent(formData.email)}`
        );
      } else {
        setError(res.data.message);
      }
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <div className="w-full h-full md:w-[50%] p-[20px]">
        <div className="h-[10%]">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={60} height={60} alt="USFJ Logo" />
          </Link>
        </div>

        {/* Sign up form */}
        <div className="w-full h-[90%] p-[20px] flex flex-col gap-[40px] items-center justify-center">
          <div className="w-[459px] text-center">
            <h1 className="text-[32px] font-semibold text-[#0C141D]">
              Create your account
            </h1>
            <p className="text-[18px] text-[#667085] font-medium">
              Let's create an account and start a wonderful journey with Christ
            </p>
          </div>

          <div className="w-[459px] text-center">
            <form onSubmit={registerHandler}>
              <div className="w-full flex flex-col gap-[32px]">
                <div className="w-full flex flex-col gap-[16px]">
                  <div className="w-full relative">
                    <input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      name="email"
                      onChange={handleChange}
                      required
                      className="w-full h-[52px] pl-[40px] pr-[16px] border-[1px] border-[#D0D5DD] rounded-[8px] placeholder:text-[#98A2B3] placeholder:text-[18px] font-medium focus:outline-none focus:right-0 text-[#98A2B3]"
                    />
                    <HiOutlineMail className="absolute bottom-4 left-4 text-[20px] text-[#98A2B3]" />
                  </div>

                  <div className="w-full relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={formData.password}
                      name="password"
                      onChange={handleChange}
                      required
                      className="w-full h-[52px] pl-[40px] pr-[16px] border-[1px] border-[#D0D5DD] rounded-[8px] placeholder:text-[#98A2B3] placeholder:text-[18px] font-medium focus:outline-none focus:right-0 text-[#98A2B3]"
                    />
                    <MdLockOutline className="absolute bottom-4 left-4 text-[20px] text-[#98A2B3]" />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-4 text-gray-500 text-sm focus:outline-none"
                    >
                      {showPassword ? (
                        <FiEyeOff size={20} className="text-darkColor" />
                      ) : (
                        <FiEye size={20} className="text-darkColor" />
                      )}
                    </button>
                  </div>

                  {error && (
                    <p className="text-[#FF3B3F] text-[18px] font-medium">
                      {error}
                    </p>
                  )}

                  <div className="flex gap-[4px] items-center">
                    <input
                      type="checkbox"
                      id="terms"
                      value={formData.termsAccepted}
                      name="termsAccepted"
                      className="accent-primary w-[18px] h-[18px]"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="terms"
                      className="font-medium text-[#667085]"
                    >
                      I agree to the{" "}
                      <span className="text-primary font-500">
                        Terms & Conditions
                      </span>{" "}
                      and{" "}
                      <span className="text-primary font-500">
                        Privacy Policy
                      </span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-primary w-full h-[52px] text-center text-[18px] font-medium text-white px-[20px] py-[8px] rounded-[8px]"
                  disabled={loading}
                >
                  {loading ? "Creating account..." : "Sign up"}
                </button>

                <h3 className="text-textColor font-medium">Or sign up with</h3>

                <div className="flex gap-[20px]">
                  <button className="flex items-center justify-center gap-[8px] text-[18px] font-medium w-full h-[53px] border-[1px] border-borderColor rounded-[8px]">
                    <FcGoogle size={24} />
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-[8px] text-[18px] font-medium w-full h-[53px] border-[1px] border-borderColor rounded-[8px]">
                    <FaFacebook size={24} color="#1877F2" />
                    Facebook
                  </button>
                </div>

                <h3 className="font-medium text-textColor">
                  Already have an account?{" "}
                  <Link href={"/auth/login"} className="text-primary">
                    Login
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

export default Register;
