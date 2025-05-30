import { helpOthers } from '@/constant/data';
import {
    headingStyle,
    pTextStyle,
    sectionTitleTextStyle,
    textStyle,
} from '@/style/common';
import React from 'react';
import AboutHelpBox from '../small/AboutHelpBox';
import Container from '../layout/Container';

function AboutHelpOthers() {
    return (
        <Container>
            <div className=" py-16 3k:py-[15vh] mx-auto">
                <div className="grid lg:grid-cols-2 lg:gap-[7vw]">
                    <h3 className={`headingStyle text-bgBlue`}>
                        Help others with your{' '}
                        <span className="text-primary">Substance</span>
                    </h3>
                    <p className={`pTextStyle my-8`}>
                        There are many ways you can get involved with United
                        Servants for Jesus and help us make a lasting impact in
                        the lives of young adults in Kentucky.
                    </p>
                </div>
                <div className="grid grid-cols-1 mobile-landscape:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 3k:gap-[1.5vw] xl:mt-[10vh]">
                    {helpOthers.map((item, index) => {
                        return <AboutHelpBox {...item} key={index} />;
                    })}
                </div>
            </div>
        </Container>
    );
}

export default AboutHelpOthers;
