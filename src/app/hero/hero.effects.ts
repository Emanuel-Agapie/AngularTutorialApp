import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { Action } from './hero.actions';
import { Effect, Actions } from '@ngrx/effects';
import * as heroActions from './hero.actions';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroEffects {

  @Effect() loadHeroes$ = this.actions$
  .ofType(heroActions.LOAD_HEROES)
  .switchMap(() => this.heroService.getHeroes()
    .map(heroes => (new heroActions.LoadHeroesSuccessAction(heroes)))
  );

  constructor(
    private heroService: HeroService,
    private actions$: Actions
  ) {}

}
