import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
  it("shuffles the indexes of an array", () => {
    const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const shuffled = shuffle(original);

    const sameOrder = shuffled.every(
      (value, index) => value === original[index],
    );
    expect(sameOrder).to.equal(false);
  });
});
