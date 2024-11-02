const WEATHER_KEY = process.env.WEATHER_API;

async function fetchWeather(city) {
  const URL = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${WEATHER_KEY}`;
  const result = await fetch(URL);
  const data = await result.json();
  return data;
}

export default async function handler(req, res) {
  const { city } = req.query;
  try {
    const weatherData = await fetchWeather(city);
    const responseData = {};
    if (weatherData.data.length > 0) {
      const weather = weatherData.data[0];
      responseData.temp = weather.temp;
      responseData.desc = weather.weather.description;
      responseData.city = city;
    } else {
      responseData.error = "Weather data not available";
    }
    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
    console.error("Error fetching data: ", error);
  }
}
