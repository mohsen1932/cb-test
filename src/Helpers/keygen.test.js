import keygen from "./keygen";

describe("Keygen Helper", () => {
  test("returns string", () => {
    const key = keygen();
    expect(typeof key).toEqual("string");
  });
  test("be unique", () => {
    for (let i = 0; i < 1000; i += 1) {
      const one = keygen();
      const two = keygen();
      expect(one === two).toBeFalsy();
    }
  });
});
