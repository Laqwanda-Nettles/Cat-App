import { useEffect, useState } from "react";
import NavBar from "../Navbar";
import CatCard from "./CatCard";
import CatDetails from "./CatDetails";

export default function Cat() {
  // Declaring state variable 'cat' to store cat data fetched from API
  // 'setCat' is the function to update the 'cat' state
  const [cat, setCat] = useState({});

  // URL for the API to fetch cat data
  const url = "https://cats-cats-cats-demo.deno.dev/cats/bombay";

  // Asynchronous function to fetch data from the API
  async function fetchCat() {
    try {
      const result = await fetch(url);
      const data = await result.json();
      // Updating the state with the fetched data
      setCat(data);
    } catch (error) {
      // Error handling in case API request fails
      console.error("Error fetching API data: ", error);
    }
  }

  // useEffect to trigger the fetchCat function once the component is mounted
  useEffect(() => {
    // Invoking fetchCat function to get data when component loads
    fetchCat();
  }, []); // Empty dependency array ensures this only runs once

  return (
    <>
      <NavBar />
      <h1 className="text-4xl text-center font-bold">Cat of the Day!</h1>
      <CatCard name={cat.name} imgSrc={cat.image_link} />
      <CatDetails
        origin={cat.origin}
        expectancy={`${cat.min_life_expectancy} - ${cat.max_life_expectancy} years`}
        familyFriendly={cat.family_friendly}
        shedding={cat.shedding}
        health={cat.general_health}
        playfulness={cat.playfulness}
        grooming={cat.grooming}
      />
    </>
  );
}
