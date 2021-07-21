import { Component, OnInit } from '@angular/core';
import { CatsQuery } from '../../_state/cats.query';
import { CatsService } from '../../_state/cats.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  cats$ = this.catsQuery.cats$

  constructor(private catsService: CatsService, private catsQuery: CatsQuery) { }

  ngOnInit(): void {
  }

  like(id: number,liked: boolean) {
    this.catsService.like(id, !liked)
  }

  delete(id: number) {
    this.catsService.delete(id)
  }

}
