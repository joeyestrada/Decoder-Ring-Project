const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");

describe("polybius tests written by team 5", () => {
  it("when encoding, it translates the letters i and j to 42", () => {
    const input = "ij";

    const expected = "4242";
    const actual = polybiusModule.polybius(input);
    expect(actual).to.equal(expected);
  });
  it("when decoding, it translates '42' to '(i/j)'", () => {
    const input = "42";

    const expected = "(i/j)";
    const actual = polybiusModule.polybius(input, false);
    expect(actual).to.equal(expected);
  });
  it("ignores capital letters", () => {
    const input = "TeamFive";

    const expected = "4451112312421551";
    const actual = polybiusModule.polybius(input);
    expect(actual).to.equal(expected);
  });
  describe("maintains spaces in the message, before and after encoding or decoding", () => {
    it("maintains spaces while encoding", () => {
      const input = "team five is the best";

      const expected = "44511123 12421551 4234 443251 21513444";
      const actual = polybiusModule.polybius(input);
      expect(actual).to.equal(expected);
    });
    it("maintains spcaes while decoding", () => {
      const input = "44511123 12421551 4234 443251 21513444";

      const expected = "team f(i/j)ve (i/j)s the best";
      const actual = polybiusModule.polybius(input, false);
      expect(actual).to.equal(expected);
    });
  });
});
