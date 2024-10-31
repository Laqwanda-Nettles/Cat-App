async function getPokemon() {
  const url = "https://pokeapi.co/api/v2/pokemon/squirtle";
  const result = await fetch(url);
  const data = await result.json();
  return data;
}

// handles requests and response
export default async function handler(req, res) {
  const pokemondata = await getPokemon();
  console.log(pokemondata);
  res.status(200).json({
    name: pokemondata.name,
    ability: pokemondata.abilities[0].ability.name,
    secondAbility: pokemondata.abilities[1].ability.name,
    type: pokemondata.types[0].type.name,
  });
}
