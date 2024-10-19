import React from "react";

interface CardProps {
  children: React.ReactElement[];
}

const CardLayout: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="max-w-sm w-full bg-gray-700 p-1 text-white rounded-2xl overflow-hidden mx-auto sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-lg cursor-pointer">
      <div className="bg-gray-900 text-white rounded-2xl overflow-hidden p-1 h-full">
        <div
          className="text-white rounded-2xl overflow-hidden flex flex-col justify-between"
          style={{ height: "620px" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
