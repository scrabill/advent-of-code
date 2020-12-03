let fs = require("fs");
let text = fs.readFileSync("./inputs/3.txt").toString('utf-8');
let map = text.split("\n")

// starting position is [0][0], will all numbers positive as the sled moves to the down (yAxis) and to the right (xAxis)
let [yAxis, xAxis] = [0,0]

function partOne(map) {

    let numTreesEncountered = 0

    while (yAxis + 1 < map.length) {

        if (Boolean(map[yAxis + 1][xAxis + 3])) {
            console.log("the coordinates are valid")
    
            yAxis += 1
            xAxis += 3
    
            console.log('updated coordinates', {yAxis}, {xAxis})
            console.log(map[yAxis][xAxis])
    
            if (map[yAxis][xAxis] == "#") {
                numTreesEncountered++
            }
    
            console.log(`you've encounterd ${numTreesEncountered} trees so far`)
    
        } 
    
        else if (Boolean(map[yAxis + 1][xAxis + 3]) == false) {
            console.log("the coordinates are NOT valid but we'll fix it")
    
            yAxis += 1
            xAxis = (xAxis + 3) - map[0].length
    
            console.log('updated coordinates', {yAxis}, {xAxis})
            console.log(map[xAxis][yAxis])
    
            if (map[yAxis][xAxis] == "#") {
                numTreesEncountered++
            }
    
            console.log(`you've encounterd ${numTreesEncountered} trees so far`)
        }
    }

    return numTreesEncountered
}

console.log(partOne(map))