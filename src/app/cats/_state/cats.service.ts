import { Injectable } from '@angular/core';
import { Cats } from './cats.model';
import { CatsQuery } from './cats.query';
import { CatsStore } from './cats.store';

@Injectable({ providedIn: 'root' })
export class CatsService {
    objs = [
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Shironeko.jpg',
            name: 'Shironeko',
            description: 'Самый счастливый и сонный кот в мире',
            id: 1,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Garfi.jpg',
            name: 'Garfi',
            description: 'Самый злой кот в мире',
            id: 2,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Sam.jpg',
            name: 'Sam',
            description: 'У кота Сэма есть потрясающие брови',
            id: 3,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Snoopy.jpg',
            name: 'Snoopy',
            description: 'Самый очаровательный котик',
            id: 4,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Venus.jpg',
            name: 'Venus',
            description: 'Кошка с двумя лицами',
            id: 5,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Maru.jpg',
            name: 'Maru',
            description: 'Повелитель коробок',
            id: 6,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Lil_Bub.jpg',
            name: 'Lil Bub',
            description: 'Вечный котёнок',
            id: 7,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Banye.jpg',
            name: 'Banye',
            description: 'Всегда удивлённый кот',
            id: 8,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Grumpy_Cat.jpg',
            name: 'Grumpy Cat',
            description: 'Сердитый котик',
            id: 9,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Hamilton.jpg',
            name: 'Hamilton',
            description: 'Кот-хипстер',
            id: 10,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Nala.jpg',
            name: 'Nala',
            description: 'Кошка, которая всегда в шоке',
            id: 11,
            liked: false,
        },
        {
            image: 'http://html.ftpes.ru/FrontEndTest/Colonel_Meow.jpg',
            name: 'Colonel Meow',
            description: 'Кот с самой длинной шерстью',
            id: 12,
            liked: false,
        },
    ];

    constructor(private catsStore: CatsStore, private catsQuery: CatsQuery) {}

    initCat() {
        this.catsStore.set(this.objs);
    }

    like(id: number, liked: any) {
        this.catsStore.update(id, { liked });
    }

    delete(id: number) {
        this.catsStore.remove(id);
    }

    add(cat: Cats) {
        this.catsStore.add({ ...cat, id: Math.random() });
    }

    update(cat: Cats) {
        this.catsStore.update(cat.id, cat) 
    }
}
