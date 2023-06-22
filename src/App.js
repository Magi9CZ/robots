import './App.css';
import GameBoard from "./components/GameBoard";
import {useState} from "react";
import {createRoot} from "react-dom";

function App() {

    return (
    <div className="App">
      <GameBoard/>
    </div>
  );
}

export default App;
