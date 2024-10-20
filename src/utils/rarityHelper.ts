import { shadeColor } from "./colorHelper";
import { Rarity } from "./types";

const getRarity = (totalCollectionCount: number, color: string): Rarity => {
  let rarity: "common" | "rare" | "mint" | "epic" = "common";

  if (totalCollectionCount <= 500) rarity = "epic";
  else if (totalCollectionCount <= 1000) rarity = "mint";
  else if (totalCollectionCount <= 5000) rarity = "rare";

  const rarityItems: { [key in typeof rarity]: Rarity } = {
    common: {
      value: "common",
      label: "",
      cssClassName: "",
      colors: ["#ffffff", color, shadeColor(color, 50), shadeColor(color, 100)],
    },
    rare: {
      value: "rare",
      label: "Rare",
      cssClassName: "bg-gradient-to-r from-gray-300 via-gray-500 to-gray-700",
      colors: ["#D1D5DB", "#6B7280", "#374151"],
    },
    mint: {
      value: "mint",
      label: "Mint",
      cssClassName:
        "bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500",
      colors: ["#34D399", "#14B8A6", "#22D3EE"],
    },
    epic: {
      value: "epic",
      label: "Epic",
      cssClassName: "from-pink-500 via-cyan-500 to-violet-500 animate-pulse",
      colors: ["#6366F1", "#A855F7", "#EC4899"],
    },
  };

  return rarityItems[rarity];
};

export default getRarity;
