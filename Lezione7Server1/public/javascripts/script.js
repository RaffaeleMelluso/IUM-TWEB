const axios = require('axios');
function init(){
    document.getElementById('numberForm')
        .addEventListener('submit', function(event) {
            event.preventDefault();
            const num1 = document.getElementById('num1').value;
            const num2 = document.getElementById('num2').value;
            // Use Axios to send the data to the first server
            axios.post('http://localhost:3000/send-numbers', {
                num1: parseFloat(num1),
                num2: parseFloat(num2)
            })
                .then(response => {
                    console.log('Response from server:', response.data);
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        });
    // Route to receive two numbers
    app.post('/send-numbers', async (req, res) => {
        const { num1, num2 } = req.body;
        try {
            // Sending numbers to another server using Axios
            const response = await axios.post(
                'http://localhost:3001/receive-numbers', { num1, num2 });
            // Respond back with the response from the second server
            res.json(response.data);
        } catch (error) {
            res.status(500).send('Error sending numbers: ' + error.message);
        }
    });

}