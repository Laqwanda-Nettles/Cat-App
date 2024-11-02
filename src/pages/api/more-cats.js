const API_KEY = process.env.NINJA_API_KEY;
async function fetchMoreCats(name) {
  const URL = `https://api.api-ninjas.com/v1/cats?name=${name}`;
  const result = await fetch(URL, {
    headers: { "X-Api-Key": API_KEY },
  });
  const data = await result.json();
  return data;
}

export default async function handler(req, res) {
  const { name } = req.query;
  try {
    const cats = await fetchMoreCats(name);
    const responseData = cats.map((cat) => ({
      name: cat.name,
      origin: cat.origin,
      min_life: cat.min_life_expectancy,
      max_life: cat.max_life_expectancy,
      length: cat.length,
      min_weight: cat.min_weight,
      max_weight: cat.max_weight,
      image: cat.image_link,
    }));
    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch multiple cats data." });
    console.error("Error fetching cats data: ", error);
  }
}
