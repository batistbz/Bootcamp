import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])
  useEffect(() => {
      const fetchPokemons = async () => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9");
        const data = await response.json();

        const detailedPokemon = await Promise.all(
          data.results.map(async (pokemon) => {
            const pokemonResponse = await fetch(pokemon.url);
            return await pokemonResponse.json();
          })
        );

        setPokemons(detailedPokemon);
        };
      });

  return (
    <>
    </>
  );
}

export default App;
