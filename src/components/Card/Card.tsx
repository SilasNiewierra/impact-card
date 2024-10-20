import React from "react";
import { CardProps } from "../../utils/types";
import CardBorder from "./CardBorder";

interface Props {
  children: React.ReactElement | React.ReactElement[];
  cardProps: CardProps;
  hidden?: boolean;
}

const Card: React.FC<Props> = ({ children, cardProps, hidden }) => {
  return (
    <div className="flex justify-center items-center relative group h-full w-full">
      <CardBorder
        totalCollectionCount={
          hidden ? Infinity : cardProps.totalCollectionCount
        }
        color={cardProps.color}
      />

      <div className="relative w-[97%] h-[98%] rounded-lg z-20">
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

export default Card;
