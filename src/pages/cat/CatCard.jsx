export default function CatCard({ name, imgSrc }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imgSrc} alt={name} />
    </div>
  );
}
