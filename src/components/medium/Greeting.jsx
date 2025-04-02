import React from "react";

const Greeting = ({ name }) => {
  const currentHour = new Date().getHours();
  let greeting = "";

  if (currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <h1 className="text-[30px] font-bold ">
      {greeting}, {name}
    </h1>
  );
};

export default Greeting;
