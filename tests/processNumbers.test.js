const processNumbersFunction = require("../src/processNumbers.js");

describe("GIVEN we coded the processNumbers function", () => {
  describe("WHEN invoking the function with numbers= [1,2,3]", () => {
    it("THEN it should return a person with sum=6 and max=3", () => {
      const obj = {
        numbers: [1,2,3],
      };
      const result = processNumbersFunction();
      expect(result.maximumNumber).toBe(3);
      expect(result.totalSum).toBe(6);
    });
  });
});
