import {
    h3HeadingStyle,
    pTextStyle,
    sectionTitleTextStyle,
    textStyle,
} from '@/style/common';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import React from 'react';

function ContactFormCard() {
    return (
        <div className="bg-bgBlue rounded-xl min-h-[60vh] mobile-landscape:min-h-[600px] md:min-h-[55vh] px-5 3k:px-10 py-10 3k:py-16 relative overflow-hidden xl:col-span-2 lg:h-[60vh] xl:h-[75vh] 2xl:h-[85vh] 3k:h-[70vh]">
            <h3 className={`h3HeadingStyle !text-white`}>
                Get in Touch With Us Today!
            </h3>
            <p className={`pTextStyle mt-10 xl:mt-8  !text-white`}>
                Feel free to reach out using the contact information below or by
                filling out our contact form. We’ll get back to you as soon as
                possible!
            </p>
            <div className="mt-10 xl:mt-16 flex flex-col gap-4">
                <div className="flex gap-3 xl:gap-5 items-center">
                    <BiSolidPhoneCall className="text-white text-[20px] 3k:text-[25px]" />
                    <p className={`!text-white pTextStyle`}>+1(501) 3456 789</p>
                </div>
                <div className="flex gap-3 xl:gap-5 items-center">
                    <MdEmail className="text-white text-[20px] 3k:text-[25px]" />
                    <p className={`!text-white pTextStyle`}>
                        Info@usfjesus.org
                    </p>
                </div>
                <div className="flex gap-3 xl:gap-5 items-center">
                    <IoLocationSharp className="text-white text-[20px] 3k:text-[25px]" />
                    <p className={`!text-white pTextStyle`}>
                        1100 Ring Road, Elizabeth town USA
                    </p>
                </div>
            </div>

            <div className="flex gap-3 absolute bottom-10 left-5">
                <div className="mediumCircle  bg-bgOrange rounded-full hover:bg-white group transition-all duration-100">
                    <FaFacebook className="text-white text-xl 3k:text-2xl group-hover:text-black" />
                </div>
                <div className="mediumCircle bg-bgOrange rounded-full hover:bg-white  group transition-all duration-100">
                    <FaTwitter className="text-white text-xl 3k:text-2xl group-hover:text-black" />
                </div>
                <div className="mediumCircle bg-bgOrange rounded-full hover:bg-white group transition-all duration-100">
                    <FaInstagram className="text-white text-xl 3k:text-2xl group-hover:text-black" />
                </div>
            </div>

            {/* circle dot */}
            <div className="absolute -bottom-5 -right-5">
                <div className="relative">
                    <div className="h-[220px] w-[220px] rounded-full bg-[#f5f5f5]/10 absolute -bottom-16 -right-16"></div>
                    <div className="h-[100px] w-[100px] rounded-full bg-[#f5f5f5]/10 absolute bottom-20 right-16"></div>
                </div>
            </div>
        </div>
    );
}

export default ContactFormCard;
