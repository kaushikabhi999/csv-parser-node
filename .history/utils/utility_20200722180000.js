const splitInputLine = (
    line, // line to be split
    header = null, // header items 
    seperators = null, // seperator array to find valid seperators
    returnArray=false
   
  ) => {
    
    let splitRegex=seperators;
   
    let regExp = new RegExp("[" + splitRegex + "]+", "g");
    
  
    const splittedArray = regExp[Symbol.split](line);



     if (returnArray === true) {
    // return an array
    return {
      data: splittedArray,
      error: false
    };
  } else {
    const splittedArray = regExp[Symbol.split](line);
    let seperatedObject = {};
    for (const index in header) {
      seperatedObject[header[index]] = splittedArray[index];
    }
    return {
      data: seperatedObject,
      error: false
    };
  }
}
  module.exports = {
    splitInputLine
  
  }
  
  