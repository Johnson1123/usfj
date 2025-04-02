"use client";
import authService from "@/services/authService";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



// Register User
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      return await authService.register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Registration failed."
      );
    }
  }
);


// Login User
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      return await authService.login(credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Login failed.");
    }
  }
);

// Admin User
export const loginAdmin = createAsyncThunk(
  "auth/loginadmin",
  async (credentials, thunkAPI) => {
    try {
      return await authService.Adminlogin(credentials);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Login failed.");
    }
  }
);




//  Logout User
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await authService.logout();
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue("Logout failed.");
  }
});


//  Verify OTP
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (otpData, thunkAPI) => {
    try {
      return await authService.verifyOtp(otpData);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "OTP verification failed."
      );
    }
  }
);


// Resend OTP
export const resendOtp = createAsyncThunk(
  "auth/resendOtp",
  async (email, thunkAPI) => {
    try {
      return await authService.resendOtp(email);
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to resend OTP."
      );
    }
  }
);


// ✅ Initial Auth State
const getInitialAuthState = () => {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  console.log("Loaded Token from Storage:", token); // ✅ Debugging

  let user = null;
  if (typeof window !== "undefined") {
    try {
      const storedUser = localStorage.getItem("user");
      user = storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem("user");
    }
  }
  return {
    user: null,
    admin: null,
    token: null,
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
  };
};


// ✅ Auth Slice
export const authSlice = createSlice({
  name: "auth",
  initialState: getInitialAuthState(),
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      // ✅ Register User
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // ✅ Login User
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("Login Success, Storing Token:", action.payload.token); // ✅ Debugging
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.token = action.payload.token;

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));

        console.log(
          "Token saved in Local Storage:",
          localStorage.getItem("token")
        ); // ✅ Check immediately
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // ✅ Login Admin
      .addCase(loginAdmin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        console.log("Login Success, Storing Token:", action.payload.token); // ✅ Debugging
        state.isLoading = false;
        state.isSuccess = true;
        state.admin = action.payload.admin;
        state.token = action.payload.token;

        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("admin", JSON.stringify(action.payload.admin));

        console.log(
          "Token saved in Local Storage:",
          localStorage.getItem("token")
        ); // ✅ Check immediately
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // ✅ Logout User
      .addCase(logout.fulfilled, (state) => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return getInitialAuthState(); // Reset auth state
      })

      // ✅ Verify OTP
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token);
        localStorage.setItem("user", JSON.stringify(action.payload.user));
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // ✅ Resend OTP
      .addCase(resendOtp.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(resendOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "OTP resent successfully.";
      })
      .addCase(resendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

// ✅ Export Actions
export const { reset } = authSlice.actions;
export default authSlice.reducer;
