const sep = "\n";
const tree = "#";
const xIncrement = 1;
const yIncrement = 3;

function skipEmptyLines(line: string): boolean {
  return line !== null && line.length > 0;
}

function debug(...args: any[]) {
  //console.log(...args);
}

export default class Map {
  private readonly rows: string[] = [];
  private readonly numberOfColumns: number = 0;
  private x: number = 0;
  private y: number = 0;
  private map: string = "";

  constructor(map: string) {
    this.map = map;
    this.rows = this.map
      .split(sep)
      .filter(skipEmptyLines);
    this.numberOfColumns = this.rows[0].length;
  }

  public countTress() {
    let count = 0;
    for (let i = 0; i < this.numberOfRows(); i++) {
      count = this.extracted(count);
    }
    return count;
  }

  private extracted(count: number) {
    if (this.isTree(this.pos(this.x, this.y))) {
      count++;
    }
    this.x += xIncrement;
    this.y += yIncrement;
    return count;
  }

  public numberOfRows() {
    return this.rows.length;
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

  private isTree(s: string) {
    return s === tree;
  }
}
