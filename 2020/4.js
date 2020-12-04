let fs = require("fs");
let text = fs.readFileSync("./inputs/4.txt").toString('utf-8');
let passports = text.split("\n\n")

function partOne(passports) {
    let totalValidPassports = 0

    passports.forEach(passport => {
        let characters = passport.split("")
        let numKeys = 0

        characters.forEach(char => {
            if (char == ":") {
                numKeys++
            }
        })

        if (numKeys == 7 && !passport.includes("cid")) {
            totalValidPassports++
            console.log("passport is valid")
            
        } else if (numKeys == 8) {
            totalValidPassports++
            console.log("passport is valid")
        }
        
    });

    return totalValidPassports
}

console.log(partOne(passports))