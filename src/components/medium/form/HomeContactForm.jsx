'use client';
import TransparentButton from '@/components/small/TransparentButton';
import { pTextStyle } from '@/style/common';

function HomeContactForm() {
    const inputContainerStyle = `flex flex-col gap-2 border-b-2 my-7 md:my-5 border-gray-100`;
    const inputStyle = `outline-none px-1 h-[35px] xl:h-[2.5vw]`;
    return (
        <form action="" className="pt-5 w-full order-last xl:col-span-3">
            <div
                className={`flex flex-col gap-2 border-b-2 my-7 md:my-5 border-gray-100`}
            >
                <label htmlFor="" className={`font-semibold ${pTextStyle}`}>
                    Full Name
                </label>
                <input
                    type="text"
                    className={`outline-none px-1 h-[35px] xl:h-[2.5vw]`}
                />
            </div>
            <div
                className={`flex flex-col gap-2 border-b-2 my-7 md:my-5 border-gray-100`}
            >
                <label htmlFor="" className={`font-semibold ${pTextStyle}`}>
                    Telephone
                </label>
                <input
                    type="text"
                    className={`outline-none px-1 h-[35px] xl:h-[2.5vw]`}
                />
            </div>
            <div
                className={`flex flex-col gap-2 border-b-2 my-7 md:my-5 border-gray-100`}
            >
                <label htmlFor="" className={`font-semibold ${pTextStyle}`}>
                    Email
                </label>
                <input
                    type="text"
                    className={`outline-none px-1 h-[35px] xl:h-[2.5vw]`}
                />
            </div>
            <div className="flex justify-center mt-10 md:mt-7 mobile-landscape:mt-7 xl:mt-10">
                <TransparentButton label={'Contact USFJ'} handler={() => {}} />
            </div>
        </form>
    );
}

export default HomeContactForm;
