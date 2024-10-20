export const cards = [
  {
    id: "whale-shark-rescue",
    title: "Gentle Giants of the Deep",
    backgroundImageSrc: require("../assets/moana-bg.jpg"),
    color: "#111827",
    rewards: [
      {
        id: "free-sea-show",
        iconSrc: require("../assets/icons/icon-ticket.png"),
        title: "Free entry to Sea Show",
        description:
          "This reward allows you and a friend free entry to the Aquarium as well as the special Show.",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
      {
        id: "discount-disney-concert-10",
        iconSrc: require("../assets/icons/icon-mic.png"),
        title: "10% off Disney in Concert",
        description:
          "Enjoy a special night with your favorite tropical Disney movie 'Moana' and a huge live orchestra accompanying it. Get 10% with this impact card.",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
    ],
    impact: {
      iconSrc: require("../assets/icons/icon-tree.png"),
      metric: "5",
      text: "Habitats protected",
    },
    totalImpact: {
      iconSrc: require("../assets/icons/icon-globe.png"),
      metric: "1%",
      text: "Contributed To Total",
    },
    sponsor: {
      name: "Walt Disney",
      logoSrc: require("../assets/walt-disney.png"),
      detailsUrl: "https://silas-niewierra.web.app/",
      summary:
        "Walt Disney, a pioneering figure in the entertainment industry, co-founded The Walt Disney Company with a vision to create magical experiences for audiences of all ages. The company's mission is to entertain, inform, and inspire people through the power of storytelling, innovation, and creativity. By blending imagination with cutting-edge technology, Disney continues to captivate audiences worldwide, fostering a sense of wonder and joy through its beloved characters, films, theme parks, and diverse media platforms.",
    },
    audienceOwner: {
      name: "Shark Whale Collaborative",
      logoSrc: require("../assets/shark-conservation-group-logo.png"),
      detailsUrl: "https://silas-niewierra.web.app/",
      summary:
        "Our organization is dedicated to the conservation of the endangered Shark Whale. Through strategic measures to deter hunting, enhance the Shark Whale's food supply, and create new habitats, we significantly contribute to the survival of this remarkable species. Our efforts play a vital role in ensuring the long-term sustainability and health of Shark Whale populations.",
    },
    proofs: [
      {
        id: "canopy-blue-shark-rescue",
        title: "Canopy Blue: Shark Rescue",
        logoSrc: require("../assets/proof-blue.png"),
        commitment: "5000 Reef Kits",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
      {
        id: "colac-gold-shark-reservoir",
        title: "Colac Gold: Shark Reservoir",
        logoSrc: require("../assets/proof-gold.png"),
        commitment: "1000 New Shark Breeds",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
    ],
    cardNumber: 5,
    totalCollectionCount: 10000,
  },
  {
    id: "sea-turtle-conservation",
    title: "Ancient Navigators",
    backgroundImageSrc: require("../assets/turtle-conservation-bg.jpg"),
    color: "#111827",
    rewards: [
      {
        id: "free-turtle-adoption",
        iconSrc: require("../assets/icons/icon-turtle.png"),
        title: "Free Turtle Adoption",
        description:
          "Adopt a sea turtle and receive updates on its journey and conservation efforts.",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
      {
        id: "discount-disney-merch-25",
        iconSrc: require("../assets/icons/icon-shirt.png"),
        title: "25% off Disney Merchandise",
        description:
          "Enjoy 25% off on all Disney merchandise when you support our turtle conservation efforts.",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
    ],
    impact: {
      iconSrc: require("../assets/icons/icon-turtle.png"),
      metric: "200",
      text: "Turtle nests protected",
    },
    totalImpact: {
      iconSrc: require("../assets/icons/icon-globe.png"),
      metric: "4%",
      text: "Contributed To Total",
    },
    sponsor: {
      name: "Walt Disney",
      logoSrc: require("../assets/walt-disney.png"),
      detailsUrl: "https://silas-niewierra.web.app/",
      summary:
        "Walt Disney, a pioneering figure in the entertainment industry, co-founded The Walt Disney Company with a vision to create magical experiences for audiences of all ages. The company's mission is to entertain, inform, and inspire people through the power of storytelling, innovation, and creativity. By blending imagination with cutting-edge technology, Disney continues to captivate audiences worldwide, fostering a sense of wonder and joy through its beloved characters, films, theme parks, and diverse media platforms.",
    },
    audienceOwner: {
      name: "Turtle Protection Alliance",
      logoSrc:
        "https://images.squarespace-cdn.com/content/v1/5486159de4b074841b303621/743dc651-eb9a-4bb3-bf3c-f0508ffee4d8/TC_Logo_Classic_Green+White-01.png?format=1500w",
      detailsUrl: "https://silas-niewierra.web.app/",
      summary:
        "We are dedicated to the protection and rehabilitation of sea turtles. Our efforts include nest monitoring, community education, and habitat restoration to ensure these magnificent creatures thrive.",
    },
    proofs: [
      {
        id: "green-sea-turtle-project",
        title: "Green Sea: Turtle Project",
        logoSrc: require("../assets/proof-blue.png"),
        commitment: "1,000 Turtle Nests",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
      {
        id: "turtle-gold-nurturing-initiative",
        title: "Turtle Gold: Nurturing Initiative",
        logoSrc: require("../assets/proof-gold.png"),
        commitment: "5,000 Hatchlings Protected",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
    ],
    cardNumber: 8,
    totalCollectionCount: 5000,
  },
  {
    id: "plastic-pollution-reduction",
    title: "Te Fiti's Tears",
    backgroundImageSrc: require("../assets/plastic-pollution-bg.jpg"),
    color: "#111827",
    rewards: [
      {
        id: "free-beach-cleanup-kit",
        iconSrc: require("../assets/icons/icon-cleanup-kit.png"),
        title: "Free Beach Cleanup Kit",
        description:
          "Receive a beach cleanup kit to help reduce plastic waste along our shorelines.",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
      {
        id: "discount-disney-theme-park-20",
        iconSrc: require("../assets/icons/icon-ticket.png"),
        title: "20% off Disney Theme Park Tickets",
        description:
          "Get 20% off your next visit to a Disney Theme Park when you contribute to this initiative.",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
    ],
    impact: {
      iconSrc: require("../assets/icons/icon-stars.png"),
      metric: "2,500",
      text: "Pounds of plastic collected",
    },
    totalImpact: {
      iconSrc: require("../assets/icons/icon-globe.png"),
      metric: "3%",
      text: "Contributed To Total",
    },
    sponsor: {
      name: "Walt Disney",
      logoSrc: require("../assets/walt-disney.png"),
      detailsUrl: "https://silas-niewierra.web.app/",
      summary:
        "Walt Disney, a pioneering figure in the entertainment industry, co-founded The Walt Disney Company with a vision to create magical experiences for audiences of all ages. The company's mission is to entertain, inform, and inspire people through the power of storytelling, innovation, and creativity. By blending imagination with cutting-edge technology, Disney continues to captivate audiences worldwide, fostering a sense of wonder and joy through its beloved characters, films, theme parks, and diverse media platforms.",
    },
    audienceOwner: {
      name: "Ocean Clean-Up Coalition",
      logoSrc:
        "https://images.squarespace-cdn.com/content/v1/5a55250549fc2b60134ed6cf/1720279541368-U07GE1SCK8UKM5MSK8PU/Official+Verified+Partner+White.png?format=500w",
      detailsUrl: "https://silas-niewierra.web.app/",
      summary:
        "Dedicated to reducing plastic pollution in our oceans, our organization works on innovative cleanup projects and advocates for sustainable waste management practices.",
    },
    proofs: [
      {
        id: "cleanup-blue-plastic-project",
        title: "Cleanup Blue: Plastic Project",
        logoSrc: require("../assets/proof-blue.png"),
        commitment: "5,000 Pounds of Plastic",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
      {
        id: "reduce-gold-plastic-initiative",
        title: "Reduce Gold: Plastic Initiative",
        logoSrc: require("../assets/proof-gold.png"),
        commitment: "10,000 Plastic Bottles",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
    ],
    cardNumber: 7,
    totalCollectionCount: 1000,
  },
  {
    id: "coral-reef-restoration",
    title: "The Ocean's Heart",
    backgroundImageSrc: require("../assets/coral-reef-bg.jpg"),
    color: "#111827",
    rewards: [
      {
        id: "free-snorkeling-experience",
        iconSrc: require("../assets/icons/icon-snorkel.png"),
        title: "Free Snorkeling Experience",
        description:
          "This reward grants you and a friend a free snorkeling session in the beautiful coral reefs.",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
      {
        id: "discount-disney-movie-15",
        iconSrc: require("../assets/icons/icon-movie.png"),
        title: "15% off Disney Nature Film",
        description:
          "Get a 15% discount on any Disney Nature film showcasing the beauty of marine life.",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
    ],
    impact: {
      iconSrc: require("../assets/icons/icon-coral.png"),
      metric: "50",
      text: "Coral fragments planted",
    },
    totalImpact: {
      iconSrc: require("../assets/icons/icon-globe.png"),
      metric: "2%",
      text: "Contributed To Total",
    },
    sponsor: {
      name: "Walt Disney",
      logoSrc: require("../assets/walt-disney.png"),
      detailsUrl: "https://silas-niewierra.web.app/",
      summary:
        "Walt Disney, a pioneering figure in the entertainment industry, co-founded The Walt Disney Company with a vision to create magical experiences for audiences of all ages. The company's mission is to entertain, inform, and inspire people through the power of storytelling, innovation, and creativity. By blending imagination with cutting-edge technology, Disney continues to captivate audiences worldwide, fostering a sense of wonder and joy through its beloved characters, films, theme parks, and diverse media platforms.",
    },
    audienceOwner: {
      name: "Coral Conservation",
      logoSrc:
        "https://images.squarespace-cdn.com/content/v1/5ffdee34dded0c5b6608704c/70390744-7f09-4ae5-876e-e2d4ae62bc03/ReefInstituteMain.pdf.png",
      detailsUrl: "https://silas-niewierra.web.app/",
      summary:
        "Our organization is committed to the restoration and preservation of coral reefs. We focus on innovative techniques to restore coral habitats, enhance biodiversity, and raise awareness about marine conservation.",
    },
    proofs: [
      {
        id: "ocean-blue-coral-project",
        title: "Ocean Blue: Coral Project",
        logoSrc: require("../assets/proof-blue.png"),
        commitment: "10,000 Coral Fragments",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
      {
        id: "reefs-gold-coral-initiative",
        title: "Reefs Gold: Coral Initiative",
        logoSrc: require("../assets/proof-gold.png"),
        commitment: "1,500 New Coral Species",
        detailsUrl: "https://silas-niewierra.web.app/",
      },
    ],
    cardNumber: 6,
    totalCollectionCount: 100,
  },
];
