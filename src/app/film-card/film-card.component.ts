import { Component, Input, OnInit } from '@angular/core';

import { Film } from '../services/film.service';

@Component({
  selector: 'film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent {

  @Input() film: Film;

  @Input() view: string;

  isPosterUp():boolean {
    return !(this.view == 'poster-up');
  }

  isPosterRight():boolean {
    return !(this.view == 'poster-right');
  }

}

