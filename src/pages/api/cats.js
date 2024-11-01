const API_KEY = process.env.NINJA_API_KEY;
async function getCatData(catquery) {
  const URL = `https://api.api-ninjas.com/v1/cats?name=${catquery}`;
  const result = await fetch(URL, {
    headers: { "X-Api-Key": API_KEY },
  });

  const data = await result.json();
  return data;
}

export default async function handler(req, res) {
  const { catquery } = req.query;
  try {
    const cat = await getCatData(catquery);

    const responseData = {};
    if (cat.length > 0) {
      responseData.name = cat[0].name;
      responseData.origin = cat[0].origin;
      responseData.length = cat[0].length;
      responseData.image = cat[0].image_link;
      responseData.min_life = cat[0].min_life_expectancy;
      responseData.max_life = cat[0].max_life_expectancy;
      responseData.health = cat[0].general_health;
      responseData.family_friendly = cat[0].family_friendly;
      responseData.shedding = cat[0].shedding;
      responseData.grooming = cat[0].grooming;
      responseData.playful = cat[0].playfulness;
    } else {
      responseData.error = "No Cats Were Found";
    }
    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: "Cat doesn't exist" });
    console.error("Error fetching data: ", error);
  }
}
