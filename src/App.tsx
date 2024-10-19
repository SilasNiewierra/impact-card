import React from "react";
import "./App.css";
import FrontCard from "./components/Card/Front/Front";
import BackCard from "./components/Card/Back/Back";
import Flip from "./components/FlipCard/FlipCard";
import { cards } from "./utils/demoData";

function App() {
  return (
    <div className="App">
      <div className="with-blur-backdrop overflow-scroll">
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
