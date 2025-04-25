'use client';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

function CategoriesOverlay({ name, link }) {
    return (
        <div className="absolute left-5 bottom-10 flex flex-col gap-2">
            <p className="pTextStyle !text-white !text-sm">Category</p>
            <h3 className="!text-white h3HeadingStyle">{name}</h3>

            <Link href={link} className="heroCircle bg-bgOrange">
                <IoIosArrowRoundForward className="text-white" />
            </Link>
        </div>
    );
}

export default CategoriesOverlay;
