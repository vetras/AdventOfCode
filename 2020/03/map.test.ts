import {assertEquals} from "https://deno.land/std@0.79.0/testing/asserts.ts";

import Map from "./map.ts";

const data = await Deno.readTextFile("sample-map.txt");

Deno.test("Number of rows", () => {
  const map = new Map(data);
  assertEquals(map.numberOfRows(), 11);
});

Deno.test("Number of trees", () => {
  const map = new Map(data);
  assertEquals(map.countTress(), 7);
});
