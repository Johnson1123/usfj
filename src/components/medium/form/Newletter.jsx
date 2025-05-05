'use client';
import OtherButton from '@/components/small/OtherButton';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function NewletterForm() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const response = await fetch('/api/mailchimp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setEmail('');
                toast.success('Successfully subscribed!');
            } else {
                setStatus('error');
                toast.error('Failed to subscribe. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
            toast.error('Failed to subscribe. Please try again.');
        }
    };

    return (
        <div>
            <form
                action=""
                className="flex items-center gap-7 lg:gap-10 mx-auto w-max"
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                    className="py-2 px-3 rounded-[20px] w-[40vw] xl:w-[18vw] outline-none h-[45px] 3k:h-[2vw]"
                    required
                />

                <OtherButton
                    label={
                        status === 'loading' ? 'Subscribing...' : 'Subscribe'
                    }
                    handler={() => {}}
                />
            </form>
        </div>
    );
}

export default NewletterForm;
