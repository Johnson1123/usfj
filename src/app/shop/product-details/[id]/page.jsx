'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import ShopBanner from '@/components/medium/ShopBanner';
import Banner from '@/components/shop/Banner';
import ProductDetails from '@/components/shop/ProductDetails';
import { TopProductsSection } from '@/components/shop/TopProductSlider';
// import React, { use } from 'react';
// import { useRouter } from 'next/navigation';
import { use } from 'react';

function page({ params }) {
    const { id } = use(params);

    return (
        <>
            <Header />
            <ShopBanner />
            <ProductDetails id={id} />
            <TopProductsSection />
            <Banner />
            <Footer />
        </>
    );
}

export default page;
