let fs = require("fs");
let text = fs.readFileSync("./inputs/1.txt").toString('utf-8');
let allText = text.split("\n")
const input = allText.map(string => parseInt(string, 10))

function partOne(entries) {

    for (let index = 0; index < entries.length; index++) {
        let number = entries[index];

        for (let index2 = 0; index2 < entries.length; index2++) {
            let num2 = entries[index2];
            
            if (number + num2 == 2020) {
                return `${number} + ${num2} = 2020. ${number} * ${num2} = ${number * num2} `
            }
        }

    }

}

const testEntries = [1721, 979, 366, 299, 675, 1456]

console.log(partOne(testEntries)) // Expected Result: 1721 * 299 = 514579
console.log(partOne(input))

function partTwo(entries) {

    for (let index = 0; index < entries.length; index++) {
        let number = entries[index];

        for (let index2 = 0; index2 < entries.length; index2++) {
            let num2 = entries[index2];

            for (let index3 = 0; index3 < entries.length; index3++) {
                let num3 = entries[index3];

                if (number + num2 + num3 == 2020) {
                    return `${number} + ${num2} + ${num3} = 2020. ${number} * ${num2} * ${num3} = ${number * num2 * num3} `
                }

            }
            
        }

    }

}

console.log(partTwo(testEntries)) // Expected Result:  979 * 366 * 675 = 241861950
console.log(partTwo(input)) 