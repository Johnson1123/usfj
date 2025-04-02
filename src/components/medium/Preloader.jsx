// Preloader.jsx
"use client";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/anime.json";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="w-full h-screen fixed inset-0 flex items-center justify-center bg-white z-50">
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: 200, height: 200 }}
      />
    </div>
  );
};

export default Preloader;
