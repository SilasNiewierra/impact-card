import React from "react";
import { Sponsor } from "../../../utils/types";

interface Props {
  sponsor: Sponsor;
}

const Sposor: React.FC<Props> = ({ sponsor }) => {
  return (
    <div className="flex flex-col gap-3 pt-2">
      <div className="font-bold text-lg">{sponsor.name}</div>
      <div className="text-sm">{sponsor.summary}</div>
    </div>
  );
};

export default Sposor;
