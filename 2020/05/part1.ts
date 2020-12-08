import BoardingPass from "./boarding-pass.ts";

function skipEmptyLines(line: string): boolean {
  return line !== null && line.length > 0;
}

const data = await Deno.readTextFile("data.txt");

let maxId = 0;

data.split("\n")
  .filter(skipEmptyLines)
  .map(line => {
    const bp = new BoardingPass(line.trim());
    const id = bp.getId();
    if (id > maxId) {
      maxId = id;
    }
  });

console.log("Max boarding pass ID is: ", maxId);

// 369 That's not the right answer; your answer is too low.
// I was missing skip empty lines ...
// 842 is the right answer with the same code, skipping empty lines
