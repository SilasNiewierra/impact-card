import React, { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import getRarity from "../../utils/rarityHelper";

interface Props {
  totalCollectionCount: number;
  color: string;
  width: number;
  height: number;
  id: string;
}

const Confetti: React.FC<Props> = ({
  totalCollectionCount,
  color,
  width,
  height,
  id,
}) => {
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const rarity = getRarity(totalCollectionCount, color);

    var parent = document.getElementById(`parent-${id}`) as HTMLElement;
    const parentContainer = parent.getBoundingClientRect();

    if (parentContainer) {
      setOrigin({
        x: parentContainer.x - parentContainer.width / 2 - 50,
        y: parentContainer.y - parentContainer.height / 2 + 100,
      });
    }

    var confettiCanvas = document.getElementById(
      `canvas-${id}`
    ) as HTMLCanvasElement;

    if (confettiCanvas) {
      parent.appendChild(confettiCanvas);
      var myConfetti = confetti.create(confettiCanvas, {
        resize: true,
        useWorker: true,
      });

      myConfetti({
        particleCount: 400,
        spread: 360,
        zIndex: 100,
        startVelocity: 30,
        scalar: 0.5,
        colors: rarity.colors,
      });
    }
  }, [color, id, totalCollectionCount]);

  return (
    <canvas
      id={`canvas-${id}`}
      width={width}
      height={height}
      className="absolute"
      style={{
        left: `${origin.x}px`,
        top: `${origin.y}px`,
        pointerEvents: "none",
      }}
    ></canvas>
  );
};

export default Confetti;
