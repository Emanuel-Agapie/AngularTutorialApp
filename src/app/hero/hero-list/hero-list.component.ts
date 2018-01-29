import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Store } from '@ngrx/store';
import { State } from '@ngrx/store/src/state';
import { AppStore } from '../../app.store';
import { Observable } from 'rxjs/Observable';
import * as heroActions from '../hero.actions';

@Component({
  selector: 'app-heroes',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  heroes$: Observable<any>;

  constructor(private store: Store<AppStore>) {
    this.heroes$ = this.store.select(state => state.heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.store.dispatch(new heroActions.LoadHeroesAction());
    // this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.addHero({ name } as Hero)
  //     .subscribe(hero => {
  //       this.heroes.push(hero);
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroes = this.heroes.filter(h => h !== hero);
  //   this.heroService.deleteHero(hero).subscribe();
  // }
}
