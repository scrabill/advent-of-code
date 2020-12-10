let fs = require("fs");
let text = fs.readFileSync("./inputs/10.txt").toString('utf-8');
let allText = text.split("\n")
const adapters = allText.map(string => parseInt(string, 10)).sort(function(a, b){return a - b})

function partOne(adapters) {

    let currentJoltage = 0
    let counter = 0

    let [countOnes, countTwos, countThrees] = [0,0,1]

    while (counter < adapters.length) {

        let currentAdapter = adapters[counter]
        let nextAdapter = adapters[counter + 1]
        let joltageDiff = 0

        if (nextAdapter - currentAdapter <= 3) {
            joltageDiff = nextAdapter - currentAdapter
            currentJoltage = currentAdapter
        }

        switch (joltageDiff) {
            case 3:
                countThrees++
                break;
            case 2:
                countTwos++
                break;
            default:
                countOnes++
                break;
        }

        counter++
    }

    return countOnes * countThrees

}

console.log(partOne(adapters))
