import { Component, Input, OnInit } from '@angular/core';

import { FilmListViews } from '../shared/filmsListViews';

import { Film } from '../services/film.service';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent {

  static EMPTY_POSTER = "http://placehold.it/320x150";

  @Input() film: Film;

  @Input() view: string;

  isPosterUp():boolean {
    return !(this.view == FilmListViews.posterUp);
  }

  isPosterRight():boolean {
    return !(this.view == FilmListViews.posterRight);
  }

  getPosterUrl() :string {
    return this.film.posterUrl.length < 5 
      ? FilmCardComponent.EMPTY_POSTER
      : this.film.posterUrl;
  }

}

