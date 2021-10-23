export interface IPolygon {
  x: number;
  y: number;
}

export class Polygon {
  private x: number;
  private y: number;

  constructor(point: IPolygon) {
    this.x = point.x;
    this.y = point.y;
  }

  get pair(): string {
    return this.x + ',' + this.y;
  }
}
