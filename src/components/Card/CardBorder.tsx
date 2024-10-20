import React from "react";
import { shadeColor } from "../../utils/colorHelper";
import getRarity from "../rarityHelper";

interface CardBorderProps {
  totalCollectionCount: number;
  color: string;
}

const CardBorder: React.FC<CardBorderProps> = ({
  totalCollectionCount,
  color,
}) => {
  const rarity = getRarity(totalCollectionCount);
  return (
    <>
      {rarity.value === "epic" && (
        <div
          className={`blur absolute w-full h-full inset-0 rounded-3xl bg-gradient-to-br opacity-75 group-hover:opacity-100 transition duration-500 ease-in-out ${rarity.cssClassName}`}
        ></div>
      )}
      <div
        className={`absolute w-full h-full inset-0 rounded-3xl bg-gradient-to-br  ${rarity.cssClassName}`}
        style={{
          backgroundColor:
            rarity.value === "common" ? shadeColor(color, 40) : "",
        }}
      ></div>
    </>
  );
};

export default CardBorder;
