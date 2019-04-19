const { expect } = require("chai");
const Ghibliator = require("../Ghibliator");
const fs = require("fs");
const sinon = require("sinon");

describe("Ghibliator", () => {
  it("should return average age of characters", () => {
    // setup
    const fakeObj = JSON.stringify([{ age: 33 }]);
    const expected = 33;
    const delta = 1;

    //exercise
    const fileSistem = sinon.stub(fs, "readFileSync").returns(fakeObj);
    const actual = new Ghibliator().getAverageAge();
    // assert
    expect(actual).closeTo(actual, expected, delta);

    // teardown
    fileSistem.restore();
  });

  it("should return appearances", () => {
    // setup
    const expected = 2;
    const fakeObj = JSON.stringify([
      {
        name: "Baron Humbert von Gikkingen",
        films: [
          "https://ghibliapi.herokuapp.com/films/ff24da26-a969-4f0e-ba1e-a122ead6c6e3",
          "https://ghibliapi.herokuapp.com/films/90b72513-afd4-4570-84de-a56c312fdf81",
        ],
      },
    ]);
    // exercise
    const fileSistem = sinon.stub(fs, "readFileSync").returns(fakeObj);
    const actual = new Ghibliator().appearances("Baron Humbert von Gikkingen");

    // assert
    expect(actual).to.equal(actual, expected);

    // teardown
    fileSistem.restore();
  });
});
