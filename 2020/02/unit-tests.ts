function test(title: string, test: Function): void {
  console.log(title);
  try {
    test();
    console.log("PASS");
  } catch (e) {
    console.log("FAIL", e);
  }
  console.log("");
}

function assertTrue(actual: boolean): void {
  if (!actual) {
    throw new Error("Expected true, got false");
  }
}

function assertFalse(actual: boolean): void {
  if (actual) {
    throw new Error("Expected false, got true");
  }
}

export {
  test,
  assertFalse,
  assertTrue
}
