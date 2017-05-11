import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdToolbarModule} from '@angular/material';
import {MdCardModule, MdGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmCardsComponent } from './film-cards/film-cards.component';
import { FilmCardComponent } from './film-card/film-card.component';

import { FilmService } from './services/film.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmCardsComponent,
    FilmCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdGridListModule
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
