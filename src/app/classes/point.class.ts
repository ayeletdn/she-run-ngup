export interface IPoint {
  x: number;
  y: number;
}

export class Point {
  private x: number;
  private y: number;

  constructor(point: IPoint) {
    this.x = point.x;
    this.y = point.y;
  }

  get pair(): string {
    return this.x + ',' + this.y;
  }
}
