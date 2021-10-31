import { IPoint, Point } from './point.class';

export interface IShape {
  how: string;
  polygon: IPoint[];
}

export class Shape {
  private _polygon: Point[];
  public _class: string;

  constructor(shape: IShape) {
    if (!shape) {
      console.error('missing shape');
    }

    this._class = shape.how;
    this._polygon = shape.polygon?.map((point) => new Point(point)) || [];
  }

  glamorize(glamour: string) {
    this._class = glamour;
  }

  get points(): string {
    return this._polygon.map((p) => p.pair).join(' ');
  }

  get glamour(): string {
    return this._class;
  }
}
