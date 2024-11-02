import Loading from "@/components/Loading";
import NavBar from "@/components/Navbar";
import { useEffect, useState } from "react";

function decodeHtmlEntities(text) {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = text;
  return textArea.value;
}
export default function Trivia() {
  const [trivia, setTrivia] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For error handling

  const URL = "/api/trivia";

  async function fetchTrivia(attempt = 1) {
    try {
      const result = await fetch(URL);
      if (!result.ok) {
        const errorData = await result.json();
        throw new Error(errorData.error || "Failed to fetch trivia data");
      }

      const data = await result.json();
      setTrivia({
        question: decodeHtmlEntities(data.question),
        difficulty: data.difficulty,
        answer: decodeHtmlEntities(data.answer),
      });
    } catch (error) {
      console.error("Error fetching trivia data: ", error);

      // Handle 429 error with exponential backoff
      if (error.message.includes("429") && attempt <= 5) {
        const backoffTime = Math.pow(2, attempt) * 1000; // Exponential backoff
        setTimeout(() => {
          fetchTrivia(attempt + 1); // Retry fetching trivia
        }, backoffTime);
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchTrivia();
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="text-cyan-700 text-4xl font-extrabold text-center">
        Anime Trivia
      </h1>
      {loading ? (
        <div className="flex justify-center my-10">
          <Loading />
          <p className="font-bold text-3xl text-orange-600">
            Loading Trivia...
          </p>
        </div>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <section className="bg-neutral-100 m-5 p-5 text-3xl shadow-xl shadow-indigo-300 rounded-2xl">
          <div>
            <span className="font-bold text-cyan-700">Question: </span>
            {trivia.question}
          </div>
          <div>
            <span className="font-bold text-cyan-700 ">Difficulty: </span>
            {trivia.difficulty}
          </div>
          <div className="relative group">
            <p className="font-bold text-cyan-700">Answer:</p>
            <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {trivia.answer}
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
