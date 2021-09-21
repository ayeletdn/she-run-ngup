import { IWhere, Where } from './where.class';

export interface IShape {
  how: string;
  where: IWhere[];
}

export class Shape {
  private _points: Where[];
  public _class: string;

  constructor(shape: IShape) {
    if (!shape) {
      console.error('missing shape');
    }

    this._class = shape.how;
    this._points = shape.where?.map((point) => new Where(point)) || [];
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
