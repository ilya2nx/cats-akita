import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../_state/cats.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private catsService: CatsService) { }

  ngOnInit(): void {
  }

  get list() {
    return this.catsService.objs
  }

}
