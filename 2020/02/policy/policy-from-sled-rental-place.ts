import type {PolicyInput} from "./policy-input.ts";

// the policy of part-1, the "old" policy rules
export default class PolicyFromSledRentalPlace {
  protected range: [number, number] = [0, 0];
  protected char: string = '';
  protected password: string = "";

  constructor(obj: PolicyInput) {
    this.range = obj.range;
    this.char = obj.char;
    this.password = obj.password;
  }

  get min(): number {
    return this.range[0];
  }

  get max(): number {
    return this.range[1];
  }

  public isPasswordValid(): boolean {
    if (!this.makesSense()) {
      return false;
    }
    let charCount = 0;
    this.password.split('').map(x => {
      if (x == this.char) {
        charCount++;
      }
    });
    return this.min <= charCount && charCount <= this.max;
  }

  protected makesSense(): boolean {
    if (this.min === 0 && this.max === 0) {
      return false;
    }
    if (this.min > this.max) {
      return false;
    }
    if (this.password == null || this.password === "") {
      return false;
    }
    if (this.char == null || this.char.length != 1) {
      return false;
    }
    return true;
  }
}
