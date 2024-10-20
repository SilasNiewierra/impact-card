import React, { useState } from "react";
import "./FlipCard.css";
import CardLayout from "../Card/CardLayout";
import FrontCard from "../Card/Front/Front";
import BackCard from "../Card/Back/Back";
import { CardProps } from "../../utils/types";

const Flip: React.FC<CardProps> = (props) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card p-2 ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front cursor-pointer" onClick={handleFlip}>
          <CardLayout cardProps={props}>
            <FrontCard {...props} />
          </CardLayout>
        </div>
        <div className="flip-card-back">
          <CardLayout cardProps={props}>
            <BackCard cardProps={props} flip={handleFlip} />
          </CardLayout>
        </div>
      </div>
    </div>
  );
};

export default Flip;
