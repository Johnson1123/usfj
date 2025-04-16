import React, { useRef } from "react";

function AboutExecutiveSlider() {
  const swiperRef = useRef();
  const handeleNext = () => {
    swiperRef?.current.slidePrev();
  };

  const handlePrve = () => {
    swiperRef?.current.slideNext();
  };

  return (
    <div>
      <div className=""></div>
    </div>
  );
}

export default AboutExecutiveSlider;
