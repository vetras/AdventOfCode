import Range from "./range.ts";

export default class BoardingPass {
  private readonly rowCode: string;
  private readonly columnCode: string;

  constructor(code: string) {
    this.rowCode = code.substring(0, code.length - 3);
    this.columnCode = code.substring(code.length - 3);
  }

  getId(): number {
    return this.getRow() * 8 + this.getColumn();
  }

  private getRow(): number {
    const charArray = this.rowCode.split("");
    let temp = new Range(0, 127);
    for (const c of charArray) {
      if (c === 'B') {
        temp = temp.getUpperHalf();
      }
      if (c === 'F') {
        temp = temp.getLowerHalf();
      }
    }
    const final = temp.toArray();
    if (final[0] === final[1]) {
      return final[0];
    }
    throw new Error("Get Row did not converge into a single value");
  }

  private getColumn(): number {
    const charArray = this.columnCode.split("");
    let columns = new Range(0, 7);
    for (const c of charArray) {
      if (c === 'R') {
        columns = columns.getUpperHalf();
      }
      if (c === 'L') {
        columns = columns.getLowerHalf();
      }
    }
    const final = columns.toArray();
    if (final[0] === final[1]) {
      return final[0];
    }
    throw new Error("Get Column did not converge into a single value");
  }
}
