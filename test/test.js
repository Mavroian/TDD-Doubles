const { expect } = require("chai");
const Ghibliator = require("../Ghibliator");
console.log(require("sinon"));

const justAges = [
  { age: "late teens" },
  { age: "17" },
  { age: "Unspecified/Adult" },
  { age: "Middle age" },
  { age: "Adult" },
  { age: "Adult" },
  { age: "Over 50" },
  { age: "Unknown" },
  { age: "400" },
  { age: "300" },
  { age: "NA" },
  { age: "11" },
  { age: "4" },
  { age: "37" },
  { age: "Adult" },
  { age: "Elder" },
  { age: "11" },
  { age: "" },
  { age: "NA" },
  { age: "NA" },
  { age: "NA" },
  { age: "87" },
  { age: "NA" },
  { age: "13" },
  { age: "NA" },
  { age: "NA" },
  { age: "33" },
  { age: "47" },
  { age: "5" },
];

describe("Ghibliator", () => {
  it("should return average age of characters", () => {
    // setup
    const expected = 33;
    const delta = 1;
    const fileAccess = sinon.stub(fs, "readFileSync").returnsThis(justAges);
    fileAccess.y;
    // exercise
    const actual = new Ghibliator().getAverageAge();

    // assert
    expect(actual).closeTo(actual, expected, delta);

    // teardown
  });

  it("should return appearances", () => {
    // setup
    const expected = 2;

    // exercise
    const actual = new Ghibliator().appearances("Baron Humbert von Gikkingen");

    // assert
    expect(actual).to.equal(actual, expected);

    // teardown
  });
});
