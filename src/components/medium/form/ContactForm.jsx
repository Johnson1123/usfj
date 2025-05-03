'use client';
import {
    h3HeadingStyle,
    pTextStyle,
    subTitleStyle,
    textStyle,
} from '@/style/common';

import OtherButton from '@/components/small/OtherButton';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isLoading },
        reset,
    } = useForm();
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    const sendEmail = async (data) => {
        setLoading(true);
        try {
            const response = await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            setResult(result);
            if (result.success) {
                reset(); // Reset form on success
            }
        } catch (err) {
            setResult({ error: err.message });
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = (data) => {
        sendEmail(data);
    };

    const inputContainerStyle = `flex flex-col my-5 gap-2`;
    const inputInnerContainerStyle = ` flex flex-col gap-2 border-b-2 border-[#8D8D8D]`;
    const inputStyle = `outline-none px-1 h-[45px] xl:h-[2.5vw] text-[1rem]`;
    return (
        <form
            action=""
            className="py-16 w-full order-last xl:col-span-3"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div className="grid grid-cols-1 gap-2 mobile-landscape:grid-cols-2 mobile-landscape:gap-10 md:grid-cols-2 md:gap-10 xl:my-[1vw]">
                <div className={`${inputContainerStyle}`}>
                    <div className={`${inputInnerContainerStyle}`}>
                        <label
                            htmlFor=""
                            className={`font-bold ${subTitleStyle}`}
                        >
                            First Name
                        </label>
                        <input
                            type="text"
                            {...register('firstName', { required: true })}
                            className={`${inputStyle}`}
                        />
                    </div>
                    {errors.firstName && (
                        <span className="text-sm text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
                <div className={`${inputContainerStyle}`}>
                    <label htmlFor="" className={`font-bold ${subTitleStyle}`}>
                        Last Name
                    </label>
                    <input
                        type="text"
                        {...register('lastName', { required: true })}
                        className={`${inputStyle}`}
                    />
                    {errors.lastName && (
                        <span className="text-sm text-red-500">
                            This field is required
                        </span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2 mobile-landscape:grid-cols-2 mobile-landscape:gap-10 md:grid-cols-2 md:gap-10 xl:my-[1vw]">
                <div className={`${inputContainerStyle}`}>
                    <div className={`${inputInnerContainerStyle}`}>
                        <label htmlFor="" className={`font-bold ${pTextStyle}`}>
                            Email
                        </label>
                        <input
                            type="email"
                            {...register('email', {
                                required: true,
                                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            })}
                            className={`${inputStyle}`}
                        />
                    </div>
                    {errors.email && (
                        <span className="text-sm text-red-500">
                            Input valid email
                        </span>
                    )}
                </div>
                <div className={`${inputContainerStyle}`}>
                    <div className={`${inputInnerContainerStyle}`}>
                        <label htmlFor="" className={`font-bold ${pTextStyle}`}>
                            Phone Number
                        </label>
                        <input
                            type="text"
                            {...register('phoneNumber', {
                                required: true,
                                pattern: /^\d+$/,
                            })}
                            className={`${inputStyle}`}
                        />
                    </div>
                    {errors.phoneNumber && (
                        <span className="text-sm text-red-500">
                            Input a valid phone number
                        </span>
                    )}
                </div>
            </div>
            <div className="mt-7 xl:my-[2vw]">
                <p className={`${pTextStyle} font-bold`}>Select Subject</p>
                <div className="my-3 flex flex-col gap-4 mt-5 mobile-landscape:flex-row mobile-landscape:gap-10 md:flex-row md:gap-10">
                    <div className="flex gap-3 items-center">
                        <input
                            type="radio"
                            {...register('subject', { required: true })}
                            size={30}
                        />
                        <label htmlFor="" className={`${textStyle}`}>
                            General Inquiry
                        </label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input
                            type="radio"
                            {...register('subject', { required: true })}
                            size={30}
                        />
                        <label htmlFor="" className={`${textStyle}`}>
                            Donation
                        </label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input
                            type="radio"
                            {...register('subject', { required: true })}
                            size={30}
                        />
                        <label htmlFor="Message" className={`${textStyle}`}>
                            Our Causes
                        </label>
                    </div>
                    {errors.subject && (
                        <span className="text-sm text-red-500">
                            Select Subject
                        </span>
                    )}
                </div>
            </div>
            <div className="mt-7">
                <div className="flex flex-col gap-2 border-b-2 border-bgBlue">
                    <label htmlFor="" className={`font-bold ${subTitleStyle}`}>
                        Message
                    </label>
                    <textarea
                        cols={7}
                        rows={4}
                        {...register('message', { required: true })}
                        className="border-none outline-none"
                    ></textarea>
                </div>
                {errors.message && (
                    <span className="text-sm text-red-500">
                        This field is required
                    </span>
                )}
            </div>
            <div className="flex justify-end mt-10">
                <OtherButton
                    label={isLoading ? 'Sending...' : 'Send Message'}
                    handler={handleSubmit(onSubmit)}
                />
            </div>
        </form>
    );
}

export default ContactForm;
