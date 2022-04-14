const expect = require("chai").expect;
const caesarModule = require("../src/caesar");

describe("caesar tests written by team 5", () => {
  describe("returns false if the shift value is 0, less than -25, greater than 25, or not present.", () => {
    const input = "teamfive";
    const expected = false;

    it("when shift = 0", () => {
      const shift = 0;

      const actual = caesarModule.caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("when shift = 26", () => {
      const shift = 26;

      const actual = caesarModule.caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("when shift = -26", () => {
      const shift = -26;

      const actual = caesarModule.caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("when shift doesn't exist", () => {
      const actual = caesarModule.caesar(input);
      expect(actual).to.equal(expected);
    });
  });

  describe("ignores capital letters", () => {
    it("'teamfive' and 'TEAMFIVE' should return the same string", () => {
      const inputOne = "teamfive";
      const inputTwo = "TEAMFIVE";
      const shift = 5;

      const expected = true;
      const actual =
        caesarModule.caesar(inputOne, shift) ===
        caesarModule.caesar(inputTwo, shift);
      expect(actual).to.equal(expected);
    });
  });

  describe("when encoding, handles shifts that go past the end of the alphabet", () => {
    it("should work with the word 'zebra'", () => {
      const input = "zebra";
      const shift = 3;

      const expected = "cheud";
      const actual = caesarModule.caesar(input, shift);
      expect(actual).to.equal(expected);
    });
  });

  describe("maintains spaces and other nonalphabetic symbols in the message", () => {
    it("should properly encode 'team five!', which has a space and !", () => {
      const input = "team five!";
      const shift = 5;

      const expected = "yjfr knaj!";
      const actual = caesarModule.caesar(input, shift);
      expect(actual).to.equal(expected);
    });
    it("should properly decode 'yjfr knaj!', which has a space and !", () => {
      const input = "yjfr knaj!";
      const shift = 5;

      const expected = "team five!";
      const actual = caesarModule.caesar(input, shift, false);
      expect(actual).to.equal(expected);
    });
  });
});
