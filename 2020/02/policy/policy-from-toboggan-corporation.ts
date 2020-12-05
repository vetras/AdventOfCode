import type {PolicyInput} from "./policy-input.ts";
import Policy from "./policy-from-sled-rental-place.ts";

// the policy of part-2, where the rules are based on position
export default class PolicyFromTobogganCorporation extends Policy {
  constructor(obj: PolicyInput) {
    super(obj);
  }

  // overrides base class method
  public isPasswordValid(): boolean {
    if (!this.makesSense()) {
      return false;
    }
    const foundOnMin = this.password[this.min - 1] === this.char;
    const foundOnMax = this.password[this.max - 1] === this.char;
    return (foundOnMin || foundOnMax) && !(foundOnMin && foundOnMax);
  }
}
