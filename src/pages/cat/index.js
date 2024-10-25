import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import CatCard from "../../components/CatCard";
import CatDetails from "../../components/CatDetails";
import Loading from "@/components/Loading";

export default function Cat() {
  // Declaring state variable 'cat' to store cat data fetched from API
  // 'setCat' is the function to update the 'cat' state
  const [cat, setCat] = useState({});

  //Declaring 'loading' state to manage loading visibility
  const [loading, setLoading] = useState(true);

  // URL for the API to fetch cat data
  const url = "https://cats-cats-cats-demo.deno.dev/cats/bombay";

  // Asynchronous function to fetch data from the API
  async function fetchCat() {
    try {
      const result = await fetch(url);
      const data = await result.json();
      // Updating the 'cat' state with the fetched data
      setCat(data);
    } catch (error) {
      // Error handling in case API request fails
      console.error("Error fetching API data: ", error);
    } finally {
      // Setting 'loading' to false once data is fetched or error occurs
      setLoading(false);
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

      {loading ? (
        <div className="flex justify-center my-10">
          <Loading />
          <p className="ml-4 text-2xl font-bold text-[#0077b6]">
            Loading cat...
          </p>
        </div>
      ) : (
        <>
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
      )}
    </>
  );
}
