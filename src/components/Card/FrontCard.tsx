import React from "react";
import { Card, Reward } from "../../types";

const FrontCard: React.FC<Card> = (props) => {
  return (
    <div className="max-w-sm w-full bg-gray-700 p-1 text-white rounded-2xl overflow-hidden mx-auto sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-lg cursor-pointer">
      <div className="bg-gray-900 text-white rounded-2xl overflow-hidden p-1 h-full">
        <div className="text-white rounded-2xl overflow-hidden flex flex-col justify-between h-full">
          {/* Background Image Section */}
          <div className="relative">
            <img
              src={props.backgroundImageSrc}
              alt="Background"
              className="object-cover"
              style={{
                height: "380px",
                width: "380px",
              }}
            />

            <div className="absolute inset-0 test-2 h-full w-full">
              <svg
                role="none"
                viewBox="0 0 300 320"
                preserveAspectRatio="none"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <defs>
                  <mask
                    id="test2"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100%"
                    height="100%"
                  >
                    <path
                      id="background"
                      d="M300,0L300,326L0,326L0,0L300,0ZM81.37,166.055C60.625,163.27 38.85,169.98 23.086,186.211C-3.031,213.089 -2.406,256.847 24.448,282.989C51.241,309.07 94.103,308.848 120.624,282.326C136.671,266.281 142.707,244.591 139.861,223.418C137.015,202.245 143.357,181.132 159.207,165.282C175.057,149.432 196.672,143.569 217.343,145.936C238.295,148.34 260.193,142.734 276.24,126.687C302.761,100.166 302.982,57.303 276.902,30.511C250.759,3.657 207.024,3.032 180.148,29.149C163.893,44.937 157.195,66.774 160.015,87.554C160.055,87.841 160.174,88.672 160.267,89.314C160.312,89.625 160.35,89.892 160.37,90.032C160.555,91.336 160.565,91.44 160.667,92.743C162.286,112.691 155.771,132.111 140.903,146.979C126.036,161.847 106.26,168.03 86.779,166.704C85.286,166.603 83.8,166.395 82.323,166.188L82.087,166.159C81.77,166.114 81.686,166.099 81.37,166.055Z"
                      fill="white"
                    />
                  </mask>
                </defs>

                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#grad1)"
                  mask="url(#test2)"
                />

                <defs>
                  <linearGradient
                    id="grad1"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "rgb(0,0,0)", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "rgb(0,0,0)", stopOpacity: 0 }}
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Gradient Overlay with Transition */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-100"></div>

            {/* Circular Overlays */}
            <div
              className="absolute top-9 left-9 bg-gray-900 rounded-full flex items-center justify-center"
              style={{ height: "150px", width: "150px" }}
            >
              <img
                src={props.sponsor.logoSrc}
                alt="Company Logo"
                style={{ height: "120px", width: "120px" }}
              />
            </div>

            {/* Circular Overlays */}
            {/* <div className="absolute top-4 left-4 w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center">
              <img
                src={props.sponsor.logoSrc}
                alt="Company Logo"
                className="w-12 h-12"
              />
            </div> */}
          </div>

          {/* FrontCard Content Section */}
          <div className="p-2 overflow-y-scroll">
            {/* Project Name */}
            <h3 className="text-xl font-bold mb-2">{props.title}</h3>

            {/* Impact Data Section */}
            <div className="flex justify-around py-2 border-t border-b border-gray-400 text-center">
              {/* Achievement Statistic */}
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <img
                    src={props.impact.iconSrc}
                    alt="Achievement Statistics Icon"
                    className="w-6 h-6 opacity-20"
                  />
                  <span className="text-base font-bold">
                    {props.impact.metric}
                  </span>
                </div>
                <span className="text-xs mt-1">{props.impact.text}</span>
              </div>

              {/* Personal Impact */}
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <img
                    src={props.totalImpact.iconSrc}
                    alt="Personal Impact Icon"
                    className="w-6 h-6 opacity-20"
                  />
                  <span className="text-base font-bold">
                    {props.totalImpact.metric}
                  </span>
                </div>
                <span className="text-xs mt-1">{props.totalImpact.text}</span>
              </div>

              {/* Audience Owner */}
              <div className="flex flex-col items-center">
                <div className="flex rounded-full bg-gray-400">
                  <img
                    src={props.audienceOwner.logoSrc}
                    alt="Company Logo"
                    className="w-6 h-6"
                  />
                </div>
                <span className="text-xs mt-1">{props.audienceOwner.name}</span>
              </div>
            </div>

            {/* Sponsor */}
            <div className="mt-4 text-center flex justify-center items-center">
              <img
                src={props.sponsor.logoSrc}
                alt="Barbie Icon"
                className="w-6 h-6 mr-2"
              />
              <span className="text-xs">
                Made possible by <span className="font-bold">Walt Disney</span>
              </span>
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
                <div className="flex items-center space-x-2 bg-gray-800 rounded-full p-2">
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

export default FrontCard;
