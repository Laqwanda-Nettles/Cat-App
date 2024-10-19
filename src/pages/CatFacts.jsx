import { useState } from "react";

const catFacts = [
  "Cats sleep for 70% of their lives.",
  "A group of cats is called a clowder.",
  "Cats can jump up to six times their body length.",
  "A cat's nose is as unique as a human fingerprint.",
];

export default function CatFacts() {
  const [randomFact, setRandomFact] = useState(catFacts[0]);

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setRandomFact(catFacts[randomIndex]);
  };

  return (
    <div className="mt-10 text-center bg-slate-50 max-w-[500px] mx-auto p-10 rounded-md shadow-lg shadow-cyan-600 hover:shadow-amber-600">
      <h2 className="text-2xl font-bold">Random Cat Fact</h2>
      <p className="mt-2 text-xl font-semibold text-[#1758A2]">{randomFact}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 shadow-md shadow-amber-600 text-white rounded hover:bg-amber-600 hover:shadow-lg hover:shadow-cyan-500 hover:scale-105 duration-200"
        onClick={getRandomFact}
      >
        Show Another Fact
      </button>
    </div>
  );
}
