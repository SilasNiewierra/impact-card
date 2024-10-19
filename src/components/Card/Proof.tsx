import React from "react";
import { Proof } from "../../types";

interface ProofProps {
  proofs: Proof[];
}

const Proofs: React.FC<ProofProps> = ({ proofs }) => {
  return (
    <div className="flex flex-col gap-3 pt-2">
      <div className="font-bold text-lg">Proof of Authenticity</div>
      {proofs.map((proof) => (
        <div
          className="flex rounded-xl bg-gray-100 bg-opacity-10 overflow-hidden"
          style={{ height: "70px" }}
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
          <div className="p-2">
            <div className="font-bold truncate">{proof.title}</div>
            <div className="text-ellipsis text-xs">{proof.commitment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Proofs;
