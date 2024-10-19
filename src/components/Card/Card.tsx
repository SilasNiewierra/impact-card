import React from "react";

interface CardProps {
  child: React.ReactElement;
}

const CardLayout: React.FC<CardProps> = ({ child }) => {
  return (
    <div className="max-w-sm w-full bg-gray-700 p-1 text-white rounded-2xl overflow-hidden mx-auto sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-lg cursor-pointer">
      <div className="bg-gray-900 text-white rounded-2xl overflow-hidden p-1 h-full">
        <div className="text-white rounded-2xl overflow-hidden flex flex-col justify-between h-full">
          {/* Individual Component */}
          {child}

          {/* Bottom Section */}
          {/* <div className="bg-gray-900 px-2 py-2 flex items-center justify-between border-t border-gray-800">
            <span>
              <span className="font-bold">{props.count}</span>/
              {props.totalCount}
            </span>
            <div className="flex justify-center gap-2 items-center">
              <span className="font-bold">Rewards</span>
              {props.rewards.map((reward: Reward) => (
                <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-2">
                  <img
                    src={reward.iconSrc}
                    alt="Reward Icon 1"
                    className="w-6 h-6 shimmer"
                  />
                </div>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
