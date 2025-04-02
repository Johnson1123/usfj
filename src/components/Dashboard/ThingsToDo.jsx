import { tasks } from "@/constant/data";
import Link from "next/link";
import React from "react";

const ThingsToDo = () => {
  return (
    <div className="w-full mx-auto">
      <h2 className="text-[18px] font-bold mb-4">Things to do</h2>

      <ul className="relative">
        {tasks.map((task, index) => (
          <li
            key={index}
            // If active, add a light-blue background
            className={`relative pl-10 py-4 border-l-2 border-dashed border-gray-300 ${
              task.active ? "border-l-2 border-dashed border-bgBlue/80" : ""
            } `}
          >
            {/* Circle indicator */}
            <span
              className={`absolute left-[-7px] top-6 w-3 h-3 rounded-full ${
                task.active ? "bg-bgBlue" : "bg-gray-300"
              }`}
            ></span>

            {/* Task Content */}
            <div
              className={`flex items-start justify-between  p-6  ${
                task.active
                  ? "bg-bgBlue/15 border-b-0 border-l-4 border-bgBlue rounded-e-md"
                  : "border-b-2 border-[#E8E8E8] "
              } `}
            >
              <div className="pr-4">
                <h3 className="text-base font-medium mb-1">{task.title}</h3>
                <p className="text-sm text-[#484848] ">{task.description}</p>
              </div>
              <div className="whitespace-nowrap text-sm font-semibold text-[#84818A] mt-1">
                {task.date}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Link
        href={"/dashboard/things-to-do"}
        className="mt-6 text-center  flex justify-center"
      >
        <button className=" text-sm font-medium flex items-center gap-1 hover:underline">
          View All Things to do
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M12.293 9.293a1 1 0 011.414 0l4 4c.37.37.37.97 0 1.34l-4 4a1 1 0 01-1.414-1.414L14.586 14H3a1 1 0 010-2h11.586l-2.293-2.293a1 1 0 010-1.414l1.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default ThingsToDo;
