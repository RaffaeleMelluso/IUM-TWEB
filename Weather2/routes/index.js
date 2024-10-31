let express = require('express');
let router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route to handle the weather request from the client
router.post('/getWeather', async (req, res) =>
{
  const { city, date } = req.body;
  if (!city || !date)
    res.status(500).json({ message: "data received is incorrect" });

  try {
    // Send request to data server 1 for current weather
    const currentWeatherResponse = await axios.post('http://localhost:3001/currentWeather', { city, date });
    const currentWeather = currentWeatherResponse.data.currentWeather;

    // Send request to data server 2 for forecast
    const forecastResponse = await axios.post('http://localhost:3002/forecast', { city, date });
    const forecast = forecastResponse.data.forecast;
    // Aggregate responses and send back to client
    res.json({
      city,
      date,
      currentWeather,
      forecast
    });

  } catch (error) {
    console.error("Error fetching data from data servers:", error);
    res.status(500).json({ message: "Error retrieving weather data. Please try again later." });
  }
});


//note: the route could also be implemented using promise all
router.post('/getWeather_with_promise_all', async (req, res) => {
  const { city, date } = req.body;

  try {
    // Create promises for both data server requests
    const currentWeatherPromise = axios.post('http://localhost:3001/currentWeather', { city, date });
    const forecastPromise = axios.post('http://localhost:3002/forecast', { city, date });

    // Use Promise.all to run both requests simultaneously
    const [currentWeatherResponse, forecastResponse] = await Promise.all([currentWeatherPromise, forecastPromise]);

    // Extract data from both responses
    const currentWeather = currentWeatherResponse.data.currentWeather;
    const forecast = forecastResponse.data.forecast;

    // Aggregate responses and send back to client
    res.json({
      city,
      date,
      currentWeather,
      forecast
    });

  } catch (error) {
    console.error("Error fetching data from data servers:", error);
    res.status(500).json({ message: "Error retrieving weather data. Please try again later." });
  }
});
module.exports = router;
