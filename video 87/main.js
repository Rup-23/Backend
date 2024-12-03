const fs = require("fs")



console.log("starting")
// fs.writeFileSync("rup.txt" , "this is the sigma web devlopment")

fs.writeFile("rup2.txt", "this is node js tutorial", () => {
    console.log("Done")
    fs.readFile("rup2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("rup.txt","RAMRAMRAM",(e,d)=>{
    console.log(d)
})

console.log("ending")
