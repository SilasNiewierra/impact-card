import React from "react";
import { Proof } from "../../../utils/types";

interface Props {
  proofs: Proof[];
}

const Proofs: React.FC<Props> = ({ proofs }) => {
  const handleClick = (event: any, url: string) => {
    event.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <div className="flex flex-col gap-3 pt-2">
      <span className="font-bold text-lg">Proof of Authenticity</span>
      {proofs.map((proof) => (
        <div
          className="flex rounded-xl bg-gray-100 bg-opacity-10 overflow-hidden hover:bg-opacity-20 cursor-pointer"
          onClick={(e) => handleClick(e, proof.detailsUrl)}
          key={proof.id}
        >
          <div
            className="bg-white bg-opacity-10 flex justify-center items-center"
            style={{ minWidth: "70px", maxWidth: "70px", minHeight: "70px" }}
          >
            <div className="m-2">
              <img
                src={proof.logoSrc}
                alt="Reward Icon"
                className="p-2"
                style={{
                  minWidth: "70px",
                  minHeight: "70px",
                  maxHeight: "70px",
                  maxWidth: "70px",
                }}
              ></img>
            </div>
          </div>
          <div className="p-2 flex flex-col justify-center">
            <div className="font-semibold truncate">{proof.title}</div>
            <div className="text-ellipsis text-xs">{proof.commitment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proofs;
