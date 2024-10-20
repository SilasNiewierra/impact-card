import React from "react";
import { AudienceOwner } from "../../../../utils/types";

interface Props {
  audienceOwner: AudienceOwner;
}

const Project: React.FC<Props> = ({ audienceOwner }) => {
  return (
    <div className="flex flex-col gap-3 pt-2">
      <div className="font-bold text-lg">{audienceOwner.name}</div>
      <div className="text-sm"> {audienceOwner.summary}</div>
    </div>
  );
};

export default Project;
