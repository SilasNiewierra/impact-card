import React from "react";
// import CompanyLogo from "../../assets/walt-disney.png";
// import BackgroundImage from "../../assets/moana-background.jpg";
// import LeafIcon from "../../assets/icon-tree.png";
// import GlobeIcon from "../../assets/icon-globe.png";
// import Reward1 from "../../assets/icon-ticket.png";
// import Reward2 from "../../assets/reward2.svg";
import ShareIcon from "../../assets/icon-share.png";
import Tabs from "../Tabs";
import Rewards from "./Rewards";
import Project from "./Project";
import { Card, Reward } from "../../types";
import Sponsor from "./Sponsor";
import Proof from "./Proof";

const BackCard: React.FC<Card> = (props) => {
  const flip = () => {
    if (props.flip) props.flip();
  };

  const tabs = [
    { label: "Rewards", content: <Rewards rewards={props.rewards} /> },
    {
      label: "Project",
      content: <Project audienceOwner={props.audienceOwner} />,
    },
    { label: "Proof", content: <Proof proofs={props.proofs} /> },
    { label: "Sponsor", content: <Sponsor sponsor={props.sponsor} /> },
  ];

  return (
    <div
      className="max-w-sm w-full bg-gray-700 p-2 text-white rounded-2xl overflow-hidden mx-auto sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-lg"
      style={{
        maxWidth: "370px",
        height: "600px",
        minHeight: "600px",
        maxHeight: "600px",
      }}
    >
      <div className="bg-gray-900 text-white rounded-2xl overflow-hidden p-1 h-full">
        <div className="text-white rounded-2xl overflow-hidden flex flex-col justify-between h-full">
          <div>
            {/* Background Image Section */}
            <div className="relative cursor-pointer" onClick={flip}>
              <img
                src={props.backgroundImageSrc}
                alt="Background"
                className="w-full h-52 object-cover bg-gradient-to-t from-red-500 to-black "
                style={{ minHeight: "100px", maxHeight: "100px" }}
              />

              {/* Gradient Overlay with Transition */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-100 transition-opacity duration-500 ease-in-out"></div>

              {/* Circular Overlays */}
              <div className="absolute top-4 left-4 w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
                <img
                  src={props.sponsor.logoSrc}
                  alt="Company Logo"
                  className="w-12 h-12"
                />
              </div>

              {/* Share Button */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
                <img src={ShareIcon} alt="Share Icon" className="w-6 h-6" />
              </div>
            </div>
            {/* BackCard Content Section */}
            <div className="p-2">
              <Tabs tabs={tabs} />
            </div>
          </div>
          {/* Bottom Section */}
          <div className="bg-gray-900 px-2 py-2 flex items-center justify-between border-t border-gray-800">
            <span>
              <span className="font-bold">{props.count}</span>/
              {props.totalCount}
            </span>
            <div className="flex justify-center gap-2 items-center">
              <span className="font-bold">Rewards</span>
              {props.rewards.map((reward: Reward) => (
                <div className="flex items-center space-x-2 bg-gray-500 rounded-full p-2">
                  <img
                    src={reward.iconSrc}
                    alt="Reward Icon 1"
                    className="w-6 h-6 shimmer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackCard;
