

let listOfNumbers = [2, 4, 6, 8];
// Function to simulate long-running operation using setTimeout with a delay
function processNumber(number, callback) {
    let delay = Math.floor(Math.random() * 3000) + 500; // Random delay between 500ms  setTimeout(() => {
    let result = number * 2; // Simulate processing (e.g., doubling the number)
    callback(null, result); // Pass the result to the callback}, delay);
}

function insertResults(processedNumbers){
    document.getElementById('delayed_numbers').innerHTML= 'Numbers processedare:'+ processedNumbers.toString();
}

// complete this function
function init() {
    let processedNumbers = [];
    // Iterate through listOfNumbers and process each number
    for (let num of listOfNumbers) {
        processNumber(num, function handleResult(error, result) {
            if (error) {
                console.error(error)
            }
            else
            {
                processedNumbers.push(result);
                if(processedNumbers.length === listOfNumbers.length) {
                    insertResults(processedNumbers);
                }
            }
        }
//write the callback
        )
        /**
         * è uguale a processNUmber(num, handleResult(error,result))
         * con handleResult così definito
         * function handleResult(error, result)
         * {
         *             if (error) {
         *                 console.error(error)
         *             }
         *             else
         *             {
         *                 processedNumbers.push(result);
         *                 if(processedNumbers.length === listOfNumbers.length) {
         *                     insertResults(processedNumbers);
         *                 }
         *             }
         * }
         */
    }
}