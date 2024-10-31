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

    // Get values from form fields
    const city = document.getElementById('city').value;
    // how to cope with a date
    const dateString = document.getElementById('date').value; // "YYYY-MM-DD" string
    const dateObject = new Date(dateString); // Converts to a Date object

    // @todo Send data to the server using Axios

}

// Utility function to generate a single random weather condition
function generateRandomCurrentWeather() {
    const conditions = ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy', 'Stormy'];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    const temperature = Math.floor(Math.random() * 15) + 15; // Random temp between 15°C and 30°C
    return `${condition}, ${temperature}°C`;
}