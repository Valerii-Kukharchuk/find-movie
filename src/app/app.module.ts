import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdToolbarModule} from '@angular/material';
import {MdCardModule, MdGridListModule, MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCardComponent } from './film-card/film-card.component';

import { FilmService } from './services/film.service';
import { SearchFiledService } from './services/search-filed.service';
import { FilmSearchComponent } from './film-search/film-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmListComponent,
    FilmCardComponent,
    FilmSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule
  ],
  providers: [FilmService,SearchFiledService],
  bootstrap: [AppComponent]
})
export class AppModule { }
