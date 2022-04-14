// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // prettier-ignore
  const square = {
      11: 'a', 21: 'b', 31: 'c', 41: 'd', 51: 'e',
      12: 'f', 22: 'g', 32: 'h', 42:'(i/j)',52: 'k',
      13: 'l', 23: 'm', 33: 'n', 43: 'o', 53: 'p',
      14: 'q', 24: 'r', 34: 's', 44: 't', 54: 'u',
      15: 'v', 25: 'w', 35: 'x', 45: 'y', 55: 'z'
  }
  function polybius(input, encode = true) {
    const string = input.toLowerCase().split("");
    const newString = [];

    // checks whether or not to encode
    if (encode === true) {
      // loops through each letter in string variable
      for (let letter of string) {
        // first checks if letter is either i or j to convert appropriately
        if (letter === "i" || letter === "j") {
          letter = "(i/j)";
        }
        // where the magic happens
        if (Object.values(square).includes(letter)) {
          const key = Object.keys(square).find((key) => square[key] === letter);
          newString.push(key);
        } else {
          newString.push(letter);
        }
      }
    }

    // checks whether or not to decode
    if (encode === false) {
      // makes sure there's not an odd amount of numbers. if there is, function returns false
      let checkArray = [];
      for (let number of string) {
        if (Number.isInteger(parseInt(number)))
          checkArray.push(parseInt(number));
      }
      if (checkArray.length % 2 !== 0) return false;

      // if above code passes, it checks two numbers at a time and adds the matching letter to array
      for (let i = 0; i < string.length; i += 2) {
        if (Number.isInteger(parseInt(string[i])) === false) {
          newString.push(string[i]);
          i++;
        }
        newString.push(square[string[i] + string[i + 1]]);
      }
    }

    return newString.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
