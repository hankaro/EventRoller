let diceNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function randomEventRoller(diceNumbers) {
    let tulos = diceNumbers[Math.floor(Math.random() * diceNumbers.length)];
    console.log(tulos)
}

randomEventRoller(diceNumbers)