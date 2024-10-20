import React, { useState } from "react";
import Card from "../Card/Card";
import { CardProps } from "../../utils/types";
import "./HiddenCard.css";
import Header from "../Card/Front/Header";
interface Props {
  cardProps: CardProps;
}

const HiddenCard: React.FC<Props> = ({ cardProps }) => {
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
        <div
          className={`h-full w-full  ${
            revealState === "reveal" ? "" : "clean-shimmer"
          }`}
          onClick={handleReveal}
        >
          <Card cardProps={cardProps} hidden={true}>
            {/* Header Section */}
            <div className="blur">
              <Header
                backgroundImageSrc={cardProps.backgroundImageSrc}
                color={cardProps.color}
                sponsor={cardProps.sponsor}
              />
            </div>
            <div className="flex justify-center items-center h-full w-full p-4 text-center">
              <div>
                <p className="text-lg font-bold">Congratulations</p>
                <p>
                  You just made the world a better place. Wanna see your unique
                  impact card, rewards and more?
                </p>
                <p className="text-lg font-bold mt-4">
                  Click this card to reveal it all!
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
