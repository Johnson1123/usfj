import React from "react";
import MembersList from "../Sidebars/Right/MembersList";
import MemberDetails from "../Sidebars/Right/MemberDetails";

const RightSidebar = ({ selectedMember, onSelectMember }) => {
  return (
    <div className="h-full">
      {selectedMember ? (
        <MemberDetails
          member={selectedMember}
          onClose={() => onSelectMember(null)}
        />
      ) : (
        <MembersList onSelectMember={onSelectMember} />
      )}
    </div>
  );
};

export default RightSidebar;
