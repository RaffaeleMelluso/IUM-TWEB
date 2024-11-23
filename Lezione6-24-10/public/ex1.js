

let listOfNumbers = [2, 4, 6, 8];

// Funzione per simulare un'operazione di lunga durata usando setTimeout con un ritardo
async function processNumber(number) {
    let delay = Math.floor(Math.random() * 3000) + 500; // Ritardo casuale tra 500ms e 3000ms
    await new Promise(resolve => setTimeout(resolve, delay)); // Attende il ritardo
    return number * 2; // Simula l'elaborazione (ad esempio, raddoppia il numero)
}

function insertResults(processedNumbers) {
    document.getElementById('delayed_numbers').innerHTML = 'Numbers processed are: ' + processedNumbers.toString();
}

// Completa questa funzione
async function init() {
    let processedNumbers = [];
    // Itera attraverso listOfNumbers ed elabora ogni numero
    for (let num of listOfNumbers) {
        try {
            let result = await processNumber(num);
            processedNumbers.push(result);
        } catch (error) {
            console.error(error);
        }
    }
    insertResults(processedNumbers);
}