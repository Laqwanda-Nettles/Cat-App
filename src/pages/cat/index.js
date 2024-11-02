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
  const [loading, setLoading] = useState(false);

  const [catQuery, setCatQuery] = useState(""); // State to store cat breed query

  // URL for the API to fetch cat data
  const url = "/api/cat";

  // Asynchronous function to fetch data from the API
  async function fetchCat(catquery = "khao") {
    setLoading(true);
    try {
      const result = await fetch(url + `?catquery=${catquery}`);
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

  // Handles form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (catQuery) {
      fetchCat(catQuery);
    }
  };

  return (
    <>
      <NavBar />
      <h1 className="text-4xl text-center font-bold">Cat of the Day!</h1>

      <form onSubmit={handleSubmit} className="flex justify-center mt-4">
        <label className="text-lg m-2 text-[#219ebc] font-semibold">
          Search For A Cat:
          <input
            type="text"
            value={catQuery}
            onChange={(e) => setCatQuery(e.target.value)}
            placeholder="Enter cat breed..."
            className="border p-2 ml-2 rounded text-[#023e8a]"
          />
          <button
            type="submit"
            className="ml-2 p-2 bg-[#0077b6] text-white rounded hover:bg-[#00b4d8] shadow-md shadow-amber-400 hover:shadow-amber-300 hover:scale-105 duration-300"
          >
            Search
          </button>
        </label>
      </form>

      {loading ? (
        <div className="flex justify-center my-10">
          <Loading />
          <p className="ml-4 text-2xl font-bold text-[#0077b6]">
            Loading cat...
          </p>
        </div>
      ) : (
        <>
          <CatCard name={cat.name} imgSrc={cat.image} />
          <CatDetails
            origin={cat.origin}
            expectancy={`${cat.min_life} - ${cat.max_life} years`}
            familyFriendly={cat.family_friendly}
            shedding={cat.shedding}
            health={cat.health}
            playfulness={cat.playful}
            grooming={cat.grooming}
          />
        </>
      )}
    </>
  );
}
