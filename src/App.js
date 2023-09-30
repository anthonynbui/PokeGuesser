import logo from "./logo.svg";
import "./App.css";
import { getPokemonList, getRandomPokemon } from "./api/utils";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState({});
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    async function fetchRandomPokemonData() {
      try {
        const randPokemon = await getRandomPokemon();
        setPokemon(randPokemon);
        setRendered(true);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRandomPokemonData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {rendered ? <img src={pokemon.sprites.front_default} width='300'/> : <a>No</a>}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
