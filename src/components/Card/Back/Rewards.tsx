import React from "react";
import { Reward } from "../../../utils/types";

interface RewardsProps {
  rewards: Reward[];
  color: string;
}

const Rewards: React.FC<RewardsProps> = ({ rewards, color }) => {
  const handleClick = (event: any, url: string) => {
    event.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-3 pt-2">
      {rewards.map((reward) => (
        <div
          className="flex rounded-xl bg-gray-100 bg-opacity-10 overflow-hidden hover:bg-opacity-20 cursor-pointer"
          onClick={(e) => handleClick(e, reward.detailsUrl)}
          key={reward.id}
        >
          <div
            className="bg-white bg-opacity-10 flex justify-center items-center"
            style={{ minWidth: "70px", minHeight: "70px" }}
          >
            <div className="rounded-full m-2 bg-white bg-opacity-20">
              <img
                src={reward.iconSrc}
                alt="Reward Icon"
                className="p-4 shimmer"
              ></img>
            </div>
          </div>
          <div className="p-2">
            <div className="font-bold text-base truncate">{reward.title}</div>
            <div className="text-ellipsis text-xs">{reward.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rewards;
