// // context/AuthContext.js
// "use client";
// import { createContext, useContext, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useRouter } from "next/navigation";

// const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const router = useRouter();
//   const user = useSelector((state) => state.auth.user);

//   useEffect(() => {
//     // Redirect if user is not authenticated
//     if (!user) {
//       router.push("/auth/login");
//     }
//   }, [user, router]);

//   return (
//     <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
