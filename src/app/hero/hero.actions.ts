import { Hero } from '../hero/hero';
import { Action } from '@ngrx/store';
export const LOAD_HEROES = 'LOAD_HEROES';
export const LOAD_HEROES_SUCCESS = 'LOAD_HEROES_SUCCESS';

export class LoadHeroesAction {
  readonly type = LOAD_HEROES;
  constructor () {}
}

export class LoadHeroesSuccessAction {
  readonly type = LOAD_HEROES_SUCCESS;
  constructor (public payload: Hero[]) {}
}

export type Action
  = LoadHeroesAction
  | LoadHeroesSuccessAction;
