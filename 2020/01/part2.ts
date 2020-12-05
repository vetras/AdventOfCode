import data from "./data.ts";

console.log(`Input data has ${data.length} numbers. Searching 3 that sum to 2020 ...`);

for (let i = 0; i < data.length - 2; i++) {
    const current = data[i];
    for (let j = i + 1; j < data.length-1; j++) {
        const testing = data[j];
        for (let k = j + 1; k < data.length; k++) {
            const another = data[k];
            if (current + testing + another === 2020) {
                console.log("")
                console.log(`The Solution is ${current * testing * another} found by multiplying numbers ${current}, ${testing} and ${another} on position ${i}, ${j} and ${k} of the available data.`);
                console.log("")
                Deno.exit(0);
            }
        }
    }
}

console.log("No solution was found. No two numbers add up to 2020.");
