import { Component, HostListener, Input, OnInit } from '@angular/core';
import { delay, switchMapTo, tap } from 'rxjs/operators';
import { ShapeShifter, Wisdom } from '../classes';
import { TeleportService } from '../classes/teleport.service';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.svg',
  styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit {
  wisdom: Wisdom;
  @HostListener('click')
  onClick() {
    this.shift();
  }

  constructor(private teleport: TeleportService) {}

  ngOnInit(): void {
    this.teleport.getWizdom().subscribe((wizdom) => (this.wisdom = wizdom));
  }

  shift(): void {
    this.teleport
      .shapeShift()
      .subscribe((shifter) => shifter.shift(this.wisdom));
  }
}
