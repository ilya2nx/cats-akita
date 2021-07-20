import { Component, OnInit } from '@angular/core';
import { CatsService } from '../_state/cats.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private catsService: CatsService) { }

  ngOnInit(): void {
    this.catsService.initCat()
  }

}
