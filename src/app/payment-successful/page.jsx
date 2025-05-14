'use client';
import PrimaryButton from '@/components/small/PrimaryBtn';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
// import congratulation from '../../../public/images/';
// import Lottie from 'lottie-react';

function page() {
    const route = useRouter();

    const handleNavigate = () => {
        route.push('/');
    };
    return (
        <div className="w-full h-[100dvh] flex-col flex justify-center items-center">
            {/* <div className="text-center">
                <Lottie options={lottieOptions} height={300} width={300} />
            </div> */}
            {/* <Lottie animationData={congratulation} loop={true} /> */}
            <Image src={'/payment-succesfful.png'} height={200} width={200} />
            <h1 className="text-bgBlue h3HeadingStyle">Payment Successful!</h1>
            <br />
            <p>
                Thank you for your payment. Your order has been successfully
                processed.
            </p>
            {/* <p>Order Details:</p>
            <ul>
                <li>Order ID: #12345</li>
                <li>Payment Method: Credit Card</li>
                <li>Total Amount: $100.00</li>
            </ul>
            <p>
                If you have any questions or concerns, please don't hesitate to
                contact us.
            </p> */}
            <br />
            <PrimaryButton label={'Back to home'} handler={handleNavigate} />
        </div>
    );
}

export default page;
