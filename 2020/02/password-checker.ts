import{PolicyFromSledRentalPlace as Policy} from "./policy/index.ts";

export default {
  runWithPolicyCreator
}

const sepRange = '-';
const sepSegments = ' ';

let policeCreatorFunction: Function;

async function runWithPolicyCreator(policeCreator: Function) {
  const data = await Deno.readTextFile("data.txt");

  policeCreatorFunction = policeCreator;
  const validPasswordsFound = data.split("\n")
    .filter(skipEmptyLines)
    .map(validateInputFormat)
    .map(convertToPolicy)
    .reduce(countValidPolicies, 0);

  console.log(`Found ${validPasswordsFound} valid passwords.`);
  console.log("");
}

function parseRage(segment: string): [number, number] {
  // format example: segment: "3-4"
  const range = segment.split(sepRange);
  return [parseInt(range[0]), parseInt(range[1])];
}

function parseChar(segment: string): string {
  // format example: segment: "a:"
  return segment[0];
}

function skipEmptyLines(line: string): boolean {
  return line !== null && line.length > 0;
}

function validateInputFormat(line: string, index: number) {
  const segments = line.split(sepSegments);
  if (segments.length != 3) {
    throw new Error(`Invalid data at line ${index}. Expected 3 segments, got ${segments.length}`);
  }
  return segments;
}

function convertToPolicy(segments: Array<string>) {
  const range = parseRage(segments[0]);
  const char = parseChar(segments[1]);
  const pass = segments[2];
  return policeCreatorFunction({range, char, password: pass});
}

function countValidPolicies(count: number, policy: Policy): number {
  if (policy.isPasswordValid()) {
    count++;
  }
  return count;
}
