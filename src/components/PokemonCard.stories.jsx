import PokemonCard from './PokemonCard';

const meta = {
  component: PokemonCard,
};

export default meta;

export const Default = {
  args: {
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    name: "Pickachu"
  }
};

export const Charmander = {
  args: {
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    name: "Charmander"
  }
};

export const Squirtle = {
  args: {
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    name: "Squirtle"
  }
};