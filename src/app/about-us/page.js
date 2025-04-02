import Header from "@/components/layout/Header";
import AboutBanner from "@/components/medium/AboutBanner";
import AboutDifference from "@/components/medium/AboutDifference";
import AboutHelpOthers from "@/components/medium/AboutHelpOthers";
import AboutMissionBanner from "@/components/medium/AboutMissionBanner";
import AboutWhoWeAre from "@/components/medium/AboutWhoWeAre";

const AboutusPage = () => {
  return (
    <>
      <Header />
      <AboutBanner />
      <AboutWhoWeAre />
      <AboutMissionBanner />
      <AboutHelpOthers />
      <AboutDifference />
    </>
  );
};

export default AboutusPage;
