console.log("parse")

const fs = require('fs');
const readline = require('readline');
const {splitInputLine}= require('./utility');

function Parse(file) {
    
  let rl,separators=",";
    let fileStream = fs.createReadStream(file);
    rl = readline.createInterface({
      input: fileStream
    });
 
    async function toJsonStream(cb) {
    if (cb === null) throw new Error(`must need a stream call back `);
    let index = 0;
    let headers;
    for await (const line of rl) {
      if (index === 0) {
       headers = splitInputLine(line, null, separators).data;
        index++;
      } else {
        const convertedJsonObject = splitInputLine(line, headers, separators);
        cb({
          data: convertedJsonObject.data,
          completed: false
        });
      }
    }
    cb({
      data: null,
      completed: true
    });
  }

  return {

    toJsonStream
  }
}





const csvParseStream = async function(...givenDataAndOptions) {
  
  let data = givenDataAndOptions[0];
  let cb = givenDataAndOptions[1];
  
  const parseObj = new Parse(data);
  const result = await parseObj.toJsonStream(cb);
  return result;
}


module.exports = {
  csvParseStream
}
