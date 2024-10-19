import catData from "../../data/cat-data.json";
import NavBar from "../Navbar";
import CatCard from "./CatCard";
import CatDetails from "./CatDetails";
export default function Cat() {
  console.log(catData);
  return (
    <>
      <NavBar />
      <h1 className="text-4xl text-center font-bold">Cat of the Day!</h1>
      <CatCard name={catData.name} imgSrc={catData.image_link} />
      <CatDetails
        origin={catData.origin}
        expectancy={`${catData.min_life_expectancy} - ${catData.max_life_expectancy} years`}
        familyFriendly={catData.family_friendly}
        shedding={catData.shedding}
        health={catData.general_health}
        playfulness={catData.playfulness}
        grooming={catData.grooming}
      />
    </>
  );
}
