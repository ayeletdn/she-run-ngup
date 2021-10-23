import { IShape, Wisdom } from '.';

export interface IShift {
  action: 'glamorize' | 'remove' | 'add';
  value: string | number | IShape;
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

  shift(wizdom: Wisdom): void {
    if (!wizdom || !wizdom.glamorize || !wizdom.add || !wizdom.remove) {
      console.error('ShapeShifter, shift, unexpected wizdom');
      return;
    }

    // for each shift instruction make a change to wizdom
    this.shifts.forEach((shift: IShift) => {
      switch (shift.action) {
        case 'glamorize':
          wizdom.glamorize(shift.value as string, shift.index);
          break;

        case 'add':
          wizdom.add(shift.value as IShape, shift.index);
          break;

        case 'remove':
          wizdom.remove(shift.index);
          break;

        default:
          console.error(`ShapeShifter, shift: unknown action: ${shift.action}`);
          break;
      }
    });
  }
}
