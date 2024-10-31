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
  try {
    const cat = await getCatData("british");

    const responseData = {};
    if (cat.length > 0) {
      responseData.name = cat[0].name;
      responseData.origin = cat[0].origin;
      responseData.length = cat[0].length;
      responseData.image = cat[0].image_link;
    } else {
      responseData.error = "No Cats Were Found";
    }
    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: "Cat doesn't exist" });
    console.error("Error fetching data: ", error);
  }
}
