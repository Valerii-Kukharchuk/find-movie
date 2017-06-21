import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MdToolbarModule, MdButtonModule, MdIconModule, MdAutocompleteModule,
  MdSidenavModule, MdSelectModule, MdProgressSpinnerModule} from '@angular/material';
import {MdCardModule, MdGridListModule, MdInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmCardComponent } from './film-card/film-card.component';

import { FilmService } from './services/film.service';
import { SearchTextService } from './services/search-text.service';
import { FilmSearchComponent } from './film-search/film-search.component';
import { ShowIfScrollDirective } from './directives/show-if-scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilmListComponent,
    FilmCardComponent,
    FilmSearchComponent,
    ShowIfScrollDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdGridListModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdSelectModule,
    MdProgressSpinnerModule,
    MdAutocompleteModule
  ],
  providers: [FilmService,SearchTextService],
  bootstrap: [AppComponent]
})
export class AppModule { }
