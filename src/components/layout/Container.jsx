import React from "react";

function Container({ children }) {
  return (
    <section className="2xl:w-[75%]  4k:w-[70%] w-[90%] mx-auto">
      {children}
    </section>
  );
}

export default Container;
