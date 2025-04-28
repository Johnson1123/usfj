import Header from '@/components/layout/Header';
import ShopBanner from '@/components/medium/ShopBanner';
import FilterProductCard from '@/components/shop/FilterProductCard';
import FIlterProductContainer from '@/components/shop/FIlterProductContainer';
import React from 'react';

function page() {
    return (
        <>
            <Header />
            <ShopBanner />

            <FIlterProductContainer />
        </>
    );
}

export default page;
