
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { FilmService } from '../services/film.service';
import { Film } from '../services/film.service';
import { SearchTextService } from '../services/search-text.service';


@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  private films: Film[] = [];
  private subscription: Subscription;

  constructor(
     private filmsService: FilmService,
     private searchService: SearchTextService) {}

  getFilms(searchText :string) {
    this.films = [];
    this.filmsService.getFilms(searchText).subscribe(
      (film :Film) => this.films.push(film)
    );
  }

  ngOnInit() {    
    let startSearchText: string = "lord";
    this.getFilms(startSearchText);

    this.subscription = this.searchService
      .getSearchText().subscribe((searchText: string) => this.getFilms(searchText));
  }

}
