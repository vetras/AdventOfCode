import runPolicyOne from "./policy1.tests.ts";
import runPolicyTwo from "./policy2.tests.ts";

console.log("Executing all unit tests...");
console.log("");

console.log("============================");
console.log("Policy v1");
console.log("");
runPolicyOne();

console.log("============================");
console.log("Policy v2");
console.log("");
runPolicyTwo();

console.log("");
console.log("============================");
console.log("All tests are terminated.");
console.log("");
