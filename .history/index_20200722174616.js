const {parse}=require("./utils")

console.log(__dirname+"/user.csv");


parse.csvParseStream(__dirname+"/user.csv",function(item){
    console.log(item)
})