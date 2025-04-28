import Container from '@/components/layout/Container';
import React from 'react';
import Form from './Form';
import Image from 'next/image';

function ContactSectionMain() {
    return (
        <div className="bg-bgBlue py-32 xl:min-h-[100vh]  flex items-center">
            <div className="relative left-0 top-0">
                <div className="w-full h-full absolute left-0 top-0 flex items-center justify-center">
                    <div className="absolute w-[55%]">
                        <div className="relative">
                            <Image
                                height={200}
                                width={200}
                                loading="lazy"
                                src="/images/home-contact-us.png"
                                className="z-10 w-full"
                                alt="section-bg-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <Container>
                        <div className="grid grid-cols-1 xl:mx-auto mobile-landscape:grid-cols-2 md:grid-cols-2 xl:grid-cols-5  md:gap-[10vw] md:items-center mobile-landscape:items-center md-landscape:items-center">
                            <div className="xl:col-start-1 xl:col-end-3">
                                <h2 className={`headingStyle !text-white`}>
                                    Contact Us Today
                                </h2>
                                <p className={`pTextStyle !text-white mt-3`}>
                                    Join us on this journey to make a meaningful
                                    impact in our community and beyond.
                                </p>
                            </div>

                            {/* Form section */}
                            <Form />

                            {/* end of Form section */}
                        </div>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default ContactSectionMain;
