import React from "react";
import Channels from "./Left/Channels";
import GeneralChats from "./Left/GeneralChats";
import Counselling from "./Left/Counselling";
import PrayerGroups from "./Left/PrayerGroups";
import DirectMessages from "./Left/DirectMessages";

const LeftSideBar = () => {
  return (
    <div>
      <Channels />
      <GeneralChats />
      <Counselling />
      <PrayerGroups />
      <DirectMessages />
    </div>
  );
};

export default LeftSideBar;
