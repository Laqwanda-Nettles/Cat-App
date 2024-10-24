import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import CatCard from "../../components/CatCard";

export default function MoreCats() {
  const [cats, setCats] = useState([]);

  const URL = "https://cats-cats-cats-demo.deno.dev/cats/bur?multi_cat=true";

  async function fetchCats() {
    try {
      const result = await fetch(URL);
      const data = await result.json();
      console.log(data);
      setCats(data);
    } catch (error) {
      console.error("Error fetching API data: ", error);
    }
  }

  useEffect(() => {
    console.log("Testing Useeffect hi >u<");
    fetchCats();
  }, []);

  return (
    <div>
      <NavBar />
      {cats.map((cat, index) => (
        <CatCard key={index} imgSrc={cat.image_link} name={cat.name} />
      ))}
    </div>
  );
}
