import React from "react";

const GreetingMessage = ({ name }) => {
  const currentHour = new Date().getHours();
  let message = "";

  if (currentHour < 12) {
    message = "Have a beautiful morning";
  } else if (currentHour < 18) {
    message = "Have a wonderful afternoon";
  } else {
    message = "Have a peaceful evening";
  }

  return (
    <div className="">
      <h1 className="text-[14px]  text-[#484848] ">
        {message}
        {name ? `, ${name}` : ""}
      </h1>
    </div>
  );
};

export default GreetingMessage;
