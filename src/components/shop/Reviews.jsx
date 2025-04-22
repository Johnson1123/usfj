import React from "react";
import Container from "../layout/Container";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

function ReviewsSection() {
  return (
    <div className=" bg-[#F7F9FF] flex justify-center items-center py-16 xl:py-[5rem] 3k:py-[20rem]">
      <Container>
        <div className="">
          <div className="w-[80%] md:w-[65%] sm:landscape:w-[65%] lg:landscape:w-[60%] 2xl:w-[50%] 3k:w-[35%] mx-auto">
            <h2 className="headingStyle text-center">
              What Our Customers <span className="text-bgOrange">Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-5 w-full h-[1100px] md:h-[400px] mt-16">
            <div className="col-span-1 col-row-1 p-3">
              <div className="relative h-[50%] w-full">
                <Image
                  src={`/images/customer-1.png`}
                  alt="Insight and Inspiration"
                  fill={true}
                  quality={100}
                  layout="fill"
                  className="rounded-[.5rem]"
                />
              </div>
              <div className="flex flex-col justify-center mt-10">
                <div className="flex text-yellow-500 sm:text-base md:text-lg">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <h4 className="h3HeadingStyle mt-2">Big Kante</h4>

                <p className="text-sm sm:text-base md:text-lg mt-2">
                  "I have been attending USFJ for a few months now, and I must
                  say it has been a life-changing experience. The community is
                  so supportive and loving." - Emily Wilson
                </p>

                <h3 className="mt-2 pTextStyle !font-bold">Marcon Flex</h3>
              </div>
            </div>
            <div className="col-span-1 col-row-1 bg-green-400"></div>
            <div className="col-span-1 col-row-1 bg-pink-400"></div>
            <div className="col-span-1 col-row-1 bg-white"></div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ReviewsSection;
