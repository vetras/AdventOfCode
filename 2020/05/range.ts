export default class Range {
  private readonly min: number;
  private readonly max: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  getUpperHalf(): Range {
    if (this.min == this.max) {
      return this;
    }
    let half = Math.floor((this.max - this.min) / 2);
    return new Range(this.min + half + 1, this.max);
  }

  getLowerHalf(): Range {
    if (this.min == this.max) {
      return this;
    }
    let half = Math.floor((this.max - this.min) / 2);
    return new Range(this.min, this.min + half);
  }

  toArray() {
    return [this.min, this.max];
  }
}
