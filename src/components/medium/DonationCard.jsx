import Image from "next/image";
import Link from "next/link";
import React from "react";

const DonationCard = ({ data }) => {
  const { id, img, title } = data;

  return (
    <Link href={`/dashboard/projects/${id}`} passHref>
      <div className="relative cursor-pointer">
        <div>
          <Image src={img} width={483} height={333} alt={title} />
        </div>
        <div className="absolute bottom-8 w-[358px] ml-6">
          <h1 className="text-[30px] font-semibold text-white">{title}</h1>
        </div>
      </div>
    </Link>
  );
};

export default DonationCard;
