import React, { useMemo, useState } from "react";
import Tabs from "../../Tab/Tabs";
import { CardProps, TabItem } from "../../../utils/types";
import Rewards from "./TabItems/Rewards";
import Proofs from "./TabItems/Proofs";
import Project from "./TabItems/Project";
import Sponsor from "./TabItems/Sponsor";
import Footer from "./Footer";
import Header from "./Header";

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
        <Header
          backgroundImageSrc={cardProps.backgroundImageSrc}
          color={cardProps.color}
          sponsor={cardProps.sponsor}
        />
        {/* Content Section */}
        <div className="p-2">
          <Tabs tabs={tabs} updateTab={setCurrentTab} />
        </div>
      </div>
      {/* Bottom Section */}
      {hasFooter && currentTab && (
        <Footer
          currentTab={currentTab}
          color={cardProps.color}
          audienceOwner={cardProps.audienceOwner}
          sponsor={cardProps.sponsor}
        />
      )}
    </>
  );
};

export default BackCard;
