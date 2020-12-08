const sep = "\n";
const TREE = "#";

function skipEmptyLines(line: string): boolean {
  return line !== null && line.length > 0;
}

function isTree(s: string): boolean {
  return s === TREE;
}

function debug(...args: any[]) {
  //console.log(...args);
}

export default class Map {
  private readonly rows: string[] = [];
  private readonly numberOfColumns: number = 0;
  private readonly xIncrement: number;
  private readonly yIncrement: number;
  private x: number = 0;
  private y: number = 0;
  private map: string = "";

  constructor(map: string, xIncrement: number = 1, yIncrement: number = 3) {
    this.map = map;
    this.xIncrement = xIncrement;
    this.yIncrement = yIncrement;
    this.rows = this.map
      .split(sep)
      .filter(skipEmptyLines);
    this.numberOfColumns = this.rows[0].length;
  }

  public countTress() {
    const numberOfSlopes = this.rows.length / this.xIncrement;
    let count = 0;
    for (let i = 0; i < numberOfSlopes; i++) {
      if (isTree(this.pos(this.x, this.y))) {
        count++;
      }
      this.x += this.xIncrement;
      this.y += this.yIncrement;
    }
    return count;
  }

  private pos(x: number, y: number): string {
    debug(`x,y ${x} ${y} = ${this.rows[x][y]}`);
    let square = this.rows[x][y];
    if (square === undefined) {
      let newY = y - this.numberOfColumns;
      debug(`newY ${newY} = ${this.rows[x][newY]}`);
      return this.pos(x, newY);
    }
    return square;
  }
}
