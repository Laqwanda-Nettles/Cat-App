import Loading from "@/components/Loading";
import NavBar from "@/components/Navbar";
import PokemonCard from "@/components/PokemonCard";
import { useEffect, useState } from "react";

export default function Pokemon() {
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);

  const URL = "/api/pokemon";

  async function fetchPokemon(name = "pikachu") {
    try {
      const result = await fetch(URL + `?name=${name}`);
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
      {loading ? (
        <div className="flex justify-center my-10">
          <Loading />
          <p className="font-bold text-3xl text-red-600">I Choose You ...</p>
        </div>
      ) : (
        <div>
          <PokemonCard name={pokemon.name} imgSrc={pokemon.img} />
          <section className="bg-[#219ebc] text-white flex flex-col items-center p-3 capitalize">
            <h2 className="text-3xl font-bold">Details about {pokemon.name}</h2>
            <p className="text-2xl">Type: {pokemon.type}</p>
            <h3 className="text-2xl font-semibold">
              {pokemon.name}&apos;s Abilities
            </h3>
            <ul className="text-xl">
              <li>🥏 {pokemon.ability}</li>
              <li>🥏 {pokemon.secondAbility}</li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}
