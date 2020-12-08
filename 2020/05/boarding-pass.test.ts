import {test, assertEquals} from "./../common/unit-test-helpers.ts";
import BoardingPass from "./boarding-pass.ts";

test("Boarding Pass BFFFBBFRRR should have ID 567", () => {
  const sut = new BoardingPass("BFFFBBFRRR");
  assertEquals(sut.getId(), 567);
});

test("Boarding Pass FFFBBBFRRR should have ID 119", () => {
  const sut = new BoardingPass("FFFBBBFRRR");
  assertEquals(sut.getId(), 119);
});

test("Boarding Pass BBFFBBFRLL should have ID 820", () => {
  const sut = new BoardingPass("BBFFBBFRLL");
  assertEquals(sut.getId(), 820);
});
