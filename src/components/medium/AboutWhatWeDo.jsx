'use client';
import React, { useState } from 'react';
import AboutWhoWeAreBtn from '../small/AboutWhoWeAreBtn';
import AboutMissionContainer from './AboutMissionContainer';
import { mission, whatwedo } from '@/constant/data';
import Container from '../layout/Container';
import { headingStyle, sectionTitleTextStyle } from '@/style/common';

function AboutWhatWeDo() {
    const [steps, setSteps] = useState(1);
    return (
        <Container>
            <div
                className={`w-full grid md:grid-cols-2 mx-auto xl:gap-[7vw] min-h-[100vh] py-16 3k:py-[15vh] gap-5`}
            >
                <div className="col-start-1 col-end-2 w-full">
                    <h3
                        className={`headingStyle font-bold mobile-landscape:text-[5vw] `}
                    >
                        What We <span className={`text-primary`}>Do</span>
                    </h3>
                    <div className="">
                        <AboutWhoWeAreBtn
                            label={'Spiritual Guidance & Mentorship'}
                            steps={steps}
                            setSteps={setSteps}
                            active={1}
                        />
                        {steps == 1 && (
                            <AboutMissionContainer
                                content={whatwedo[0]}
                                hide={true}
                            />
                        )}
                        {/* Life Skills btn */}
                        <AboutWhoWeAreBtn
                            label={'Life Skills'}
                            steps={steps}
                            setSteps={setSteps}
                            active={2}
                        />
                        {steps == 2 && (
                            <AboutMissionContainer
                                content={whatwedo[1]}
                                hide={true}
                            />
                        )}

                        {/* Supportive Housing btn */}
                        <AboutWhoWeAreBtn
                            label={'Supportive Housing'}
                            steps={steps}
                            setSteps={setSteps}
                            active={3}
                        />
                        {steps == 3 && (
                            <AboutMissionContainer
                                content={whatwedo[2]}
                                hide={true}
                            />
                        )}

                        {/* Supportive Housing btn */}
                        <AboutWhoWeAreBtn
                            label={'Educational Support'}
                            steps={steps}
                            setSteps={setSteps}
                            active={4}
                        />
                        {steps == 4 && (
                            <AboutMissionContainer
                                content={whatwedo[3]}
                                hide={true}
                            />
                        )}

                        {/* Community Support& Volunteerism btn */}
                        <AboutWhoWeAreBtn
                            label={'Community Support& Volunteerism'}
                            steps={steps}
                            setSteps={setSteps}
                            active={5}
                        />
                        {steps == 5 && (
                            <AboutMissionContainer
                                content={whatwedo[4]}
                                hide={true}
                            />
                        )}

                        {/* Health and Wellness Support btn */}
                        <AboutWhoWeAreBtn
                            label={'Health and Wellness Support'}
                            steps={steps}
                            setSteps={setSteps}
                            active={6}
                        />
                        {steps == 6 && (
                            <AboutMissionContainer
                                content={whatwedo[5]}
                                hide={true}
                            />
                        )}

                        {/* Community Support& Volunteerism btn */}
                        <AboutWhoWeAreBtn
                            label={'Employment Assistance'}
                            steps={steps}
                            setSteps={setSteps}
                            active={7}
                        />
                        {steps == 7 && (
                            <AboutMissionContainer
                                content={whatwedo[6]}
                                hide={true}
                            />
                        )}
                    </div>
                </div>
                <div className="col-start-2 col-end-3 w-full hidden md:block">
                    {steps == 1 && (
                        <AboutMissionContainer content={whatwedo[0]} />
                    )}
                    {steps == 2 && (
                        <AboutMissionContainer content={whatwedo[1]} />
                    )}
                    {steps == 3 && (
                        <AboutMissionContainer content={whatwedo[2]} />
                    )}
                    {steps == 4 && (
                        <AboutMissionContainer content={whatwedo[3]} />
                    )}
                    {steps == 5 && (
                        <AboutMissionContainer content={whatwedo[4]} />
                    )}
                    {steps == 6 && (
                        <AboutMissionContainer content={whatwedo[5]} />
                    )}
                    {steps == 7 && (
                        <AboutMissionContainer content={whatwedo[6]} />
                    )}
                </div>
            </div>
        </Container>
    );
}

export default AboutWhatWeDo;
