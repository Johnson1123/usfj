'use client';
import {
    h3HeadingStyle,
    pTextStyle,
    subTitleStyle,
    textStyle,
} from '@/style/common';

import OtherButton from '@/components/small/OtherButton';
import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });
    const [result, setResult] = useState({});
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const sendEmail = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/emails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            setResult(data);
        } catch (err) {
            setResult({ error: err.message });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail();
    };

    const inputContainerStyle = `flex flex-col gap-2 border-b-2 my-5 border-[#8D8D8D]`;
    const inputStyle = `outline-none px-1 py-1 h-[45px] xl:h-[2.5vw] text-[1vw]`;

    return (
        <form
            className="py-16 w-full order-last xl:col-span-3"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-2 mobile-landscape:grid-cols-2 mobile-landscape:gap-10 md:grid-cols-2 md:gap-10 xl:my-[1vw]">
                <div className={`${inputContainerStyle}`}>
                    <label
                        htmlFor="firstName"
                        className={`font-bold ${subTitleStyle}`}
                    >
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        required
                    />
                </div>
                <div className={`${inputContainerStyle}`}>
                    <label
                        htmlFor="lastName"
                        className={`font-bold ${subTitleStyle}`}
                    >
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        required
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 gap-2 mobile-landscape:grid-cols-2 mobile-landscape:gap-10 md:grid-cols-2 md:gap-10 xl:my-[1vw]">
                <div className={`${inputContainerStyle}`}>
                    <label
                        htmlFor="email"
                        className={`font-bold ${pTextStyle}`}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        required
                    />
                </div>
                <div className={`${inputContainerStyle}`}>
                    <label
                        htmlFor="phone"
                        className={`font-bold ${pTextStyle}`}
                    >
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${inputStyle}`}
                        required
                    />
                </div>
            </div>
            <div className="mt-7 xl:my-[2vw]">
                <p className={`${pTextStyle} font-bold`}>Select Subject</p>
                <div className="my-3 flex flex-col gap-4 mt-5 mobile-landscape:flex-row mobile-landscape:gap-10 md:flex-row md:gap-10">
                    <div className="flex gap-3 items-center">
                        <input
                            type="radio"
                            name="subject"
                            value="General Inquiry"
                            checked={formData.subject === 'General Inquiry'}
                            onChange={handleChange}
                        />
                        <label className={`${textStyle}`}>
                            General Inquiry
                        </label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input
                            type="radio"
                            name="subject"
                            value="Donation"
                            checked={formData.subject === 'Donation'}
                            onChange={handleChange}
                        />
                        <label className={`${textStyle}`}>Donation</label>
                    </div>
                    <div className="flex gap-3 items-center">
                        <input
                            type="radio"
                            name="subject"
                            value="Our Causes"
                            checked={formData.subject === 'Our Causes'}
                            onChange={handleChange}
                        />
                        <label className={`${textStyle}`}>Our Causes</label>
                    </div>
                </div>
            </div>
            <div className="mt-7">
                <div className="flex flex-col gap-2 border-b-2 border-bgBlue">
                    <label
                        htmlFor="message"
                        className={`font-bold ${subTitleStyle}`}
                    >
                        Message
                    </label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        cols={7}
                        rows={2}
                        className="border-none outline-none"
                        required
                    ></textarea>
                </div>
            </div>
            <div className="flex justify-end mt-10">
                <OtherButton
                    label={loading ? 'Sending...' : 'Send Message'}
                    handler={() => {}}
                    disabled={loading}
                />
            </div>
        </form>
    );
}

export default ContactForm;
