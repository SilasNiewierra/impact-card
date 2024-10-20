import React from "react";

interface Props {
  buttonText: string;
  detailsUrl: string;
}

const DetailButton: React.FC<Props> = ({ buttonText, detailsUrl }) => {
  const handleRoutingClick = (event: any, url: string) => {
    event.stopPropagation();
    window.open(url, "_blank");
  };

  return (
    <button
      className="rounded-3xl bg-white bg-opacity-30 px-3 py-1 font-bold text-sm hover:bg-opacity-40"
      onClick={(e) => handleRoutingClick(e, detailsUrl)}
    >
      {buttonText}
    </button>
  );
};

export default DetailButton;
