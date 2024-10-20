import React, { useState } from "react";
import Card from "../Card/Card";
import { CardProps } from "../../utils/types";
import "./HiddenCard.css";

const HiddenCard: React.FC<CardProps> = (props) => {
  const [revealState, setRevealState] = useState("hidden");
  const handleReveal = () => {
    setRevealState("reveal");
    setTimeout(() => {
      setRevealState("visible");
    }, 1500);
  };

  return (
    <div
      style={{ height: "590px", width: "350px" }}
      className={` ${revealState === "reveal" ? "strong-tilt-move-shake" : ""}`}
    >
      <div className="h-full w-full cursor-pointer">
        <div className="h-full w-full" onClick={handleReveal}>
          <Card cardProps={props} hidden={true}>
            <div className="flex justify-center items-center h-full w-full p-4 text-center">
              <div>
                <p className="text-lg font-bold">Congratulations</p>
                <p className="">You just made the world a better place</p>
                <p>
                  Wanna see your unique impact card, rewards and more? Click
                  this card to reveal the details
                </p>
              </div>
              <div id="stripped">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1062">
                  <polyline
                    points="0,154 131,0 0,348 269,0 0,562 437,0 
	0,766 565,14 0,1062 719,0 289,1062 843,0 543,1062 995,0 729,1062 1161,0 947,1062 1307,0 1143,1062 1500,162 1299,1062 1500,830"
                  />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HiddenCard;
