// Function to initialize the form with the current date and hide the results div
function init() {
    // get the current date to set the default in the form
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    document.getElementById('date').value = formattedDate;    // Set the date input's default value

    // Hide the weather results div initially
    document.getElementById('weatherResults').style.display = 'none';
}


/**
 * Function to handle the form submission and send data to the server via Axios
 */
function sendWeatherRequest() {
    // @todo Hide the weather results div when the button is clicked
    document.getElementById('weatherResults').style.display = 'none';
    // Get values from form fields
    const city = document.getElementById('city').value;
    // how to cope with a date
    const dateString = document.getElementById('date').value; // "YYYY-MM-DD" string
    const dateObject = new Date(dateString); // Converts to a Date object

    // @todo Send data to the server using Axios
    axios.post('/getWeather', { city, date: dateString })
        .then(response => {
            const { city, date, currentWeather, forecast } = response.data;
            console.log(forecast);
            // Update the results div with the received data
            document.getElementById('resultCity').textContent = city;
            document.getElementById('resultDate').textContent = date;
            document.getElementById('currentWeather').textContent = currentWeather;
            const forecastArray = forecast
                .map(item => `${item.day}: ${item.forecast}`)
                .join('<br>');
            document.getElementById('forecast').innerHTML = forecastArray;

            // Show the weather results div
            document.getElementById('weatherResults').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Error fetching weather data. Please try again later.');
        });

}
