async function getAnimeTrivia() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=5&category=31"
  );
  const data = await response.json();
  return data;
}

export default async function handler(req, res) {
  const trivia = await getAnimeTrivia();
  console.log(trivia);
  res.status(200).json({
    question: trivia.results[0].question,
    difficulty: trivia.results[0].difficulty,
    answer: trivia.results[0].correct_answer,
  });
}
