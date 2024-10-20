import React, { useState } from "react";
import { CardProps } from "../../utils/types";
import HiddenCard from "../HiddenCard/HiddenCard";
import FlipCard from "../FlipCard/FlipCard";

const CardContainer: React.FC<CardProps> = (cardProps) => {
  const [revealState, setRevealState] = useState("hidden");
  const reveal = () => {
    setRevealState("reveal");
    setTimeout(() => {
      setRevealState("visible");
    }, 1500);
  };

  return (
    <div>
      {["hidden", "reveal"].includes(revealState) ? (
        <div onClick={reveal}>
          <HiddenCard {...cardProps} />
        </div>
      ) : (
        <div
          className={`relative ${
            revealState === "visible" ? "animate-fade" : ""
          }`}
        >
          <FlipCard cardProps={cardProps} />
        </div>
      )}
    </div>
  );
};

export default CardContainer;
