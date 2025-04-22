// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "../../style/swiper.css";
import TopProducts from "../small/TopProducts";
import { Products } from "@/constant/product";

export default function ProductSlide() {
  return (
    <div className="w-[90%] md:w-[95%] 3k:w-[100%] mx-auto h-[100%] overflow-hidden">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        speed={500}
        loop={true}
        observer={true}
        centeredSlides
        observeParents={true}
        breakpoints={{
          400: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          760: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 5.5,
            spaceBetween: 10,
          },
          2200: {
            slidesPerView: 6.5,
            spaceBetween: 20,
          },
        }}
      >
        {Products.map((item, id) => {
          return (
            <SwiperSlide key={id} className="slides-width">
              <TopProducts
                title={item.title}
                label={item.categories[0]}
                price={item.price}
                discount={item.discount}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
