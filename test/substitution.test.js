// Write your tests here!
const expect = require("chai").expect;
const substitution = require("../src/substitution.js").substitution;

describe("Substitution tests written by team Five", () => {
  it("should be a function", () => {
    expect(substitution).to.be.a("function");
  });
  describe("return false if arguments are not valid", () => {
    it("return false if missing alphabet argument", () => {
      input = "noalphabet";
      actual = substitution(input);
      expect(actual).to.be.false;
    });
    it("return false if alphabet length is not equal to 26", () => {
      input = "tooshort";
      alphabet = "qwerty";
      actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
    it("return false if alphabet has repeating value", () => {
      input = "tooshort";
      alphabet = "abcdabcdabcd";
      actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });
  describe("return the encoded correctly", () => {
    it("should encode a normal lowercase string", () => {
      input = "racing";
      alphabet = "hceoprujdmiflzvxtaysbwkgnq";
      actual = substitution(input, alphabet);
      expected = "ahedzu";
      expect(actual).to.equal(expected);
    });
    it("should encode a string with non-alphabetical characters", () => {
      input = "racing i@to";
      alphabet = "hceoprujdmiflzvxtaysbwkgnq";
      actual = substitution(input, alphabet);
      expected = "ahedzu d@sv";
      expect(actual).to.equal(expected);
    });
    it("should encode a string with capital characters", () => {
      input = "RacingIntoThe";
      alphabet = "hceoprujdmiflzvxtaysbwkgnq";
      actual = substitution(input, alphabet);
      expected = "ahedzudzsvsjp";
      expect(actual).to.equal(expected);
    });
  });
  describe("return the decoded correctly", () => {
    it("should decode a normal lowercase string", () => {
      input = "ahedzu";
      alphabet = "hceoprujdmiflzvxtaysbwkgnq";
      actual = substitution(input, alphabet, false);
      expected = "racing";
      expect(actual).to.equal(expected);
    });
    it("should decode a string with non-alphabetical characters", () => {
      input = "ahedzu d@sv";
      alphabet = "hceoprujdmiflzvxtaysbwkgnq";
      actual = substitution(input, alphabet, false);
      expected = "racing i@to";
      expect(actual).to.equal(expected);
    });
    it("should decode a string with capital characters", () => {
      input = "AhedzuDzsvSjp";
      alphabet = "hceoprujdmiflzvxtaysbwkgnq";
      actual = substitution(input, alphabet, false);
      expected = "racingintothe";
      expect(actual).to.equal(expected);
    });
  });
  describe("return the code with special characters in alphabet", () => {
    it("should encode using a mixed characters alphabet", () => {
      input = "racing into the night";
      alphabet = "hc3opru%dm!flzvxt@y&bwkgnq";
      actual = substitution(input, alphabet);
      expected = "@h3dzu dz&v &%p zdu%&";
      expect(actual).to.equal(expected);
    });
    it("should decode using a mixed characters alphabet", () => {
      input = "@h3dzu dz&v &%p zdu%&";
      alphabet = "hc3opru%dm!flzvxt@y&bwkgnq";
      actual = substitution(input, alphabet, false);
      expected = "racing into the night";
      expect(actual).to.equal(expected);
    });
  });
});
