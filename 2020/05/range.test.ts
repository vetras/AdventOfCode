import {test, assertEquals} from "./../common/unit-test-helpers.ts";
import Range from "./range.ts";

test("Can get lower half recursively", () => {
  const sut = new Range(0, 10);
  assertEquals(sut.getLowerHalf().toArray(), [0, 5]);
  assertEquals(sut.getLowerHalf().getLowerHalf().toArray(), [0, 2]);
  assertEquals(sut.getLowerHalf().getLowerHalf().getLowerHalf().toArray(), [0, 1]);
  assertEquals(sut.getLowerHalf().getLowerHalf().getLowerHalf().getLowerHalf().toArray(), [0, 0]);
  assertEquals(sut.getLowerHalf().getLowerHalf().getLowerHalf().getLowerHalf().getLowerHalf().toArray(), [0, 0]);
});

test("Can get upper half recursively", () => {
  const sut = new Range(0, 10);
  assertEquals(sut.getUpperHalf().toArray(), [6, 10]);
  assertEquals(sut.getUpperHalf().getUpperHalf().toArray(), [9, 10]);
  assertEquals(sut.getUpperHalf().getUpperHalf().getUpperHalf().toArray(), [10, 10]);
  assertEquals(sut.getUpperHalf().getUpperHalf().getUpperHalf().getUpperHalf().toArray(), [10, 10]);
});

test("Can get upper half / lower half recursively", () => {
  const sut = new Range(0, 10);
  assertEquals(sut.getUpperHalf().toArray(), [6, 10]);
  assertEquals(sut.getUpperHalf().getLowerHalf().toArray(), [6, 8]);
  assertEquals(sut.getUpperHalf().getLowerHalf().getUpperHalf().toArray(), [8, 8]);
  assertEquals(sut.getUpperHalf().getLowerHalf().getUpperHalf().getLowerHalf().toArray(), [8, 8]);
});

test("Can process the example with 128 seats", () => {
  //
  // Start by considering the whole range, rows 0 through 127.
  // F means to take the lower half, keeping rows 0 through 63.
  // B means to take the upper half, keeping rows 32 through 63.
  // F means to take the lower half, keeping rows 32 through 47.
  // B means to take the upper half, keeping rows 40 through 47.
  // B keeps rows 44 through 47.
  // F keeps rows 44 through 45.
  // The final F keeps the lower of the two, row 44.
  //
  const sut = new Range(0, 127);

  let temp = sut.getLowerHalf();
  assertEquals(temp.toArray(), [0, 63]);
  temp = temp.getUpperHalf();
  assertEquals(temp.toArray(), [32, 63]);
  temp = temp.getLowerHalf();
  assertEquals(temp.toArray(), [32, 47]);
  temp = temp.getUpperHalf();
  assertEquals(temp.toArray(), [40, 47]);
  temp = temp.getUpperHalf();
  assertEquals(temp.toArray(), [44, 47]);
  temp = temp.getLowerHalf();
  assertEquals(temp.toArray(), [44, 45]);
  temp = temp.getLowerHalf();
  assertEquals(temp.toArray(), [44, 44]);
});

test("Can process the example with 8 columns", () => {
  //
  // Start by considering the whole range, columns 0 through 7.
  // R means to take the upper half, keeping columns 4 through 7.
  // L means to take the lower half, keeping columns 4 through 5.
  // The final R keeps the upper of the two, column 5.
  //
  const sut = new Range(0, 7);

  let temp = sut.getUpperHalf();
  assertEquals(temp.toArray(), [4, 7]);
  temp = temp.getLowerHalf();
  assertEquals(temp.toArray(), [4, 5]);
  temp = temp.getUpperHalf();
  assertEquals(temp.toArray(), [5, 5]);
});
