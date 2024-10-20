import React, { useMemo, useState } from "react";
import Tabs from "../../Tab/Tabs";
import { CardProps, TabItem } from "../../../utils/types";
import Rewards from "./Rewards";
import Proofs from "./Proofs";
import Project from "./Project";
import Sponsor from "./Sponsor";
import { shadeColor } from "../../../utils/colorHelper";
import DetailButton from "./DetailButton";

interface Props {
  cardProps: CardProps;
}

const BackCard: React.FC<Props> = ({ cardProps }) => {
  const tabs = [
    {
      label: "Rewards",
      content: <Rewards rewards={cardProps.rewards} color={cardProps.color} />,
    },
    {
      label: "Project",
      content: <Project audienceOwner={cardProps.audienceOwner} />,
    },
    { label: "Proof", content: <Proofs proofs={cardProps.proofs} /> },
    { label: "Sponsor", content: <Sponsor sponsor={cardProps.sponsor} /> },
  ];
  const [currentTab, setCurrentTab] = useState<TabItem>();

  const hasFooter = useMemo(() => {
    if (!currentTab) return false;
    return ["Project", "Sponsor"].includes(currentTab.label);
  }, [currentTab]);

  return (
    <>
      {/* Top Section */}
      <div>
        {/* Header Section */}
        <div className="relative cursor-pointer">
          <img
            src={cardProps.backgroundImageSrc}
            alt="Background"
            className="w-full h-52 object-cover bg-gradient-to-t from-red-500 to-black "
            style={{ minHeight: "100px", maxHeight: "100px" }}
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, ${cardProps.color} 0%, transparent 20%)`,
            }}
          ></div>

          {/* Company Logo */}
          <div
            className="absolute top-4 left-4 w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              backgroundColor: cardProps.color,
            }}
          >
            <img
              src={cardProps.sponsor.logoSrc}
              alt="Company Logo"
              className="w-16 h-16"
            />
          </div>
        </div>
        {/* Content Section */}
        <div className="p-2">
          <Tabs tabs={tabs} updateTab={setCurrentTab} />
        </div>
      </div>
      {/* Bottom Section */}
      {hasFooter && (
        <div
          className="px-2 py-2 flex items-center justify-end"
          style={{
            backgroundColor: shadeColor(cardProps.color, -10),
          }}
        >
          {currentTab?.label === "Project" && (
            <DetailButton
              buttonText="Project Details"
              detailsUrl={cardProps.audienceOwner.detailsUrl}
            />
          )}
          {currentTab?.label === "Sponsor" && (
            <DetailButton
              buttonText="Sponsor Details"
              detailsUrl={cardProps.sponsor.detailsUrl}
            />
          )}
        </div>
      )}
    </>
  );
};

export default BackCard;
