import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Wisdom } from '.';
import { IShape } from '.';
import { IShift, ShapeShifter } from '.';

@Injectable({
  providedIn: 'root',
})
export class TeleportService {
  constructor(private http: HttpClient) {}

  getWizdom(): Observable<Wisdom> {
    return this.http
      .get<IShape[]>('/assets/PolygonsOfWisdom.json')
      .pipe(map((data) => new Wisdom(data)));
  }

  shapeShift(): Observable<ShapeShifter> {
    return this.http
      .get<IShift[]>('/assets/shifts.json')
      .pipe(map((shifts) => new ShapeShifter(shifts)));
  }
}
