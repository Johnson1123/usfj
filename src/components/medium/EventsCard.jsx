"use client"
import Image from "next/image";
import React, { useState } from "react";
import EventsModal from "../modals/EventsModal"; // Import the modal component

const EventsCard = ({ event }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="w-full h-[347px] rounded-[22px] bg-white cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={event.image}
          width={367}
          height={179}
          objectFit="fill"
          layout="contain"
        />
        <div className="p-5 space-y-3">
          <h1 className="text-[21px] font-semibold">{event.name}</h1>
          <h4>{event.date}</h4>
          <h2 className="text-[19.21px] font-medium text-[#7041CE]">
            {event.members} Members
          </h2>
        </div>
      </div>

      {isOpen && <EventsModal event={event} onClose={() => setIsOpen(false)} />}
    </>
  );
};

export default EventsCard;
