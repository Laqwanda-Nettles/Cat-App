import { useEffect, useState } from "react";
import NavBar from "../../components/Navbar";
import FlipCard from "../../components/FlipCard";

export default function MoreCats() {
  // Declaring state variable 'cats' to store the array of cat data fetched from the API
  const [cats, setCats] = useState([]);

  // Declaring 'loading' state to manage loading visibility
  const [loading, setLoading] = useState(true);

  // URL for fetching multiple cat data from the API
  const URL = "/api/more-cats";

  // Asynchronous function to fetch multiple cat data from the API
  async function fetchCats(name = "n") {
    try {
      const result = await fetch(URL + `?name=${name}`);
      const data = await result.json();
      // Updating the 'cats' state with the fetched data
      setCats(data);
    } catch (error) {
      // Logging any errors that occur during the API request
      console.error("Error fetching API data: ", error);
    } finally {
      // Setting 'loading' to false once data is fetched or an error occurs
      setLoading(false);
    }
  }

  // Using useEffect to fetch the list of cats when the component mounts
  useEffect(() => {
    fetchCats(); // Call fetchCats when the component renders
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div>
      <NavBar />
      <h1 className="text-4xl text-center font-bold">More Cats!</h1>

      {loading ? (
        <div className="flex justify-center my-10">
          <p className="ml-4 text-2xl font-bold text-[#0077b6]">
            Loading cats...
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center items-center gap-4">
          {cats.map((cat, index) => (
            <FlipCard
              key={index}
              name={cat.name}
              imgSrc={cat.image}
              origin={cat.origin}
              expectancy={`${cat.min_life} - ${cat.max_life} years`}
              length={cat.length}
              weight={`${cat.min_weight} - ${cat.max_weight} lbs`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
