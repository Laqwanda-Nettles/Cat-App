import catData from "../../data/cat-data.json";
import CatCard from "./CatCard";
export default function Cat() {
  console.log(catData);
  return (
    <>
      <h1>Hi, I'm a cat.</h1>
      <CatCard name={catData.name} imgSrc={catData.image_link} />
    </>
  );
}
