import PassportParser from "./passport-parser.ts";

const data = await Deno.readTextFile("data.txt");

const parser = new PassportParser(data);

console.log(`Found ${parser.getNumberOfPassports()} passports, of which ${parser.getNumberOfValidPassports()} are valid.`);
