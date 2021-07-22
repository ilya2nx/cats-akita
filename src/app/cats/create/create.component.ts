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

  get toggle() {
    return this.catsService.toggle
  }

  constructor(private catsService: CatsService, private catsQuery: CatsQuery, route: ActivatedRoute) { 
    this.id = +route.snapshot.params.id;
    const catCard = catsQuery.getEntity(this.id);
    this.newImage = catCard?.image!;
    this.newName = catCard?.name!;
    this.newDescription = catCard?.description!;
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

  add() {
    this.catsService.add(this.newImage, this.newName, this.newDescription);
  }

  update() {
    this.catsService.update(this.id, this.newImage, this.newName, this.newDescription)
  }
}
