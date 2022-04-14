// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // initialize actual alphabet
  const actualAlphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  // helper function to determine if there's any repeat characters
  function uniqueCheck(input) {
    let array = [];
    let bool = false;
    for (let letter of input) {
      array.includes(letter) ? (bool = true) : array.push(letter);
    }
    return bool;
  }

  function substitution(input, alphabet, encode = true) {
    // if any of the following get tripped, immediately return false
    if (!alphabet || alphabet.length !== 26 || uniqueCheck(alphabet))
      return false;

    // initialize inputs as arrays
    const fakeAlphabet = alphabet.split("");
    const altInput = input.toLowerCase().split("");
    let alphOne, alphTwo;
    
    // declare two variables to use in our reduce method below, variables are interchangable dependent on encode parameter
    if (encode) {
      alphOne = actualAlphabet;
      alphTwo = fakeAlphabet;
    } else {
      alphOne = fakeAlphabet;
      alphTwo = actualAlphabet;
    }

    // reduce is used to import current index of the opposite alphabet, then returning all imported characters returned as a string
    return altInput
      .reduce((arr, letter) => {
        alphOne.includes(letter)
          ? arr.push(alphTwo[alphOne.indexOf(letter)])
          : arr.push(letter);
        return arr;
      }, [])
      .join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
