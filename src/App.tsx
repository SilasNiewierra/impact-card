import React from "react";

import "./App.css";
import FrontCard from "./components/Card/FrontCard/FrontCard";
import BackCard from "./components/Card/BackCard/BackCard";
import Flip from "./components/FlipCard/FlipCard";

const cards = [
  {
    title: "Whale Shark Rescue",
    backgroundImageSrc: require("./assets/moana-background.jpg"),

    rewards: [
      {
        iconSrc: require("./assets/icon-ticket.png"),
        title: "Free entry to Sea Show",
        description:
          "This reward allows you and a friend free entry to the Aquarium as well as the special Show.",
      },
      {
        iconSrc: require("./assets/icon-mic.png"),
        title: "10% off Disney in Concert",
        description:
          "Enjoy a special night with your favorite tropical Disney movie 'Moana' and a huge live orchestra accompanying it. Get 10% with this impact card.",
      },
    ],
    impact: {
      iconSrc: require("./assets/icon-tree.png"),
      metric: "5",
      text: "Reef kits planted",
    },
    totalImpact: {
      iconSrc: require("./assets/icon-globe.png"),
      metric: "1%",
      text: "Contributed To Total",
    },
    sponsor: {
      name: "Walt Disney",
      logoSrc: require("./assets/walt-disney.png"),
      summary:
        "Walt Disney, a pioneering figure in the entertainment industry, co-founded The Walt Disney Company with a vision to create magical experiences for audiences of all ages. The company's mission is to entertain, inform, and inspire people through the power of storytelling, innovation, and creativity. By blending imagination with cutting-edge technology, Disney continues to captivate audiences worldwide, fostering a sense of wonder and joy through its beloved characters, films, theme parks, and diverse media platforms.",
    },
    audienceOwner: {
      name: "Shark Whale Collaborative",
      logoSrc: require("./assets/shark-conservation-group-logo.png"),
      summary:
        "Our organization is dedicated to the conservation of the endangered Shark Whale. Through strategic measures to deter hunting, enhance the Shark Whale's food supply, and create new habitats, we significantly contribute to the survival of this remarkable species. Our efforts play a vital role in ensuring the long-term sustainability and health of Shark Whale populations.",
    },
    linkToProjectDetails: "https://www.youtube.com/watch?v=SGmtjeuEtow",
    proofs: [
      {
        title: "Canopy Blue: Shark Restoration",
        logoSrc: require("./assets/proof-blue.png"),
        commitment: "5000 Reef Kits",
      },
      {
        title: "Colac Gold: Shark Reservoir",
        logoSrc: require("./assets/proof-gold.png"),
        commitment: "1000 New Shark Breeds",
      },
    ],
    count: 5,
    totalCount: 300,
  },
];

function App() {
  return (
    <div className="App">
      <div className="with-blur-backdrop">
        <div className="flex justify-center items-center pt-20">
          {cards.map((card) => (
            <Flip
              FrontComponent={<FrontCard {...card} />}
              BackComponent={<BackCard {...card} />}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
