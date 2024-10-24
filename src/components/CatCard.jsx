export default function CatCard({ name, imgSrc }) {
  return (
    <div className="m-4 p-4 w-full flex flex-col justify-center items-center">
      <div className="bg-slate-50 shadow-2xl shadow-[#8ecae6] hover:shadow-[#ffb703] hover:-translate-y-1 hover:scale-105 p-4 rounded-xl duration-300">
        <h2 className="text-3xl text-center m-4 font-semibold text-[#22577a]">
          {name}
        </h2>
        <img
          className="rounded-md h-[400px] w-[350px] object-cover"
          src={imgSrc}
          alt={name}
        />
      </div>
    </div>
  );
}
