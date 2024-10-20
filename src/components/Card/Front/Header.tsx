import React from "react";
import { Sponsor } from "../../../utils/types";

interface Props {
  backgroundImageSrc: string;
  color: string;
  sponsor: Sponsor;
}

const FrontCard: React.FC<Props> = ({ backgroundImageSrc, color, sponsor }) => {
  return (
    <div className="relative">
      {/* Background Image */}
      <img
        src={backgroundImageSrc}
        alt="Background"
        className="object-cover w-full h-[320px]"
      />

      {/*  Overlay Cutout Mask */}
      <div className="absolute inset-0 h-full w-full">
        <svg
          role="none"
          viewBox="0 0 300 305"
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
            <linearGradient id="grad1" x1="50%" y1="100%" x2="50%" y2="0%">
              <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
              <stop
                offset="100%"
                style={{ stopColor: color, stopOpacity: 0.3 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Company Logo */}
      <div
        className="absolute top-5 left-5 rounded-full flex items-center justify-center"
        style={{
          height: "150px",
          width: "150px",
          backgroundColor: color,
        }}
      >
        <img
          src={sponsor.logoSrc}
          alt="Company Logo"
          style={{ height: "120px", width: "120px" }}
        />
      </div>
    </div>
  );
};

export default FrontCard;
