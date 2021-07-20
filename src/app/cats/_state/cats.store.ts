import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Cats } from './cats.model';


export interface CatsState extends EntityState<Cats> {
   key: string;
}

export function createInitialState(): CatsState {
  return {
    key: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cats' })
export class CatsStore extends EntityStore<CatsState> {

  constructor() {
    super(createInitialState());
  }

}

