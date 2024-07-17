import { expect } from "@jest/globals";
import { isEmpity } from "./utils";

describe("isEmpity", () => {
  test("returns true when validationErrors is empty", () => {
    const validationErrors = {};
    expect(isEmpity(validationErrors)).toBe(true);
  });

  test("returns false when validationErrors has keys", () => {
    const validationErrors = { foo: "bar" };
    expect(isEmpity(validationErrors)).toBe(false);
  });
});
