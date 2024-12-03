import fs from "fs/promises"

let a = await fs.readFile("rup.txt")

let b = await fs.writeFile("rup.txt","\n\nthis is amazing tutorial")

console.log(a.toString(),b)