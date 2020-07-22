const parse=require("./utils")

console.log("gh");


parse.csvParseStream(__dirname+"./user.csv",function(item){
    console.log(item)
})