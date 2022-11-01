import { screamString } from "../../frontend/src/util/screamString"

test("screamString returns an uppercase string with an exclamation point", () => {
  expect(screamString("hello")).toBe("HELLO!")
});
