import React, { useState } from "react";
import { CardProps } from "../../utils/types";
import HiddenCard from "../HiddenCard/HiddenCard";
import FlipCard from "../FlipCard/FlipCard";
import Confetti from "./Confetti";

const RevealCard: React.FC<CardProps> = (cardProps) => {
  const [revealState, setRevealState] = useState("hidden");

  const reveal = () => {
    setRevealState("reveal");
    setTimeout(() => {
      setRevealState("visible");
    }, 600);
  };

  return (
    <div id={`parent-${cardProps.id}`}>
      {["hidden", "reveal"].includes(revealState) ? (
        <div onClick={reveal}>
          <HiddenCard cardProps={cardProps} />
        </div>
      ) : (
        <div
          className={`relative ${
            revealState === "visible" ? "animate-fade" : ""
          }`}
        >
          <FlipCard cardProps={cardProps} />
          <Confetti
            totalCollectionCount={cardProps.totalCollectionCount}
            color={cardProps.color}
            width={800}
            height={800}
            id={cardProps.id}
          />
        </div>
      )}
    </div>
  );
};

export default RevealCard;
