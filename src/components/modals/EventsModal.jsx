import Image from "next/image";
import React from "react";

const EventsModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white p-[40px] rounded-lg w-[600px] flex flex-col gap-4 shadow-lg relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-gray-500"
          onClick={onClose}
        >
          ✖
        </button>

        <div>
          <h2 className="text-center font-bold  text-[32px] ">{event.name}</h2>
        </div>

        <div className="w-[500px] h-auto flex items-center border mb-8 ">
          <Image
            src={event.image}
            width={400}
            height={168}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
        {/* Event Image */}

        <div>
          <p className="text-sm text-gray-400">Description</p>
          <p className="">
            {event.description
              ? event.description
              : "No description available."}
          </p>
        </div>

        {/* Event Details */}
        <div className="mt-4 space-y-6">
          <div>
            <p className="text-sm text-gray-400">Location</p>
            <p className="">{event.location}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Date</p>
            <p className="">{event.date}</p>
          </div>
          <div>
            <p className="text-sm text-gray-400">Time</p>
            <p className="">{event.time}</p>
          </div>
          <div className="">
            <p className="text-sm text-gray-400 ">Meeting link</p>
            <p className="">{event.link}</p>
          </div>

          {/* Action Buttons */}
          <div className="w-full flex flex-col gap-[16px] ">
            <button className="w-full bg-bgBlue text-white px-4 py-2 rounded-full">
              Join Session
            </button>
            <button className="w-full bg-white border border-[#FC0000] text-[#FC0000] px-4 py-2 rounded-full font-semibold">
              Delete event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsModal;
