import React, { useState } from "react";
import ShareIcon from "../../../assets/icon-share.png";
import Tabs from "../../Tab/Tabs";
import { CardProps, Reward } from "../../../utils/types";
import Rewards from "./Rewards";
import Proofs from "./Proofs";
import Project from "./Project";
import Sponsor from "./Sponsor";
import Card from "../Card";

interface TabItem {
  label: string;
  content: React.ReactNode;
}

const BackCard: React.FC<CardProps> = (props) => {
  const flip = () => {
    if (props.flip) props.flip();
  };

  const handleShare = () => {
    // create share logic with meta tags
  };

  const [currentTab, setCurrentTab] = useState<TabItem>();

  const tabs = [
    { label: "Rewards", content: <Rewards rewards={props.rewards} /> },
    {
      label: "Project",
      content: <Project audienceOwner={props.audienceOwner} />,
    },
    { label: "Proof", content: <Proofs proofs={props.proofs} /> },
    { label: "Sponsor", content: <Sponsor sponsor={props.sponsor} /> },
  ];

  return (
    <Card>
      <div>
        {/* Header Section */}
        <div className="relative cursor-pointer" onClick={flip}>
          <img
            src={props.backgroundImageSrc}
            alt="Background"
            className="w-full h-52 object-cover bg-gradient-to-t from-red-500 to-black "
            style={{ minHeight: "100px", maxHeight: "100px" }}
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-100"></div>

          {/* Company Logo */}
          <div className="absolute top-4 left-4 w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
            <img
              src={props.sponsor.logoSrc}
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
      <div
        className={`bg-gray-900 px-2 py-2 flex items-center justify-end  border-gray-800 ${
          ["Project", "Sponsor"].includes(currentTab?.label || "")
            ? "border-t"
            : ""
        }`}
      >
        {currentTab?.label === "Project" && (
          <a
            href={props.audienceOwner.detailsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <button className="rounded-3xl bg-white bg-opacity-30 px-3 py-1 font-bold text-sm">
              Project Details
            </button>
          </a>
        )}
        {currentTab?.label === "Sponsor" && (
          <a href={props.sponsor.detailsUrl} target="_blank" rel="noreferrer">
            <button className="rounded-3xl bg-white bg-opacity-30 px-3 py-1 font-bold text-sm">
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
    </Card>
  );
};

export default BackCard;
