import Map from "./map.ts";

const data = await Deno.readTextFile("data.txt");

//
// Right 1, down 1.
// Right 3, down 1. (This is the slope you already checked.)
// Right 5, down 1.
// Right 7, down 1.
// Right 1, down 2.
//
const possiblePaths = [
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
];

const possibleTrees = [];
for (const path of possiblePaths) {
  const map = new Map(data, path[1], path[0]);
  const trees = map.countTress();
  possibleTrees.push(trees);
}

const result = possibleTrees.reduce((acc, x) => acc * x, 1);

console.log("Result: ", result);
