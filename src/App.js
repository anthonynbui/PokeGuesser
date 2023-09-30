import logo from "./logo.svg";
import "./App.css";
import { getPokemonList, getRandomPokemon } from "./api/utils";
import { useEffect, useState } from "react";
import Card from './components/Card';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Card />
      </header>
    </div>
  );
}

export default App;
