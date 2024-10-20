import React from "react";
import { Sponsor } from "../../../utils/types";

interface Props {
  backgroundImageSrc: string;
  color: string;
  sponsor: Sponsor;
}

const Header: React.FC<Props> = ({ backgroundImageSrc, color, sponsor }) => {
  return (
    <div className="relative cursor-pointer">
      <img
        src={backgroundImageSrc}
        alt="Background"
        className="w-full h-52 object-cover bg-gradient-to-t from-red-500 to-black "
        style={{ minHeight: "100px", maxHeight: "100px" }}
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${color} 0%, transparent 20%)`,
        }}
      ></div>

      {/* Company Logo */}
      <div
        className="absolute top-4 left-4 w-20 h-20 rounded-full flex items-center justify-center"
        style={{
          backgroundColor: color,
        }}
      >
        <img src={sponsor.logoSrc} alt="Company Logo" className="w-16 h-16" />
      </div>
    </div>
  );
};

export default Header;
