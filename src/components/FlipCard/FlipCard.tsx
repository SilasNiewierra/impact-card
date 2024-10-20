import React, { useState } from "react";
import "./FlipCard.css";
import Card from "../Card/Card";
import FrontCard from "../Card/Front/Front";
import BackCard from "../Card/Back/Back";
import { CardProps } from "../../utils/types";

interface Props {
  cardProps: CardProps;
}

const Flip: React.FC<Props> = ({ cardProps }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner cursor-pointer">
        <div className="flip-card-front" onClick={handleFlip}>
          <Card cardProps={cardProps}>
            <FrontCard cardProps={cardProps} />
          </Card>
        </div>
        <div className="flip-card-back" onClick={handleFlip}>
          <Card cardProps={cardProps}>
            <BackCard cardProps={cardProps} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Flip;
