'use client';
import Header from '@/components/layout/Header';
import ShopBanner from '@/components/medium/ShopBanner';
import ShpCategories from '@/components/medium/ShpCategories';
import StorySection from '@/components/shop/Story';
import { TopProductsSection } from '@/components/shop/TopProductSlider';
import InsightSection from '@/components/Homepage/InsightAndInpiration/Main';
import React from 'react';
import Banner from '@/components/shop/Banner';
import ReviewsSection from '@/components/shop/Reviews';
import Footer from '@/components/layout/Footer';
import { ToastContainer } from 'react-toastify';

function page() {
    return (
        <>
            <Header />
            <ShopBanner />
            <ShpCategories />
            <TopProductsSection />
            <StorySection />
            <ReviewsSection />
            <InsightSection />
            <Banner />
            <Footer />
            <ToastContainer />
        </>
    );
}

export default page;
