import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CatsStore, CatsState } from './cats.store';

@Injectable({ providedIn: 'root' })
export class CatsQuery extends QueryEntity<CatsState> {

  constructor(protected store: CatsStore) {
    super(store);
  }
  cats$ = this.selectAll();
}
