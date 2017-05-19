
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { FilmService } from '../services/film.service';
import { Film } from '../services/film.service';


@Component({
  selector: 'film-cards',
  templateUrl: './film-cards.component.html',
  styleUrls: ['./film-cards.component.css']
})
export class FilmCardsComponent implements OnInit {
  private films: Film[] = [];
  private subscription: Subscription;

  constructor(private service: FilmService) {
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
    let startSearchText: string = "star";
    this.service.getFilms(startSearchText).subscribe(
      (film :Film) => this.films.push(film)
    );
  }

}
