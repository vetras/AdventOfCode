import {assertEquals} from "https://deno.land/std@0.79.0/testing/asserts.ts";
import Map from "./map.ts";

function test(name: string, fn: () => void | Promise<void>) {
  Deno.test({
    name,
    fn,
    sanitizeResources: true,
    sanitizeOps: true
  });
}

const data = await Deno.readTextFile("sample-map.txt");

test("Number of trees for default path", () => {
  const map = new Map(data);
  assertEquals(map.countTress(), 7);
});

test("Path [1, 1] has 2 trees", () => {
  const map = new Map(data, 1, 1);
  assertEquals(map.countTress(), 2);
});

test("Path [1, 3] has 7 trees", () => {
  const map = new Map(data, 1, 3);
  assertEquals(map.countTress(), 7);
});

test("Path [1, 5] has 3 trees", () => {
  const map = new Map(data, 1, 5);
  assertEquals(map.countTress(), 3);
});

test("Path [1, 7] has 4 trees", () => {
  const map = new Map(data, 1, 7);
  assertEquals(map.countTress(), 4);
});

test("Path [2, 1] has 4 trees", () => {
  const map = new Map(data, 2, 1);
  assertEquals(map.countTress(), 2);
});
