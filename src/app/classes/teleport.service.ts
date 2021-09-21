import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Wizdom } from '.';
import { IShape } from '.';
import { IShift, ShapeShifter } from '.';

@Injectable({
  providedIn: 'root',
})
export class TeleportService {
  constructor(private http: HttpClient) {}

  getWizdom(): Observable<Wizdom> {
    return this.http
      .get<IShape[]>('/assets/wizdom.json')
      .pipe(map((data) => new Wizdom(data)));
  }

  shapeShift(): Observable<ShapeShifter> {
    return this.http
      .get<IShift[]>('/assets/shifts.json')
      .pipe(map((shifts) => new ShapeShifter(shifts)));
  }
}
