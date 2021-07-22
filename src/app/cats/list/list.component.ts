import { Component, OnInit } from '@angular/core';
import { CatsQuery } from '../_state/cats.query';
import { CatsService } from '../_state/cats.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private catsService: CatsService, private catsQuery: CatsQuery) { }

  ngOnInit(): void {    
    if (!this.catsQuery.getHasCache()) this.catsService.initCat();
  }

}
