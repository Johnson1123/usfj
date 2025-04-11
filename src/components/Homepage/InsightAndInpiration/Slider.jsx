// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Navigation } from "swiper/modules";
import { insightData } from "@/constant/data";
import Image from "next/image";
import { pTextStyle } from "@/style/common";
import { ArrowIconWhite } from "../../../../public/SVGs/AllSvgs";

export default function Slider({ swiperRef }) {
  return (
    <div className="w-[90%] 3k:w-[80%] h-[100%] mx-auto overflow-hidden">
      <Swiper
        autoplay={true}
        speed={500}
        modules={[Navigation]}
        loop={true}
        observer={true}
        observeParents={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          400: {
            slidesPerView: "auto",
            spaceBetween: 15,
          },
          760: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          2200: {
            slidesPerView: 3,
            spaceBetween: 100,
          },
        }}
      >
        {insightData.map((item, i) => {
          return (
            <SwiperSlide key={i} className="slides-width">
              <div className="">
                <div className="">
                  <Image
                    src={`/images/${item.image}`}
                    alt="Insight and Inspiration"
                    height={150}
                    width={150}
                    className="aspect-square mobile-landscape:aspect-square md:aspect-video w-full object-cover rounded-2xl"
                  />
                </div>
                <div className="mt-4">
                  <p className={`h3HeadingStyle font-[600]`}>{item.title}</p>
                  <div className="mt-5 flex justify-between items-center">
                    <span className={`pTextStyle font-thin texxt-[8vw]`}>
                      {item.date} -{" "}
                      <span className="font-normal">{item.team}</span>
                    </span>
                    <button className="bg-bgBlue flex-shrink-0 rounded-full w-[45px] h-[45px] lg:w-[40px] lg:h-[40px]  flex justify-center items-center">
                      <ArrowIconWhite className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
