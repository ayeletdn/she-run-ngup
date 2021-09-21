import { Component, Input, OnInit } from '@angular/core';
import { delay, switchMapTo, tap } from 'rxjs/operators';
import { Wizdom } from '../classes';
import { TeleportService } from '../classes/teleport.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.svg',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  @Input() wizdom: Wizdom;

  constructor(private teleport: TeleportService) {}

  ngOnInit(): void {
    this.teleport
      .getWizdom()
      .pipe(
        tap((wizdom) => (this.wizdom = wizdom)),
        delay(4000),
        switchMapTo(this.teleport.shapeShift()),
        tap((shifter) => shifter.shift(this.wizdom))
      )
      .subscribe();
  }
}
