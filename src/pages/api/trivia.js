async function getAnimeTrivia() {
  const url = "https://opentdb.com/api.php?amount=1&category=31";
  const result = await fetch(url);

  if (!result.ok) {
    throw new Error(`API responded with status: ${result.status}`);
  }
  const data = await result.json();
  return data;
}

export default async function handler(req, res) {
  try {
    const trivia = await getAnimeTrivia();

    if (!trivia.results || trivia.results.length === 0) {
      throw new Error("No trivia results found");
    }

    const responseData = {
      question: trivia.results[0].question,
      difficulty: trivia.results[0].difficulty,
      answer: trivia.results[0].correct_answer,
    };
    res.status(200).json(responseData);
  } catch (error) {
    console.error("Error fetching trivia data: ", error);
    res
      .status(500)
      .json({ error: error.message || "Failed to fetch trivia data." });
  }
}
