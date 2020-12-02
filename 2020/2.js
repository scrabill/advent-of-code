let fs = require("fs");
let text = fs.readFileSync("./inputs/2.txt").toString('utf-8');
let allText = text.split("\n")
const input = allText.map(string => parseInt(string, 10))

const testPasswordDatabase = [
    "1-3 a: abcde",
    "1-3 b: cdefg",
    "2-9 c: ccccccccc"
]

function partOne(database) {
    let validPasswords = 0

    database.forEach(line => {

       let [policy, password] = line.split(": ")

       let key = policy.charAt(policy.length - 1)
       let [lowerNum, upperNum] = policy.split("-", 2)
       upperNum = upperNum.split(" ",1)

       if (password.includes(key)) {

        let counter = 0

            for (let index = 0; index <= password.length; index++) {
                if (password.charAt(index) == key) {
                    counter++
                }
                
            }

            if (counter >= lowerNum && counter <= upperNum) {
                validPasswords++
            }
       }

    });

    return validPasswords
}

console.log(partOne(allText))

function partTwo(database) {
    let validPasswords = 0

    database.forEach(line => {

        let [policy, password] = line.split(": ")
 
        let key = policy.charAt(policy.length - 1)
        let [lowerNum, upperNum] = policy.split("-", 2)
        upperNum = upperNum.split(" ",1)

        if (password.charAt(lowerNum - 1) == key && password.charAt(upperNum - 1) != key) {
            validPasswords++
        } else if (password.charAt(upperNum - 1) == key && password.charAt(lowerNum - 1) != key) {
            validPasswords++
        }
 
     });
 
     return validPasswords
 }

console.log(partTwo(allText))