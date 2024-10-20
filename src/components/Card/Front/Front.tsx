import React from "react";
import { CardProps } from "../../../utils/types";
import { shadeColor } from "../../../utils/colorHelper";
import getRarity from "../../../utils/rarityHelper";
import BadgeEpic from "../../Badge/BadgeEpic";
import BadgeMint from "../../Badge/BadgeMint";
import BadgeRare from "../../Badge/BadgeRare";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  cardProps: CardProps;
}

const FrontCard: React.FC<Props> = ({ cardProps }) => {
  const rarity = getRarity(cardProps.totalCollectionCount, cardProps.color);

  return (
    <>
      {/* Header Section */}
      <Header
        backgroundImageSrc={cardProps.backgroundImageSrc}
        color={cardProps.color}
        sponsor={cardProps.sponsor}
      />

      {/* Content Section */}
      <div className="p-2 overflow-y-scroll">
        {/* Project Name and Badge*/}
        <div className="flex justify-between">
          <h3 className="text-xl font-bold mb-2">{cardProps.title}</h3>
          {rarity.value !== "common" && (
            <div className="relative -mt-2 ">
              <div className="w-10 h-10">
                <span className="absolute top-3 left-1.5 font-bold text-white text-xs">
                  {rarity.label}
                </span>
                {rarity.value === "rare" && <BadgeRare />}
                {rarity.value === "mint" && <BadgeMint />}
                {rarity.value === "epic" && <BadgeEpic />}
              </div>
            </div>
          )}
        </div>

        {/* Impact Data Section */}
        <div
          className="flex justify-around py-2 border-t border-b text-center"
          style={{
            borderColor: shadeColor(cardProps.color, 60),
          }}
        >
          {/* Achievement Statistic */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex gap-2">
              <img
                src={cardProps.impact.iconSrc}
                alt="Achievement Statistics Icon"
                className="w-6 h-6 opacity-50"
              />
              <span className="text-base font-bold">
                {cardProps.impact.metric}
              </span>
            </div>
            <span className="text-xs mt-1">{cardProps.impact.text}</span>
          </div>

          {/* Personal Impact */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex gap-2">
              <img
                src={cardProps.totalImpact.iconSrc}
                alt="Personal Impact Icon"
                className="w-6 h-6 opacity-50"
              />
              <span className="text-base font-bold">
                {cardProps.totalImpact.metric}
              </span>
            </div>
            <span className="text-xs mt-1">{cardProps.totalImpact.text}</span>
          </div>

          {/* Audience Owner */}
          <div className="flex flex-col items-center flex-1">
            <div className="flex gap-2">
              <div
                className="flex rounded-full"
                style={{
                  backgroundColor: shadeColor(cardProps.color, -30),
                }}
              >
                <img
                  src={cardProps.audienceOwner.logoSrc}
                  alt="Company Logo"
                  className="w-6 h-6"
                />
              </div>
            </div>
            <span className="text-xs mt-1">{cardProps.audienceOwner.name}</span>
          </div>
        </div>

        {/* Sponsor */}
        <div className="mt-4 text-center flex justify-center items-center">
          <img
            src={cardProps.sponsor.logoSrc}
            alt="Barbie Icon"
            className="w-6 h-6 mr-2"
          />
          <span className="text-xs">
            Made possible by <span className="font-bold">Walt Disney</span>
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <Footer
        color={cardProps.color}
        cardNumber={cardProps.cardNumber}
        totalCollectionCount={cardProps.totalCollectionCount}
        rewards={cardProps.rewards}
      />
    </>
  );
};

export default FrontCard;
