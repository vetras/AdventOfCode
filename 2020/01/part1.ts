import data from "./data.ts";

console.log(`Input data has ${data.length} numbers. Searching 2 that sum to 2020 ...`);

for (let i = 0; i < data.length - 1; i++) {
    const current = data[i];
    for (let j = i + 1; j < data.length; j++) {
        const testing = data[j];
        if (current + testing === 2020) {
            console.log("")
            console.log(`The Solution is ${current * testing} found by multiplying numbers ${current} and ${testing} on position ${i} and ${j} of the available data.`);
            console.log("")
            Deno.exit(0);
        }
    }
}

console.log("No solution was found. No two numbers add up to 2020.");
