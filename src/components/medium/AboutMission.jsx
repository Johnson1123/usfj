import React from 'react';
import Container from '../layout/Container';
import Image from 'next/image';

function AboutMission() {
    return (
        <Container>
            <div
                className={`w-full mx-auto mobile-landscape:py-10 py-16 3k:py-[15vh] gap-5 mt-16`}
            >
                {/*Inner container */}
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-[5vw] md:gap-[10vw] mobile-landscape:grid-cols-2 items-center">
                    {/* first/content box */}
                    <div className="col-span-1">
                        {/* title box */}
                        <div className="border-l-[10px] border-bgOrange  w-full py-2">
                            <div className="flex items-center justify-center w-full gap-2 py-[2px]">
                                <span className="w-5 h-[1px] bg-bgBlue"></span>
                                <p className="text-bgBlue text-sm font-bold">
                                    Who we are
                                </p>
                                <span className="w-5 h-[1px] bg-bgBlue"></span>
                            </div>
                            <h2 className="text-center font-bold headingStyle">
                                Our Mission
                            </h2>
                        </div>

                        <p className="text__ mt-3 py-3 pTextStyle">
                            Our mission is to serve Jesus by serving others,
                            with a focus on empowering young adults. We provide
                            a safe, nurturing environment where they can grow in
                            faith, develop essential life skills, and build the
                            foundations for a successful, independent future.
                            Through mentorship, community engagement, and
                            spiritual guidance, we strive to create lasting
                            change in the lives of those we serve.
                        </p>
                    </div>

                    {/* second/image box */}
                    <div className="w-full mt-10 md:mt-0 col-span-1 md:grid-cols-3 hidden md:block">
                        <Image
                            src="/images/Join-us-Img.webp"
                            alt="USFJ executives team"
                            height={1358}
                            width={1358}
                            className="h-[350px] md:w-full md:h-auto object-cover rounded-3xl w-auto aspect-square"
                            sizes=""
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutMission;
