import Header from "@/components/layout/Header";
import Banner from "@/components/medium/Banner";
import CommunityBanner from "@/components/medium/CommunityBanner";
import FaithDrivenSection from "@/components/medium/FaithDrivenSection";
import HowCommunity from "@/components/medium/HowCommunity";
import WhyCommunity from "@/components/medium/WhyCommunity";
import React from "react";

const CommunityPage = () => {
  return (
    <div>
      <Header />
      <CommunityBanner />
      <FaithDrivenSection />
      <WhyCommunity />
      <HowCommunity />

      <Banner
        text="Whether you’re looking for mentorship, spiritual growth, or a place to belong, United Servants for Jesus welcomes you with open arms. "
        title="Be Part of Something Bigger"
        btnText="Join Our Community"
      />
    </div>
  );
};

export default CommunityPage;
