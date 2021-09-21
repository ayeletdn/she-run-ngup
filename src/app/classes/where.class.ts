export interface IWhere {
  x: number;
  y: number;
}

export class Where {
  private x: number;
  private y: number;

  constructor(point: IWhere) {
    this.x = point.x;
    this.y = point.y;
  }

  get pair(): string {
    return this.x + ',' + this.y;
  }
}
