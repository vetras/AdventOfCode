import PassportParser from "./passport-parser.ts";
import PassportStrictRules from "./passport-strict-rules.ts";

const data = await Deno.readTextFile("data.txt");

const parser = new PassportParser(data, (str: string) => new PassportStrictRules(str));

console.log(`Found ${parser.getNumberOfPassports()} passports, of which ${parser.getNumberOfValidPassports()} are valid.`);
