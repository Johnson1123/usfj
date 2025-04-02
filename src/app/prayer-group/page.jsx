import Header from "@/components/layout/Header";
import PrayGroupBanner from "@/components/medium/PrayGroupBanner";
import GetInvolved from "@/components/prayergroup/GetInvolved";
import JoinGroup from "@/components/prayergroup/JoinGroup";
import PrayerBanner from "@/components/prayergroup/PrayerBanner";

const PrayerGroupPage = () => {
  return (
    <>
      <Header />
      <PrayGroupBanner />
      <JoinGroup />
      <GetInvolved />
      <PrayerBanner />
    </>
  );
};

export default PrayerGroupPage;
