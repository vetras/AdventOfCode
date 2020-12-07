const keyValueSep = ":";

export default class Passport {
  public static readonly FieldSeparator = " ";

  protected byr: string = ""; // (Birth Year)
  protected iyr: string = ""; // (Issue Year)
  protected eyr: string = ""; // (Expiration Year)
  protected hgt: string = ""; // (Height)
  protected hcl: string = ""; // (Hair Color)
  protected ecl: string = ""; // (Eye Color)
  protected pid: string = ""; // (Passport ID)
  protected cid: string = ""; // (Country ID)

  constructor(data: string) {
    const keyValuePairs = data.split(Passport.FieldSeparator);
    for (const keyValuePair of keyValuePairs) {
      this.parseField(keyValuePair);
    }
  }

  isValid(): boolean {
    return (this.byr.length !== 0) &&
      (this.iyr.length !== 0) &&
      (this.eyr.length !== 0) &&
      (this.hgt.length !== 0) &&
      (this.hcl.length !== 0) &&
      (this.ecl.length !== 0) &&
      (this.pid.length !== 0);
    // cid is optional (this.cid.length !== 0)
  }

  public toString(): string {
    const status = this.isValid() ? "VALID" : "INVALID"
    return `[Passport ${status}] byr: ${this.byr} iyr: ${this.iyr} eyr: ${this.eyr} hgt: ${this.hgt} hcl: ${this.hcl} ecl: ${this.ecl} pid: ${this.pid} cid: ${this.cid}`;
  }

  private parseField(keyValuePair: string) {
    const keyValue = keyValuePair.split(keyValueSep);
    const key = keyValue[0];
    const value = keyValue[1];
    this.setField(key, value);
  }

  private setField(key: string, value: string) {
    switch (key.toLocaleLowerCase()) {
      case 'byr':
        this.byr = value;
        break;
      case  'iyr':
        this.iyr = value;
        break;
      case 'eyr':
        this.eyr = value;
        break;
      case 'hgt':
        this.hgt = value;
        break;
      case  'hcl':
        this.hcl = value;
        break;
      case  'ecl':
        this.ecl = value;
        break;
      case  'pid':
        this.pid = value;
        break;
      case  'cid':
        this.cid = value;
        break;
      default:
        throw new Error(`Unknown key name: '${key}'`);
    }
  }
}
