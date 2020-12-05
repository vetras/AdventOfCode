import {PolicyFromTobogganCorporation, PolicyInput} from "./policy/index.ts";
import checker from "./password-checker.ts";

await checker.runWithPolicyCreator((obj: PolicyInput) => new PolicyFromTobogganCorporation(obj));
