import {test, assertEquals} from "./../common/unit-test-helpers.ts";
import PassportParser from "./passport-parser.ts";

const data = await Deno.readTextFile("sample.txt");

test("Can find 4 passports", () => {
  const parser = new PassportParser(data);
  assertEquals(parser.getNumberOfPassports(), 4);
});

test("Can count Valid passports", () => {
  const parser = new PassportParser(data);
  assertEquals(parser.getNumberOfValidPassports(), 2);
});
