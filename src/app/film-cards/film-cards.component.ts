
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { FilmService } from '../services/film.service';
import { Film } from '../services/film.service';
import { SearchFiledService } from '../services/search-filed.service';


@Component({
  selector: 'film-cards',
  templateUrl: './film-cards.component.html',
  styleUrls: ['./film-cards.component.css']
})
export class FilmCardsComponent implements OnInit {
  private films: Film[] = [];
  private subscription: Subscription;

  constructor(
     private filmsService: FilmService,
     private searchService: SearchFiledService) 
    {
    
    // this.filmsService.searchEvent
    //   .subscribe(
    //     searchText => {
    //       this.films = [];
    //       this.filmsService.getFilms(searchText).subscribe(
    //         f => this.films.push(f)
    //       );
    //     }
    //   );
  }

  getFilms(searchText :string) {
    this.films = [];
    this.filmsService.getFilms(searchText).subscribe(
      (film :Film) => this.films.push(film)
    );
  }

  ngOnInit() {    
    let startSearchText: string = "star";
    this.getFilms(startSearchText);

    this.subscription = this.searchService
      .getSearchText().subscribe((searchText: string) => this.getFilms(searchText));
  }

}
