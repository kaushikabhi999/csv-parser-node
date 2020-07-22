const splitInputLine = (
    line, // line to be split
    header = null, // header items 
    seperators = null, // seperator array to find valid seperators
   
  ) => {
    
    let splitRegex=seperators;
   
    let regExp = new RegExp("[" + splitRegex + "]+", "g");
    
  
    const splittedArray = regExp[Symbol.split](line);
  
      let seperatedObject = {};
      for (const index in header) {
        seperatedObject[header[index]] = splittedArray[index];
      }
      return {
        data: seperatedObject,
      
      };
    }
  
  module.exports = {
    splitInputLine
  
  }
  
  