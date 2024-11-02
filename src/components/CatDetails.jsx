import StarRating from "./StarRating";

export default function CatDetails({
  origin,
  expectancy,
  familyFriendly,
  health,
  shedding,
  playfulness,
  grooming,
}) {
  return (
    <div className="mt-10 p-4 bg-[#70CEE6] w-full text-[#01141E]">
      <h2 className="font-semibold text-4xl text-center drop-shadow">
        About this cat:
      </h2>
      <div className="w-[290px] p-2 m-auto text-xl flex flex-col items-start">
        <p>
          <span className="font-semibold">Origin: </span>
          {origin}
        </p>
        <p>
          <span className="font-semibold">Life Expectancy: </span>
          {expectancy}
        </p>
      </div>

      <h3 className="text-3xl font-semibold text-center drop-shadow">
        Cat Ratings:
      </h3>
      <section className="w-40 m-auto text-xl flex flex-col items-start">
        <div>
          <span className="font-semibold">Family Friendly: </span>
          <StarRating rating={familyFriendly} />
        </div>
        <div>
          <span className="font-semibold">General Health: </span>
          <StarRating rating={health} />
        </div>
        <div>
          <span className="font-semibold">Shedding: </span>
          <StarRating rating={shedding} />
        </div>
        <div>
          <span className="font-semibold">Playfulness: </span>
          <StarRating rating={playfulness} />
        </div>
        <div>
          <span className="font-semibold">Grooming: </span>
          <StarRating rating={grooming} />
        </div>
      </section>
    </div>
  );
}
