import React from "react";
import "./App.css";
import cards from "./utils/demoData";
import RevealCard from "./components/RevealCard/RevealCard";

function App() {
  return (
    <div className="App">
      <div className="with-blur-backdrop overflow-scroll">
        <div className="flex justify-center items-center h-full flex-wrap gap-10 py-10 overflow-scroll">
          {cards.map((card) => (
            <RevealCard {...card} key={`${card.id}-${card.cardNumber}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
