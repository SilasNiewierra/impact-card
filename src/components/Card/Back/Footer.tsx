import React from "react";
import { AudienceOwner, Sponsor, TabItem } from "../../../utils/types";
import { shadeColor } from "../../../utils/colorHelper";
import DetailButton from "./DetailButton";

interface Props {
  currentTab: TabItem;
  color: string;
  audienceOwner: AudienceOwner;
  sponsor: Sponsor;
}

const Footer: React.FC<Props> = ({
  currentTab,
  color,
  audienceOwner,
  sponsor,
}) => {
  return (
    <div
      className="px-2 py-2 flex items-center justify-end"
      style={{
        backgroundColor: shadeColor(color, -10),
      }}
    >
      {currentTab?.label === "Project" && (
        <DetailButton
          buttonText="Project Details"
          detailsUrl={audienceOwner.detailsUrl}
        />
      )}
      {currentTab?.label === "Sponsor" && (
        <DetailButton
          buttonText="Sponsor Details"
          detailsUrl={sponsor.detailsUrl}
        />
      )}
    </div>
  );
};

export default Footer;
