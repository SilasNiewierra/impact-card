import { Rarity } from "./types";

const getRarity = (totalCollectionCount: number): Rarity => {

  let rarity: 'common' | 'rare' | 'mint' | 'epic' = "common";

  if (totalCollectionCount <= 500) rarity = "epic";
  else if (totalCollectionCount <= 1000) rarity = "mint";
  else if (totalCollectionCount <= 5000) rarity = "rare";

  const rarityItems: { [key in typeof rarity]: Rarity } = {
    common: {
      value: "common",
      label: "",
      cssClassName: "",
    },
    rare: {
      value: "rare",
      label: "Rare",
      cssClassName: "bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700",
    },
    mint: {
      value: "mint",
      label: "Mint",
      cssClassName: "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500",
    },
    epic: {
      value: "epic",
      label: "Epic",
      cssClassName: "from-pink-500 via-cyan-500 to-violet-500",
    },
  };

  return rarityItems[rarity];
};

export default getRarity;
