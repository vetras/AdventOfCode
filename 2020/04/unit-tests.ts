import {assertEquals} from "https://deno.land/std@0.79.0/testing/asserts.ts";

function test(name: string, fn: () => void | Promise<void>) {
  Deno.test({
    name,
    fn,
    sanitizeResources: true,
    sanitizeOps: true
  });
}

export {
  assertEquals,
  test
}
