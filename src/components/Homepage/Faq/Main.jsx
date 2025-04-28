import Container from '@/components/layout/Container';
import React from 'react';

import AccordionContainer from './AccordionContainer';
import { faqitem } from '@/constant/data';

function Main() {
    return (
        <div className="py-20 xl:min-h-[100vh] xl:py-[8rem] 3k:py-[20rem] xl:flex items-center">
            <Container>
                <div className="mx-auto">
                    <div className="grid grid-cols-10  gap-5 items-center">
                        <h2 className={`headingStyle col-span-8  `}>
                            Frequently Asked{' '}
                            <span className="text-primary">Questions</span>
                        </h2>
                    </div>
                    <AccordionContainer items={faqitem} />
                </div>
            </Container>
        </div>
    );
}

export default Main;
