import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeroesComponent } from './hero/hero-list/hero-list.component';
import { HeroDetailComponent } from './hero/hero-detail/hero-detail.component';
import { HeroService } from './hero/hero.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService  } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { heroReducer } from './hero/hero.reducer';
import { EffectsModule } from '@ngrx/effects';
import { APP_EFFECTS } from './app.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot({ heroes: heroReducer }),
    EffectsModule.forRoot(APP_EFFECTS)
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
