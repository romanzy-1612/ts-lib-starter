import { expect, assert } from "chai";
import { example } from "./example";

describe("initialization", () => {
  it("just works", () => {
    assert.equal(example(), "hello world");
  });
});
