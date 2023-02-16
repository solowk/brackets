module.exports = function check(str, bracketsConfig) {
  // your solution
  let pairDefinitions = {};
  bracketsConfig.forEach(bracketPair => {
    pairDefinitions[bracketPair[1]] = bracketPair[0];
  });

  let bracketsStack = [];
  for (let index = 0; index < str.length; index++) {
    const symbol = str[index];
    let openBracket = pairDefinitions[symbol];
    let isSameBrackets = openBracket == symbol;
    if (openBracket) {
      if (bracketsStack.length == 0 && !isSameBrackets) {
        return false;
      } 
      
      if (bracketsStack.length > 0) {
        let topStackSymbol = bracketsStack[bracketsStack.length-1];
        if (topStackSymbol == openBracket) {
          bracketsStack.pop();
        } else {
          if (!isSameBrackets) {
            return false;
          }
          bracketsStack.push(symbol); 
        } 
      } else {
        bracketsStack.push(symbol);
      }
    } else {
      bracketsStack.push(symbol);
    }
  }
  return bracketsStack.length == 0;
}
