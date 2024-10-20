import React from "react";
import { Reward } from "../../../utils/types";
import { shadeColor } from "../../../utils/colorHelper";
import ShareIcon from "../../../assets/icon-share.png";

interface Props {
  color: string;
  cardNumber: number;
  totalCollectionCount: number;
  rewards: Reward[];
}

const Footer: React.FC<Props> = ({
  color,
  cardNumber,
  totalCollectionCount,
  rewards,
}) => {
  const handleShare = (event: any) => {
    event.stopPropagation();
    // create share logic with meta tags
    // for demo purposes just open my portfolio :D
    window.open("https://silas-niewierra.web.app/", "_blank");
  };

  return (
    <div
      className="p-2 flex items-center justify-between"
      style={{
        backgroundColor: shadeColor(color, -30),
      }}
    >
      <div className="flex items-center flex-1">
        <span>
          <span className="font-bold">{cardNumber}</span> /{" "}
          {totalCollectionCount}
        </span>
      </div>

      <div
        className="flex items-center justify-center flex-1"
        onClick={handleShare}
      >
        <img src={ShareIcon} alt="Share Icon" className="w-6 h-6" />
      </div>

      <div className="flex justify-end gap-2 items-center flex-1">
        {/* <span className="font-bold">Rewards</span> */}
        {rewards.map((reward: Reward) => (
          <div
            className="flex items-center space-x-2 rounded-full p-2"
            style={{
              backgroundColor: shadeColor(color, -70),
            }}
            key={reward.id}
          >
            <img
              src={reward.iconSrc}
              alt="Reward Icon 1"
              className="w-6 h-6 shimmer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
