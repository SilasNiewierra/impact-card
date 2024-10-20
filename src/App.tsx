import React from "react";
import "./App.css";
import FlipCard from "./components/FlipCard/FlipCard";
import { cards } from "./utils/demoData";

function App() {
  return (
    <div className="App">
      <div className="with-blur-backdrop overflow-scroll">
        <div className="flex justify-center items-center pt-20">
          {cards.map((card) => (
            <FlipCard {...card} key={`${card.id}-${card.cardNumber}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
