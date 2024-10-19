export const cards = [
  {
    title: "Whale Shark Rescue",
    backgroundImageSrc: require("../assets/moana-background.jpg"),

    rewards: [
      {
        iconSrc: require("../assets/icon-ticket.png"),
        title: "Free entry to Sea Show",
        description:
          "This reward allows you and a friend free entry to the Aquarium as well as the special Show.",
        detailsUrl: "https://www.google.com.au",
      },
      {
        iconSrc: require("../assets/icon-mic.png"),
        title: "10% off Disney in Concert",
        description:
          "Enjoy a special night with your favorite tropical Disney movie 'Moana' and a huge live orchestra accompanying it. Get 10% with this impact card.",
        detailsUrl: "https://www.google.com.au",
      },
    ],
    impact: {
      iconSrc: require("../assets/icon-tree.png"),
      metric: "5",
      text: "Reef kits planted",
    },
    totalImpact: {
      iconSrc: require("../assets/icon-globe.png"),
      metric: "1%",
      text: "Contributed To Total",
    },
    sponsor: {
      name: "Walt Disney",
      logoSrc: require("../assets/walt-disney.png"),
      detailsUrl: "https://www.disney.com/",
      summary:
        "Walt Disney, a pioneering figure in the entertainment industry, co-founded The Walt Disney Company with a vision to create magical experiences for audiences of all ages. The company's mission is to entertain, inform, and inspire people through the power of storytelling, innovation, and creativity. By blending imagination with cutting-edge technology, Disney continues to captivate audiences worldwide, fostering a sense of wonder and joy through its beloved characters, films, theme parks, and diverse media platforms.",
    },
    audienceOwner: {
      name: "Shark Whale Collaborative",
      logoSrc: require("../assets/shark-conservation-group-logo.png"),
      detailsUrl: "https://www.youtube.com/watch?v=SGmtjeuEtow",
      summary:
        "Our organization is dedicated to the conservation of the endangered Shark Whale. Through strategic measures to deter hunting, enhance the Shark Whale's food supply, and create new habitats, we significantly contribute to the survival of this remarkable species. Our efforts play a vital role in ensuring the long-term sustainability and health of Shark Whale populations.",
    },
    proofs: [
      {
        title: "Canopy Blue: Shark Restoration",
        logoSrc: require("../assets/proof-blue.png"),
        commitment: "5000 Reef Kits",
        detailsUrl: "https://www.google.com.au",
      },
      {
        title: "Colac Gold: Shark Reservoir",
        logoSrc: require("../assets/proof-gold.png"),
        commitment: "1000 New Shark Breeds",
        detailsUrl: "https://www.google.com.au",
      },
    ],
    count: 5,
    totalCount: 300,
  },
];
