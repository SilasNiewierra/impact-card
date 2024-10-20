import React, { useMemo, useState } from "react";
import ShareIcon from "../../../assets/icon-share.png";
import Tabs from "../../Tab/Tabs";
import { CardProps } from "../../../utils/types";
import Rewards from "./Rewards";
import Proofs from "./Proofs";
import Project from "./Project";
import Sponsor from "./Sponsor";
import { shadeColor } from "../../../utils/colorHelper";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface BackCardProps {
  cardProps: CardProps;
  flip: () => void;
}
const BackCard: React.FC<BackCardProps> = ({ cardProps, flip }) => {
  const handleShare = () => {
    // create share logic with meta tags
  };

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
      <div>
        {/* Header Section */}
        <div className="relative cursor-pointer" onClick={flip}>
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
        {/* BackCard Content Section */}
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
            <a
              href={cardProps.audienceOwner.detailsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <button className="rounded-3xl bg-white bg-opacity-30 px-3 py-1 font-bold text-sm hover:bg-opacity-40">
                Project Details
              </button>
            </a>
          )}
          {currentTab?.label === "Sponsor" && (
            <a
              href={cardProps.sponsor.detailsUrl}
              target="_blank"
              rel="noreferrer"
            >
              <button className="rounded-3xl bg-white bg-opacity-30 px-3 py-1 font-bold text-sm  hover:bg-opacity-40">
                Sponsor Details
              </button>
            </a>
          )}
          {/* Share Button */}
          {/* <img
          src={ShareIcon}
          alt="Share Icon"
          className="w-6 h-6"
          onClick={handleShare}
        /> */}
        </div>
      )}
    </>
  );
};

export default BackCard;
