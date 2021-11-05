import { Component, HostListener, OnInit } from '@angular/core';
import { Wisdom } from '../classes';
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
    this.teleport.getWisdom().subscribe((wisdom) => (this.wisdom = wisdom));
  }

  shift(): void {
    this.teleport
      .shapeShift()
      .subscribe((shifter) => shifter.shift(this.wisdom));
  }
}
