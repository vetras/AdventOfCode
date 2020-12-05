// @ts-ignore deno requires .ts to find the file
import Policy from "./policy-from-sled-rental-place.ts";
import {test, assertFalse, assertTrue} from "../unit-tests.ts";

export default function () {
  test("Valid Policy",
    () => {
      let p: Policy = new Policy({
        range: [2, 3],
        char: 'a',
        password: "foaoafndsj"
      });

      assertTrue(p.isPasswordValid());
    });

  test("Invalid Password: min value not enforced",
    () => {
      let p: Policy = new Policy({
        range: [2, 3],
        char: 'g',
        password: "aaaaaaaa"
      });

      assertFalse(p.isPasswordValid());
    });

  test("Invalid Password: max value not enforced",
    () => {
      let p: Policy = new Policy({
        range: [2, 3],
        char: 'g',
        password: "aagaagagaaagsabiiebgjjob"
      });

      assertFalse(p.isPasswordValid());
    });

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

  test("Sample 3: 2-9 c: ccccccccc should be valid",
    () => {
      let p: Policy = new Policy({
        range: [2, 9],
        char: 'c',
        password: "ccccccccc"
      });

      assertTrue(p.isPasswordValid());
    });
}
