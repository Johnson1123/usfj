import httpClient from "@/utils/api";


const BASE_URL = "api/auth";

// ✅ Register User
const register = async (userData) => {
  const response = await httpClient.post(`${BASE_URL}/register`, userData);
  if (response.data?.token) {
    localStorage.setItem("token", response.data.token); // ✅ Save only token
    localStorage.setItem("user", JSON.stringify(response.data.user)); // ✅ Save user separately
  }
  return response.data;
};

// ✅ Login User
const login = async (credentials) => {
  const response = await httpClient.post(`${BASE_URL}/login`, credentials);
  console.log("API Login Response:", response.data); // ✅ Debugging

  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } else {
    console.error("Token missing in API response:", response.data);
    throw new Error("Token missing in response");
  }
};

// Admin Login
const Adminlogin = async (credentials) => {
  const response = await httpClient.post(`${BASE_URL}/admin-login`, credentials);
  console.log("API Login Response:", response.data); // ✅ Debugging

  if (response.data?.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  } else {
    console.error("Token missing in API response:", response.data);
    throw new Error("Token missing in response");
  }
};

// ✅ Logout User
const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  return true;
};

// ✅ Verify OTP
const verifyOtp = async (otpData) => {
  const response = await httpClient.post(`${BASE_URL}/verify-otp`, otpData);
  return response.data;
};

// ✅ Resend OTP
const resendOtp = async (email) => {
  const response = await httpClient.post(`${BASE_URL}/resend-otp`, { email });
  return response.data;
};

// ✅ Forgot Password
const forgotPassword = async (email) => {
  const response = await httpClient.post(`${BASE_URL}/forgot-password`, {
    email,
  });
  return response.data;
};

// ✅ Reset Password (Fixed)
const resetPassword = async (userId, resetToken, resetData) => {
  if (!userId || !resetToken) {
    throw new Error("Invalid reset parameters.");
  }

  const response = await httpClient.post(
    `${BASE_URL}/reset-password/${userId}/${resetToken}`,
    resetData
  );
  return response.data;
};

// ✅ Export All Auth Services
const authService = {
  register,
  login,
  logout,
  verifyOtp,
  resendOtp,
  forgotPassword,
  resetPassword,
  Adminlogin
};

export default authService;
