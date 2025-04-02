// components/DateDisplay.jsx
import React from "react";

const DateDisplay = () => {
  const now = new Date();
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const formattedDate = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="text-right">
      <div className="text-[18px] font-bold">{weekday}</div>
      <div className="text-base text-[#202020] ">{formattedDate}</div>
    </div>
  );
};

export default DateDisplay;
