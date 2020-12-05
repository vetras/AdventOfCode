// @ts-ignore deno requires .ts to find the file
import Policy from "./policy-from-toboggan-corporation.ts";
import {test, assertFalse, assertTrue} from "../unit-tests.ts";

export default function () {
  test("Sample 1: 1-3 a: abcde should be valid",
    () => {
      let p: Policy = new Policy({
        range: [1, 3],
        char: 'a',
        password: "abcde"
      });

      assertTrue(p.isPasswordValid());
    });

  test("Sample 2: 1-3 b: cdefg should be invalid",
    () => {
      let p: Policy = new Policy({
        range: [1, 3],
        char: 'b',
        password: "cdefg"
      });

      assertFalse(p.isPasswordValid());
    });

  test("Sample 3: 2-9 c: ccccccccc should be invalid",
    () => {
      let p: Policy = new Policy({
        range: [2, 9],
        char: 'c',
        password: "ccccccccc"
      });

      assertFalse(p.isPasswordValid());
    });
}
