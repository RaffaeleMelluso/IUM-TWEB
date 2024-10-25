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
    // Route to receive the numbers from Server 1
    app.post('/receive-numbers', (req, res) => {
        const { num1, num2 } = req.body;

        // Processing the numbers (here we just respond back)
        res.json({
            receivedNum1: num1,
            receivedNum2: num2,
            sum: num1 + num2 // Example operation
        });
    });

}