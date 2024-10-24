import { useState } from "react";

export default function FlipCard({
  name,
  imgSrc,
  origin,
  expectancy,
  length,
  weight,
}) {
  // State to track if the card is flipped
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to handle flipping the card
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? "flipped" : ""}`}
      onClick={flipCard}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front rounded-xl shadow-xl shadow-[#8ecae6] hover:shadow-[#ffb703] hover:-translate-y-1 hover:scale-105 duration-300">
          <img
            src={imgSrc}
            alt={name}
            className="w-full h-64 object-cover rounded-t-xl"
          />
          <h2 className="text-center text-2xl font-bold mt-5 text-[#22577a]">
            {name}
          </h2>
        </div>

        <div className="flip-card-back p-4 rounded-xl shadow-2xl shadow-[#ffb703]">
          <h2 className="text-center text-2xl font-bold text-[#22577a]">
            {name} Details
          </h2>
          <ul className="mt-4 text-lg leading-loose">
            <li>
              <strong>Origin: </strong>
              {origin}
            </li>
            <li>
              <strong>Life Expectancy: </strong>
              {expectancy}
            </li>
            <li>
              <strong>Length: </strong>
              {length}
            </li>
            <li>
              <strong>Weight: </strong>
              {weight}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
