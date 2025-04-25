"use client";
import Header from "@/components/layout/Header";
import ShopBanner from "@/components/medium/ShopBanner";
import Banner from "@/components/shop/Banner";
import ProductDetails from "@/components/shop/ProductDetails";
import { TopProductsSection } from "@/components/shop/TopProductSlider";
import React from "react";

function page() {
  return (
    <>
      <Header />
      <ShopBanner />
      <ProductDetails />
      <TopProductsSection />
      <Banner />
    </>
  );
}

export default page;
