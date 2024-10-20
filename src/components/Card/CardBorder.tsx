import React from "react";
import { shadeColor } from "../../utils/colorHelper";
import getRarity from "../../utils/rarityHelper";

interface Props {
  totalCollectionCount: number;
  color: string;
}

const CardBorder: React.FC<Props> = ({ totalCollectionCount, color }) => {
  const rarity = getRarity(totalCollectionCount, color);
  return (
    <>
      {rarity.value === "epic" && (
        <div
          className={`blur absolute w-full h-full inset-0 rounded-3xl bg-gradient-to-br animate-pulse ${rarity.cssClassName}`}
        ></div>
      )}
      <div
        className={`absolute w-full h-full inset-0 rounded-3xl bg-gradient-to-br opacity-50 group-hover:opacity-100 transition duration-200 ease-in-out ${rarity.cssClassName}`}
        style={{
          backgroundColor:
            rarity.value === "common" ? shadeColor(color, 40) : "",
        }}
      ></div>
    </>
  );
};

export default CardBorder;
