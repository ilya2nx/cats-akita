import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../_state/cats.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor(private catsService: CatsService) { }

  ngOnInit(): void {
  }

  get list() {
    return this.catsService.objs
  }
}
