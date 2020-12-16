let fs = require("fs");
let text = fs.readFileSync("./inputs/1.txt").toString('utf-8');
let allText = text.split("\n")
const input = allText.map(string => parseInt(string, 10))

function partOne(input) {
   let total = 0

   input.forEach(number => {
       total += number
   });

   return total
}

console.log(partOne(input))
console.log(partTwo(input))