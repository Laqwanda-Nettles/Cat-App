import PropTypes from "prop-types";
export default function PokemonCard({ name, imgSrc }) {
  return (
    <div className="m-4 p-4 w-full flex flex-col justify-center items-center">
      <div className="bg-slate-50 shadow-2xl shadow-[#cc0000] hover:shadow-[#ffde00] hover:-translate-y-1 hover:scale-105 p-4 rounded-xl duration-300">
        <h2 className="capitalize text-3xl text-center m-4 font-semibold text-[#3b4cca]">
          {name}
        </h2>
        <img
          className="rounded-md h-[300px] w-[250px] object-cover bg-gradient-to-t from-cyan-300 to-blue-500 hover:bg-gradient-to-b "
          src={imgSrc}
          alt={name}
        />
      </div>
    </div>
  );
}

PokemonCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
