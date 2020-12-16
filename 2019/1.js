let fs = require("fs");
let text = fs.readFileSync("./inputs/1.txt").toString('utf-8');
let modules = text.split("\n")

function partOne(modules) {
    let totalFuelNeeded = 0

    modules.forEach(module => {
        totalFuelNeeded += Math.floor(module / 3) - 2
    });

    return totalFuelNeeded
}

console.log(partOne(modules))