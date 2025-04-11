import Container from "@/components/layout/Container";
import React from "react";
import { ArrowIconWhite } from "../../../../public/SVGs/AllSvgs";
import { headingStyle, sectionTitleTextStyle } from "@/style/common";
import AccordionContainer from "./AccordionContainer";
import { faqitem } from "@/constant/data";

function Main() {
  return (
    <div className="py-20 xl:min-h-[100vh] xl:py-[8rem] 3k:py-[20rem] xl:flex items-center">
      <Container>
        <div className="mx-auto">
          <div className="grid grid-cols-10  gap-5 items-center">
            <h2 className={`headingStyle col-span-8  `}>
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <div className="col-span-2 justify-items-end ">
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
