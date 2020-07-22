const parse=require("./utils")

console.log("gh");


parse.csvToJson(__dirname+"./user.csv",function(item){
    console.log(item)
})