import React from "react";
import "./Donationsection.css";
import Image from "next/image";
import { ArrowIconWhite } from "../../../../public/SVGs/AllSvgs";
import Link from "next/link";

const fakeData = [
  {
    name: "Buzz P",
    amount: "2,000",
    date: "31/01/2025",
  },
  {
    name: "Joshua M",
    amount: "300",
    date: "31/01/2025",
  },

  {
    name: "Mike D",
    amount: "900",
    date: "30/01/2025",
  },
  {
    name: "Dan F",
    amount: "1,800",
    date: "15/01/2025",
  },
  {
    name: "Felix Q",
    amount: "1,100",
    date: "12/01/2025",
  },
];

export const Donationsection = () => {
  return (
    <div className="relative min-h-[100dvh] flex justify-center items-center py-16">
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <Image
          fill={true}
          loading="lazy"
          src="/images/SectionBg.jpeg"
          className="object-cover opacity-30 w-full h-full"
          alt="section-bg-image"
        />
      </div>
      <div className="relative 2xl:w-[80%] xl:w-[80%] lg:w-[85%] 4k:w-[75%] 3k:w-[75%] md:portrait:w-[90%] w-[90%]">
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 4k:grid-cols-2 3k:grid-cols-2 md:portrait:grid-cols-1 2xl:gap-4 xl:gap-4 lg:gap-4 4k:gap-4 3k:gap-4 md:portrait:gap-2">
          <div className="2xl:p-5 xl:p-5 lg:p-5 4k:p-5 3k:p-5 md:portrait:p-2.5 2.5">
            <h2 className="2xl:text-[3.5vw] xl:text-[4vw] lg:text-[3vw] 4k:text-[3.5vw] 3k:text-[vw] md:portrait:text-[7vw] text-[10vw] leading-[12vw] font-[700] 2xl:leading-[4.5vw] xl:leading-[6vw] lg:leading-[6vw] 4k:leading-[6vw] 3k:leading-[6vw] md:portrait:leading-[8vw] text-bgBlue">
              Transforming Lives With Your Kind{" "}
              <span className="text-bgOrange">Generosity</span>
            </h2>
          </div>
          <div className="2xl:p-5 xl:p-5 lg:p-5 4k:p-5 3k:p-5 md:portrait:p-2.5 p-2.5 flex flex-col gap-16">
            <div className="bg-[#F7F9FF] p-6 rounded-lg flex flex-col justify-center items-center gap-5">
              <div className="flex justify-between items-center gap-4 w-full">
                <div className="2xl:max-w-[60%] xl:max-w-[60%] lg:max-w-[60%] 4k:max-w-[60%] 3k:max-w-[60%] md:portrait:max-w-[60%] max-w-[80%]">
                  <p className="text-[#101820] 2xl:text-[1.7vw] xl:text-[1.7vw] lg:text-[1.7vw] 4k:text-[1.7vw] 3k:text-[1.7vw] md:portrait:text-[3.3vw] text-[4.5vw] font-[500]">
                    Every Donation Brings New Hope
                  </p>
                </div>
                <button className="bg-bgBlue 2xl:h-[3vw] xl:h-[3vw] lg:h-[3vw] 4k:h-[3vw] 3k:h-[3vw] md:portrait:h-[5vw] h-[10vw] 2xl:w-[3vw] xl:w-[3vw] lg:w-[3vw] 4k:w-[3vw] 3k:w-[3vw] md:portrait:w-[5vw] w-[10vw] flex justify-center items-center rounded-full border-none outline-none">
                  <ArrowIconWhite />
                </button>
              </div>
              <div className="flex justify-around items-center w-full">
                <div>
                  <h4 className="2xl:text-[2vw] xl:text-[2vw] lg:text-[2vw] 4k:text-[2vw] 3k:text-[2vw] md:portrait:text-[4vw] text-[4.5vw] font-[800] text-[#101820]">
                    $120,930.90
                  </h4>
                </div>
                <div className="bg-bgOrange px-5 py-1.5 rounded-full">
                  <p className="text-white font-[500] 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] md:portrait:text-[2vw] 4k:text-[1.1vw] 3k:text-[1.1vw] text-[3vw]">
                    Funds Raised
                  </p>
                </div>
              </div>
              <div className="relative h-2 rounded-full w-full overflow-hidden bg-bgOrange/10 my-4">
                <div className="absolute top-0 left-0 w-[50%] rounded-full h-full bg-bgOrange" />
              </div>
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="font-[600] 2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] 4k:text-[1.2vw] 3k:text-[1.2vw] md:portrait:text-[2vw] text-[3vw] text-bgBlack">
                    <strong>710</strong> Donors
                  </p>
                </div>
                <div>
                  <p className="2xl:text-[1.2vw] xl:text-[1.2vw] lg:text-[1.2vw] 4k:text-[1.2vw] 3k:text-[1.2vw] md:portrait:text-[2vw] text-[3vw] font-[700] text-bgBlack">
                    75%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:portrait:flex-col 2xl:flex-row xl:flex-row lg:flex-row 4k:flex-row 3k:flex-row justify-between items-start w-full 2xl:gap-16 xl:gap-16 lg:gap-16 4k:gap-16 3k:gap-16 md:portrait:gap-6">
          <div className=" py-6 px-3 flex-1 w-full border-r-8 border-primary">
            <p className="font-secondaryFont font-[600] 2xl:text-[1.1vw] xl:text-[1.1vw] lg:text-[1.1vw] 4k:text-[1.1vw] 3k:text-[1.1vw] md:portrait:text-[2.5vw] text-[4vw] text-textColor">
              We are a Christ-centered organization dedicated to empowering
              young adults in Kentucky by providing spiritual guidance, life
              skills, and educational opportunities........{" "}
              <Link
                href="/"
                className="2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[2.4vw] text-[3.5vw] text-primary"
              >
                More Information
              </Link>{" "}
            </p>
          </div>
          <div className="bg-[#F7F9FF] flex-1 w-full 2xl:p-6 xl:p-6 lg:p-6 4k:p-6 3k:p-6 md:portrait:p-4 p-3 rounded-lg flex flex-col justify-center items-center gap-5">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-[#101820] 2xl:text-[1.7vw] xl:text-[1.7vw] lg:text-[1.7vw] 4k:text-[1.7vw] 3k:text-[1.7vw] md:portrait:text-[3.3vw] text-[4.5vw] font-[500]">
                Recent Donations
              </h3>
              <button className="bg-bgBlue 2xl:h-[3vw] xl:h-[3vw] lg:h-[3vw] 4k:h-[3vw] 3k:h-[3vw] md:portrait:h-[5vw] h-[10vw] 2xl:w-[3vw] xl:w-[3vw] lg:w-[3vw] 4k:w-[3vw] 3k:w-[3vw] md:portrait:w-[5vw] w-[10vw] flex justify-center items-center rounded-full border-none outline-none">
                <ArrowIconWhite />
              </button>
            </div>
            <div className="w-full rounded-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-bgBlue text-bgWhite">
                  <th className="py-3 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[2vw]  text-[3.5vw] font-[600] font-manFont">
                    Date
                  </th>
                  <th className="py-3 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[2vw]  text-[3.5vw] font-[600] font-manFont">
                    Name
                  </th>
                  <th className="py-3 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[2vw]  text-[3.5vw] font-[600] font-manFont">
                    Amount ($)
                  </th>
                </thead>
                <tbody className="w-full bg-bgWhite">
                  {fakeData.map((item, id) => (
                    <tr key={id} className="w-full">
                      <td className="text-center 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[1.9vw] text-[3.4vw] py-2 font-[500] font-secondaryFont">
                        {item.date}
                      </td>

                      <td className="text-center 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[1.9vw] text-[3.4vw] py-2 font-[500] font-secondaryFont">
                        {item.name}
                      </td>

                      <td className="text-center 2xl:text-[1vw] xl:text-[1vw] lg:text-[1vw] 4k:text-[1vw] 3k:text-[1vw] md:portrait:text-[1.9vw] text-[3.4vw] py-2 font-[500] font-secondaryFont">
                        {item.amount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
