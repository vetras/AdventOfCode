import BoardingPass from "./boarding-pass.ts";

function skipEmptyLines(line: string): boolean {
  return line !== null && line.length > 0;
}

const data = await Deno.readTextFile("data.txt");

const idsWithoutPreviousConsecutiveId = data.split("\n")
  .filter(skipEmptyLines)
  .map(line => {
    const bp = new BoardingPass(line.trim());
    return bp.getId();
  })
  .sort()
  .filter((id, index, array) => {
    if (!array[(index - 1)]) return false;
    if (!array[(index)]) return false;
    return array[(index)] - array[(index - 1)] === 2;
  });

console.log("Missing Boarding Passes ID : ", idsWithoutPreviousConsecutiveId[0] - 1);
