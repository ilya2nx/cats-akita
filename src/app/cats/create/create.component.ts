import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CatsQuery } from '../_state/cats.query';
import { CatsService } from '../_state/cats.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  cats$ = this.catsQuery.cats$

  newImage = '';

  newName = '';

  newDescription = '';

  form!: FormGroup;

  id;

  constructor(private catsService: CatsService, private catsQuery: CatsQuery, route: ActivatedRoute) { 
    this.id = +route.snapshot.params.id;
    console.log(this.id)
   }

  ngOnInit(): void {
    this.form = new FormGroup({
      image: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    })
  }

  submit() {
    if (this.form.valid) {
      this.form.reset()
    }
  }

  get warnings ( ) {
    return this.catsService.warnings
  }

  add() {
    this.catsService.add(this.newImage, this.newName, this.newDescription);
  }
}
