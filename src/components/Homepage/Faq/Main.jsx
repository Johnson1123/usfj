import Container from "@/components/layout/Container";
import React from "react";
import { ArrowIconWhite } from "../../../../public/SVGs/AllSvgs";
import { sectionTitleTextStyle } from "@/style/common";
import AccordionContainer from "./AccordionContainer";
import { faqitem } from "@/constant/data";

function Main() {
  return (
    <div className="py-20 xl:min-h-[100vh] xl:py-24 xl:flex items-center">
      <Container>
        <div className="xl:w-[90%] 2k:w-[70%] mx-auto">
          <div className="grid grid-cols-10 md:grid-cols-2 gap-5 items-center">
            <h3
              className={`4k:text-[3.5vw] 3k:text-[3.5vw] mobile-landscape:text-[clamp(20px,_5vw,_35px)] md:portrait:text-[clamp(3.5vw,_30px)] 2xl:text-[clamp(20px,_3.75vw_60px)] xl:text-[clamp(20px,_3vw,_56px)] lg:text-[clamp(20px,_4vw,_48px)] md:text-[clamp(20px,_5vw,_40px)] text-[6vw] font-bold col-span-8 md:col-span-1 `}
            >
              Frequently Asked <span className="text-primary">Questions</span>
            </h3>
            <div className="md:col-span-1 justify-items-end">
              <button className="bg-bgBlue flex-shrink-0 rounded-full w-[45px] h-[45px] lg:w-[45px] lg:h-[45px]  flex justify-center items-center">
                <ArrowIconWhite />
              </button>
            </div>
          </div>
          <AccordionContainer items={faqitem} />
        </div>
      </Container>
    </div>
  );
}

export default Main;
