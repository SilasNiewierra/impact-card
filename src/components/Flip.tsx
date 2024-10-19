import React, { useState } from "react";
import "./Flip.css";

interface Props {
  FrontComponent: React.ReactElement;
  BackComponent: React.ReactElement;
}

const Flip: React.FC<Props> = (props) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const BackComponentWithFlip = React.cloneElement(props.BackComponent, {
    flip: handleFlip,
  });

  return (
    <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front" onClick={handleFlip}>
          {props.FrontComponent}
        </div>
        <div className="flip-card-back">{BackComponentWithFlip}</div>
      </div>
    </div>
  );
};

export default Flip;
