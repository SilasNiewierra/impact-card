import React from "react";
import { CardProps } from "../../utils/types";
import CardBorder from "./CardBorder";

interface CardLayoutProps {
  children: React.ReactElement | React.ReactElement[];
  cardProps: CardProps;
}

const CardLayout: React.FC<CardLayoutProps> = ({ children, cardProps }) => {
  return (
    <div className="flex justify-center items-center relative group h-full w-full">
      <CardBorder
        totalCollectionCount={cardProps.totalCollectionCount}
        color={cardProps.color}
      />

      <div className="relative w-[97%] h-[98%] rounded-lg">
        <div
          className="w-full h-full p-1 text-white rounded-2xl overflow-hidden mx-auto"
          style={{
            backgroundColor: cardProps.color,
          }}
        >
          <div className="overflow-hidden h-full flex flex-col justify-between rounded-2xl">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
