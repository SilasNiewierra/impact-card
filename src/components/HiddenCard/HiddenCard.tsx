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
    <div style={{ height: "590px", width: "350px" }}>
      <div className="flip-card-inner cursor-pointer">
        <div className="flip-card-front" onClick={handleFlip}>
          <Card cardProps={props}>
            <FrontCard cardProps={props} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Flip;
