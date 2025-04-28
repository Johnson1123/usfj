import Image from 'next/image';
import React from 'react';
import WhiteBgBtn from '../small/WhiteBgBtn';
import Container from '../layout/Container';

function Banner() {
    return (
        <section className="h-[100vh] w-full flex justify-center items-center relative left-0 right-0 overflow-hidden">
            <Image
                src={'/cap.png'}
                alt="mission banner image"
                fill={true}
                objectFit="cover"
            />
            <div className="absolute opacity-30 h-full w-full left-0 top-0 bg-black"></div>

            <Container>
                <div className="absolute grid grid-cols-10 lg:w-[80%]">
                    <div className="col-start-2 col-end-10 md:col-start-1  md:col-end-9 xl:col-start-1 xl:col-end-6 flex flex-col gap-7 mx-auto">
                        <h3 className={`font-bold headingStyle !text-white`}>
                            Be Part of <br />
                            Something Bigger
                        </h3>
                        <p
                            className={`pTextStyle !text-white`}
                            style={{ textShadow: '0px 1px 0 #fff' }}
                        >
                            Whether you’re looking for mentorship, spiritual
                            growth, or a place to belong, United Servants for
                            Jesus welcomes you with open arms.
                        </p>
                        <WhiteBgBtn label="Join USFJ" />
                    </div>
                </div>
            </Container>
        </section>
    );
}

export default Banner;
