import { Shape, IShape } from './shape.class';

export class Wisdom {
  shapes: Shape[];

  constructor(shapes: IShape[]) {
    /**
     * Never blidnly trust the caller.
     * You don't know what's happening "outsize" your own little world/class
     */
    if (!shapes || !Array.isArray(shapes)) {
      console.error('new Wizdom was called with invalid shapes');
      return;
    }

    this.shapes = shapes.map((shape) => new Shape(shape));
  }

  add(ishape: IShape, index?: number): Shape[] {
    /**
     * Check all possible error scenarios at the top of the class.
     * Log your errors! Throw exceptions if needed
     */
    if (!this.shapes) {
      console.error('Wizdom add has no shapes');
      return this.shapes;
    }

    // We didn't get a shape, nothing to do
    if (!ishape) {
      console.error('Wizdom, add: ishape is null or undefined');
      return this.shapes;
    }

    // We got an invalid index
    // undefined IS a valid index
    if (index !== undefined && typeof index !== 'number') {
      console.error(`Wizdom, add: index is not a number ${index}`);
      return this.shapes;
    }

    /**
     * All is good:
     * - Process
     * - Act
     * - Return
     */
    const shape = new Shape(ishape);

    if (!index) {
      this.shapes.push(shape);
    } else {
      this.shapes.splice(index, 0, shape);
    }

    return this.shapes;
  }

  remove(index: number): Shape[] {
    if (!this.shapes) {
      console.error('Wizdom remove has no shapes');
      return this.shapes;
    }

    // We got an invalid index
    if (index !== undefined && typeof index !== 'number') {
      console.error(`Wizdom, remove: index is not a number ${index}`);
      return this.shapes;
    }

    // Index out of range
    if (index !== undefined && this.shapes.length < index) {
      console.error(
        `Wizdom, remove: index ${index} out of range ${this.shapes.length}`
      );
      return this.shapes;
    }

    // Act
    if (index === undefined) {
      this.shapes.pop();
    } else {
      this.shapes.splice(index, 1);
    }

    return this.shapes;
  }

  glamorize(value: string, index: number): Shape[] {
    if (!this.shapes) {
      console.error('Wizdom glamorize has no shapes');
      return this.shapes;
    }

    // We got an invalid index
    if (typeof index !== 'number') {
      console.error(`Wizdom, glamorize: index is not a number: ${index}`);
      return this.shapes;
    }

    // Index out of range
    if (this.shapes.length < index) {
      console.error(
        `Wizdom, glamorize: index ${index} out of range ${this.shapes.length}`
      );
      return this.shapes;
    }

    if (typeof value !== 'string') {
      console.error(`Wizdom, glamorize: value is not a string ${value}`);
      return this.shapes;
    }

    this.shapes[index].glamorize(value);

    return this.shapes;
  }
}
