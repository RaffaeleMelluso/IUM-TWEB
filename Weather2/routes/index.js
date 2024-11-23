let express = require('express');
let router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Route to handle the weather request from the client
router.post('/currentWeather', async (req, res) => {
      const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Stormy'];
      const condition = conditions[Math.floor(Math.random() * conditions.length)];
      const temperature = Math.floor(Math.random() * 15) + 15; // Random temp between 15°C and 30°C
      //return `${condition}, ${temperature}°C`;
      res.json({ currentWeather: `${condition}, ${temperature}°C` });
}
);


module.exports = router;
