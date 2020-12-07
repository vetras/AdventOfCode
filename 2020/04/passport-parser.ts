import Passport from "./passport.ts";

const lineTermination = "\n";

export default class PassportParser {
  private passports: Passport[] = [];
  private passportCreator: (str: string) => Passport = (str) => new Passport(str);

  constructor(data: string, fn: any = null) {
    if(fn) {
      this.passportCreator = fn;
    }
    const lines = data.split(lineTermination);
    let currentPassport = [];

    for (const line of lines) {
      if (line.length > 0) {
        currentPassport.push(line);
      } else {
        this.buildPassport(currentPassport);
        currentPassport = [];
        currentPassport.push(line);
      }
    }

    // the loop may end and we may have a pending passport to create
    if (currentPassport.length > 1) {
      this.buildPassport(currentPassport);
    }
  }

  private buildPassport(currentPassport: any[]) {
    const current = currentPassport.join(Passport.FieldSeparator);
    this.passports.push(this.passportCreator(current.trim()));
  }

  getNumberOfValidPassports() {
    let count = 0;
    this.passports.map(x => x.isValid() ? count++ : 0);
    return count;
  }

  getNumberOfPassports() {
    return this.passports.length;
  }
}
