"use client";
import Image from "next/image";
import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import AuthSliders from "@/components/medium/authSliders";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "@/features/authSlice";
import { useRouter } from "next/navigation";



const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

      const dispatch = useDispatch()
      const router = useRouter()
    
    const { isLoading, isError, message } = useSelector((state) => state.auth);
    
    const handleMyName = () => {
        alert("My Name is Ayotomiwa")
    }

   const handleLogin = async (e) => {
     e.preventDefault();
   
     try {
       const resultAction = await dispatch(loginAdmin)({
         email,
         password,
       });
 
       if (loginAdmin.fulfilled.match(resultAction)) {
         // Success: Redirect to dashboard
         toast.success("Login successful!");
         router.push("/dashboard");
       } else {
         // Error: Show error message
         toast.error(resultAction.payload || "Login failed. Please try again.");
       }
 
       // Store token in localStorage
       localStorage.setItem("token", data.token);
       localStorage.setItem("adminId", data.admin._id); // ✅ Store user ID
 
     } catch (err) {
             toast.error("An unexpected error occurred.");
     } 
   };

  // Login with google handler
  const handleGoogleLogin = () => {
    window.location.href = "https://usfj-backend.onrender.com/api/auth/google/";
  };

  return (
    <div className="w-full h-screen flex flex-col-reverse md:flex-row">
      <div className="w-full h-full md:w-[50%] p-[20px]">
        <div className="h-[10%]">
          <Link href={"/"}>
            <Image src={"/logo.png"} width={60} height={60} alt="USFJ Logo" />
          </Link>
        </div>

        {/* Sign up form */}
        <div className="w-full h-[90%] flex flex-col gap-[40px] items-center justify-center">
          <div className="w-[459px] text-center">
            <h1 className="text-[32px] font-semibold text-[#0C141D]">
              Login into your account
            </h1>
            <p className="text-[18px] text-[#667085] font-medium">
              Continue your wonderful journey with Christ
            </p>
          </div>

          <div className="w-[459px] text-center">
            <form onSubmit={handleLogin}>
              <div className="w-full flex flex-col gap-[32px]">
                <div className="w-full flex flex-col gap-[16px]">
                  <div className="w-full relative">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full h-[52px] pl-[40px] pr-[16px] border-[1px] border-[#D0D5DD] rounded-[8px] placeholder:text-[#98A2B3] placeholder:text-[18px] font-medium focus:outline-none text-[#98A2B3]"
                    />
                    <HiOutlineMail className="absolute bottom-4 left-4 text-[20px] text-[#98A2B3]" />
                  </div>

                  <div className="w-full relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full h-[52px] pl-[40px] pr-[16px] border-[1px] border-[#D0D5DD] rounded-[8px] placeholder:text-[#98A2B3] placeholder:text-[18px] font-medium focus:outline-none text-[#98A2B3]"
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

                  <div className="flex gap-[4px] items-center justify-end">
                    <Link href={"/forgot-password"}>
                      <p className="font-medium text-primary">
                        Forgot Password?
                      </p>
                    </Link>
                  </div>
                </div>

                {isError && <p className="text-red-500">{isError}</p>}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-primary w-full h-[52px] text-center text-[18px] font-medium text-white px-[20px] py-[8px] rounded-[8px] disabled:bg-gray-500"
                >
                  {isLoading ? "Logging in..." : "Login"}
                </button>

                <h3 className="text-textColor font-medium">Or login with</h3>

                <div className="flex gap-[20px]">
                  <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center gap-[8px] text-[18px] font-medium w-full h-[53px] border-[1px] border-borderColor rounded-[8px]"
                  >
                    <FcGoogle size={24} />
                    Google
                  </button>
                  <button className="flex items-center justify-center gap-[8px] text-[18px] font-medium w-full h-[53px] border-[1px] border-borderColor rounded-[8px]">
                    <FaFacebook size={24} color="#1877F2" />
                    Facebook
                  </button>
                </div>
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

export default AdminLogin;
