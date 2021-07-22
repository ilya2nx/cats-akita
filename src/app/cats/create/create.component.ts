import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CatsQuery } from '../_state/cats.query';
import { CatsService } from '../_state/cats.service';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
    form!: FormGroup;
    id;
    mode;

    constructor(
        private catsService: CatsService,
        private catsQuery: CatsQuery,
        route: ActivatedRoute,
        private router: Router
    ) {
        this.id = +route.snapshot.params.id;
        this.mode = route.snapshot.data.mode;
    }

    get labelButton() {
        return this.isEdit ? 'Редактировать' : 'Создать';
    }

    get labelTitle() {
        return this.isEdit ? 'Редактировать карточку' : 'Создать карточку';
    }

    get isEdit() {
        return this.mode === 'edit';
    }

    ngOnInit(): void {
        this.initForm();
    }

    initForm() {
        this.form = new FormGroup({
            id: new FormControl(0),
            image: new FormControl('', Validators.required),
            name: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
        });

        if (this.isEdit) {
            if (this.id) {
                const enitity = this.catsQuery.getEntity(this.id);
                enitity && this.form.patchValue(enitity);
            }
        }
    }

    submit() {
        if (this.form.invalid) return;

        if (!this.isEdit) {
            this.add();
        } else this.update();

        this.form.reset();

        this.router.navigate(['/list', 'tile']);
    }

    add() {
        this.catsService.add(this.form.value);
    }

    update() {
        this.catsService.update(this.form.value);
    }
}
