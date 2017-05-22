
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { FilmService } from '../services/film.service';
import { Film } from '../services/film.service';
import { SearchFiledService } from '../services/search-filed.service';


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
     private searchService: SearchFiledService) {}

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
