// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // declare an array of the alphabet to check against input
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  function caesar(input, shift, encode = true) {
    // function cannot work if shift exceeds amount of letters in alphabet, or if 0
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    // convert the input into an array
    const string = input.toLowerCase().split("");

    // declare an empty array that will later be converted into a string, constaining our decoded/encoded message
    const newString = [];

    // loop through each letter of the string array
    for (let letter of string) {
      // check if alphabet array contains the current letter
      if (alphabet.includes(letter)) {
        // if yes, loop through the alphabet array to find that specific letter
        for (let i in alphabet) {
          // determine whether or no to encode or decode input
          if (alphabet[i] === letter) {
            encode === true
              ? (j = parseInt(i) + shift)
              : (j = parseInt(i) - shift);

            // check if shifted letter is above or below a or z
            if (alphabet[j] === undefined) {
              j >= 26
                ? newString.push(alphabet[j - 26])
                : newString.push(alphabet[j + 26]);

              // if alphabet[j] is not undefined, just push the shifted letter
            } else {
              newString.push(alphabet[j]);
            }
          }
        }

        // if current letter is anything other than a letter in the alphabet array, push that character to newString array
      } else {
        newString.push(letter);
      }
    }

    // return newString array joined together as a string
    return newString.join("");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
