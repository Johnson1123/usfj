import React from 'react';
import { footer } from '@/constant/footer';
import FooterBox from '../medium/FooterBox';
import FooterContact from '../medium/FooterContact';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="w-full flex bg-bgBlue flex-col items-center">
            <div className="flex flex-col items-center w-full">
                {/* footer logo */}

                <div className="w-full bg-bgWhite flex justify-center items-center py-5">
                    <div className="w-[32%] md:w-[25%] lg:w-[13%]">
                        <img
                            src="/images/USFJ-DARK-Logo.png"
                            alt="logo"
                            className="w-full"
                        />
                    </div>
                </div>

                {/* footer links */}

                <div className="w-full bg-bgBlue flex justify-center flex-col pt-16 md:pt-10 pb-3">
                    <div className="w-[90%] mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <FooterBox data={footer.useFul} />
                        <FooterBox data={footer.ourCauses} />

                        <FooterBox data={footer.socialMedia} />

                        <FooterContact data={footer.contactInfo} />
                    </div>

                    {/* designed company */}
                    <div className="w-[90%] md:w-[90%] lg:w-[80%] mx-auto pt-4 pb-2 text-white text-center flex items-center gap-1.5 justify-center mt-10">
                        <p className="font-primary">
                            &copy; Allrights reserved.
                        </p>
                        <div className="h-[20px] w-[3px] bg-bgOrange"></div>
                        <Link
                            href={'https://kaltechconsultancy.tech/'}
                            className="font-primary"
                        >
                            Designed by Kaltech Consultancy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
