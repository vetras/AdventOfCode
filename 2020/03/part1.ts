import Map from "./map.ts";

const data = await Deno.readTextFile("data.txt");

const map = new Map(data);

console.log("rows: ", map.numberOfRows());
console.log("number of Trees: ", map.countTress());
