import NavBar from "@/components/Navbar";
import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const URL = "https://pokeapi.co/api/v2/pokemon/pikachu";

  async function fetchPokemon() {
    try {
      const result = await fetch(URL);
      const data = await result.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="text-4xl text-center font-bold text-[#3d7dca]">
        Gotta Catch Them All!
      </h1>
      <PokemonCard
        name={pokemon.name}
        imgSrc={pokemon.sprites?.front_default}
      />
    </div>
  );
}
