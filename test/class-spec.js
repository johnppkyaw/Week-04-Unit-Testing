const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  let word0;
  let word;

  beforeEach(() => {
    word = new Word('aeroplane');
  })


  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      expect(Object.keys(word)[0]).to.equal('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal('aeroplane');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal('rpln');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal('aeoae');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal('aeroplaneyay');
    });
  });
});
