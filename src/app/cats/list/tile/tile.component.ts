import { Component, OnInit } from '@angular/core';
import { CatsQuery } from '../../_state/cats.query';
import { CatsService } from '../../_state/cats.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  cats$ = this.catsQuery.cats$

  constructor(private catsService: CatsService, private catsQuery: CatsQuery) { }

  like(id: number,liked: boolean) {
    this.catsService.like(id, !liked)
  }

  delete(id: number) {
    this.catsService.delete(id)
  }
}
