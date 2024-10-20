import React from "react";
import { Reward } from "../../../utils/types";
import { shadeColor } from "../../../utils/colorHelper";

interface RewardsProps {
  rewards: Reward[];
  color: string;
}

const Rewards: React.FC<RewardsProps> = ({ rewards, color }) => {
  return (
    <div className="flex flex-col gap-3 pt-2">
      {rewards.map((reward) => (
        <a
          href={reward.detailsUrl}
          target="_blank"
          rel="noreferrer"
          key={reward.id}
        >
          <div className="flex rounded-xl bg-gray-100 bg-opacity-10 overflow-hidden hover:bg-opacity-20">
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
              <div className="font-bold text-lg truncate">{reward.title}</div>
              <div className="text-ellipsis text-xs">{reward.description}</div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Rewards;
