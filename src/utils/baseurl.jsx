'use client';
import { useState, useEffect } from 'react';

function useBaseurl() {
    const [url, setUrl] = useState('/');

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            setUrl('https://usfj-johnson.vercel.app/');
        } else if (process.env.NODE_ENV === 'development') {
            setUrl('http://localhost:3000/');
        }
    }, []);

    return url;
}

export default useBaseurl;
