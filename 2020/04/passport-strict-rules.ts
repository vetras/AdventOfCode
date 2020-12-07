import Passport from "./passport.ts";

function isWithinRange(value: string, min: number, max: number) {
  const nbr = parseInt(value, 10);
  return min <= nbr && nbr <= max;
}

export default class PassportStrictRules extends Passport {

  // overrides base method
  public isValid(): boolean {
    // cid is optional
    return this.byrValid() &&
      this.iyrValid() &&
      this.eyrValid() &&
      this.hgtValid() &&
      this.hclValid() &&
      this.eclValid() &&
      this.pidValid();
  }

  private byrValid() {
    return isWithinRange(this.byr, 1920, 2002);
  }

  private iyrValid() {
    return isWithinRange(this.iyr, 2010, 2020);
  }

  private eyrValid() {
    return isWithinRange(this.eyr, 2020, 2030);
  }

  private hgtValid() {
    if (this.hgt.endsWith("cm")) {
      const nbr = this.hgt.substring(0, this.hgt.length - 2);
      return isWithinRange(nbr, 150, 193);
    } else if (this.hgt.endsWith("in")) {
      const nbr = this.hgt.substring(0, this.hgt.length - 2);
      return isWithinRange(nbr, 59, 76);
    }
    return false;
  }

  private hclValid() {
    return new RegExp(/^#[0-9a-f]{6}$/i).test(this.hcl);
  }

  private eclValid() {
    return this.ecl === 'amb' || this.ecl === 'blu' || this.ecl === 'brn' || this.ecl === 'gry' || this.ecl === 'grn' || this.ecl === 'hzl' || this.ecl === 'oth';
  }

  private pidValid() {
    return new RegExp(/^[0-9]{9}$/i).test(this.pid);
  }
}
