import {
  mediumTitleTextStyle,
  sectionTitleTextStyle,
  subTitleStyle,
  textStyle,
} from "@/style/common";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

const AccordionItem = ({ title, content, isOpen, index, onClick, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 5, delay: index * 0.1 }}
      className={`rounded-full my-5 py-5   ${
        isOpen ? "" : "border-b border-gray-100"
      }`}
    >
      <button
        className={`w-full py-3 grid grid-cols-10 lg:gap-10 items-center transition-colors bg-white rounded-3xl  px-2 ${
          isOpen ? "rounded-br-none rounded-bl-none" : "rounded-3xl"
        }`}
        onClick={onClick}
      >
        <div className="col-span-2 lg:col-span-3">
          {isOpen && (
            <AnimatePresence>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className={`${sectionTitleTextStyle} text-textColor transition-all duration-700`}
              >
                0{index + 1}.
              </motion.p>
            </AnimatePresence>
          )}
        </div>

        <h3
          className={`col-span-6 lg:col-span-6 text-left  4k:text-[3vw] 3k:text-[clamp(20px,_3vw,_40px)] mobile-landscape:text-[clamp(18px,_3vw,_30px)] md:portrait:text-[clamp(20px,_2vw,_38px)]  2xl:text-[clamp(18px,_1.5vw,_30px)] xl:text-[clamp(20px,_2vw,_36px)] lg:text-[clamp(16px,_2.2vw,_40px)] text-[clamp(18px,_3vw,_38px)]`}
        >
          {title}
        </h3>
        <div className="col-span-2 lg:col-span-1 justify-items-end">
          <button className="   bg-bgBlue flex-shrink-0 rounded-full w-[45px] h-[45px] lg:w-[45px] lg:h-[45px]  flex justify-center items-center ">
            <IoIosArrowRoundForward
              className={`text-white text-2xl lg:text-3xl transition-all duration-500 ${
                isOpen ? "rotate-45" : "rotate-0"
              }`}
            />
          </button>
        </div>
      </button>
      <div className="grid grid-cols-1 mobile-landscape:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 ">
        <div className="mobile-landscape:col-start-2 mobile-landscape:col-span-2 md:col-start-2 md:col-span-2">
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="overflow-hidden"
              >
                <div className="py-6 bg-white space-y-4">
                  <p className={`${textStyle}`}>{content}</p>
                </div>
                <Image
                  src={image}
                  alt="hello"
                  height={1500}
                  width={200}
                  className="w-full object-cover aspect-video rounded-xl"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default AccordionItem;
