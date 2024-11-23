let express = require('express');
let router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Route to handle the weather request from the client
router.post('/forecast', async (req, res) => {
  /**
   * Utility function to generate a weekly forecast
   */
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Stormy'];
    const forecast = [];
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    days.forEach(day => {
      const condition = conditions[Math.floor(Math.random() * conditions.length)];
      const temperature = Math.floor(Math.random() * 15) + 15; // Random temp between 15°C and 30°C
      forecast.push({ day, forecast: `${condition}, ${temperature}°C` });
    });
    res.json({forecast});
});



module.exports = router;
