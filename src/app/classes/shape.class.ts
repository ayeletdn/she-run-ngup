import { IPolygon, Polygon } from './polygon.class';

export interface IShape {
  how: string;
  polygon: IPolygon[];
}

export class Shape {
  private _points: Polygon[];
  public _class: string;

  constructor(shape: IShape) {
    if (!shape) {
      console.error('missing shape');
    }

    this._class = shape.how;
    this._points = shape.polygon?.map((point) => new Polygon(point)) || [];
  }

  glamorize(glamour: string) {
    this._class = glamour;
  }

  get points(): string {
    return this._points.map((p) => p.pair).join(' ');
  }

  get glamour(): string {
    return this._class;
  }
}
