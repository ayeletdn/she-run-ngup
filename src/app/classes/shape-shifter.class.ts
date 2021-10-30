import { IShape, Wisdom } from '.';

export interface IShift {
  action: 'glamorize' | 'remove' | 'add';
  value: string | IShape;
  index?: number;
}

export class ShapeShifter {
  private shifts: IShift[];

  constructor(shifts: IShift[]) {
    if (!shifts || !Array.isArray(shifts)) {
      console.error('new ShapeShifter was called with invalid shifts');
      return;
    }

    this.shifts = shifts;
  }

  shift(wisdom: Wisdom): void {
    if (!wisdom || !wisdom.glamorize || !wisdom.add || !wisdom.remove) {
      console.error('ShapeShifter, shift, unexpected wisdom');
      return;
    }

    // for each shift instruction make a change to wisdom
    this.shifts.forEach((shift: IShift) => {
      switch (shift.action) {
        case 'glamorize':
          wisdom.glamorize(shift.value as string, shift.index);
          break;

        case 'add':
          wisdom.add(shift.value as IShape, shift.index);
          break;

        case 'remove':
          wisdom.remove(shift.index);
          break;

        default:
          console.error(`ShapeShifter, shift: unknown action: ${shift.action}`);
          break;
      }
    });
  }
}
