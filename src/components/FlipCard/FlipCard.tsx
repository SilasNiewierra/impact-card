import React, { useState } from "react";
import "./FlipCard.css";
import Card from "../Card/Card";
import FrontCard from "../Card/Front/Front";
import BackCard from "../Card/Back/Back";
import { CardProps } from "../../utils/types";

const Flip: React.FC<CardProps> = (props) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      style={{ height: "590px", width: "350px" }}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front cursor-pointer" onClick={handleFlip}>
          <Card cardProps={props}>
            <FrontCard {...props} />
          </Card>
        </div>
        <div className="flip-card-back" onClick={handleFlip}>
          <Card cardProps={props}>
            <BackCard cardProps={props} flip={handleFlip} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Flip;
