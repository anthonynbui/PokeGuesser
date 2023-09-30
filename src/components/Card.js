import { useEffect, useState } from "react";
import { getPokemonList, getRandomPokemon } from "../api/utils";
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

function Card() {
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

  console.log(pokemon);

  return (
    <div>
      <div>
        {rendered ? (
          <img src={pokemon.sprites.front_default} width="200" />
        ) : (
          <a>?</a>
        )}
      </div>
      <div>
          {rendered ? pokemon.types.map((t) => (
            <Button variant="contained">{t.type.name}</Button>
          )) : ''}
      </div>
    </div>
  );
}

export default Card;
