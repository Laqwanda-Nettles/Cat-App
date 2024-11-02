async function getPokemon(name) {
  const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

// handles requests and response
export default async function handler(req, res) {
  const { name } = req.query;

  try {
    const pokemondata = await getPokemon(name);
    const responseData = {
      name: pokemondata.name,
      ability: pokemondata.abilities[0].ability.name,
      secondAbility:
        pokemondata.abilities[1]?.ability.name || "No second ability",
      type: pokemondata.types[0].type.name,
      img: pokemondata.sprites.front_default,
    };
    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Pokemon data." });
    console.error("Error fetching Pokemon data: ", error);
  }
}
