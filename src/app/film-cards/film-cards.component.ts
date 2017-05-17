
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

import { FilmService } from '../services/film.service';
import { Film } from '../services/film.service';


@Component({
  selector: 'film-cards',
  templateUrl: './film-cards.component.html',
  styleUrls: ['./film-cards.component.css']
})
export class FilmCardsComponent implements OnInit {
  private films: Film[] = [];

  constructor(private service: FilmService) {
    let startSearchText: string = "star";
    this.service.getFilms(startSearchText).subscribe(
      f => this.films.push(f)
    );

    this.service.searchEvent
      .subscribe(
        searchText => {
          this.films = [];
          this.service.getFilms(searchText).subscribe(
            f => this.films.push(f)
          );
        }
      );
  }

  ngOnInit() {    
    //this.films = this.service.getFilms();
  }

}
