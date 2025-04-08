"use client";
import { Herosection } from "@/components/Homepage/Herosection/Herosection";
import { Donationsection } from "@/components/Homepage/Aboutsection/Donationsection";
import { WhatWeOffersection } from "@/components/Homepage/WhatWeOffersection/WhatWeOffersection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { Objectivesection } from "@/components/Homepage/Objectivesection/Objectivesection";
import { Whatwedosection } from "@/components/Homepage/Whatwedosection/Whatwedosection";
import { SupportiveHousing } from "@/components/Homepage/SupportiveHousing/SupportiveHousing";
import ContactSectionMain from "@/components/Homepage/ContactSection/ContactSectionMain";
import FAQQuestion from "@/components/Homepage/Faq/Main";
import InsightSection from "@/components/Homepage/InsightAndInpiration/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Herosection />
      <Donationsection />
      <WhatWeOffersection />
      <Objectivesection />
      {/* <Whatwedosection /> */}
      {/* <SupportiveHousing /> */}
      <InsightSection />
      <ContactSectionMain />
      <FAQQuestion />
      <Footer />
    </>
  );
}
