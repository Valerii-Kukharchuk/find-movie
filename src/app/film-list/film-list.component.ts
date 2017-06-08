
import { Component, OnInit } from '@angular/core';

import {Observable} from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { FilmListViews } from '../shared/filmsListViews';
import { FilmService, Film, SearchFilmResult } from '../services/film.service';
import { SearchTextService } from '../services/search-text.service';


@Component({
  selector: 'film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit  {
  private films: Film[] = [];
  private subscription: Subscription;

  private description :string;
  private searchText :string;
  private page :number;
  private totalResults :number;

  private isAddingNewFilms: boolean = false;

  views = [
    {value: FilmListViews.posterRight, viewValue: 'Poster Card View'},
    {value: FilmListViews.posterUp, viewValue: 'Backdrop Card View'}
  ];

  selectedViewValue :string = FilmListViews.posterUp;

  constructor(
     private filmsService: FilmService,
     private searchService: SearchTextService) {}

  addFilms() {
    this.isAddingNewFilms = true;
    this.filmsService.getSearchFilmResult(this.searchText, this.page).subscribe(
      (arg :SearchFilmResult) => {
          arg.films.forEach(film => this.films.push(film));
          this.totalResults = arg.totalResults;
      },
      (error :any) => this.isAddingNewFilms = false,
      () => this.isAddingNewFilms = false
    );    
  }

  newSearchingFilm() {
    this.description = "Searching ...";
    this.films = [];
    this.page = 1;
    this.filmsService.getSearchFilmResult(this.searchText).subscribe(
      (arg :SearchFilmResult) => {
          this.films = arg.films;
          this.totalResults = arg.totalResults;
      },
      (error: any) => this.description = "No found result",
      () => {
        if( !this.films.length ) { 
          this.description = "No found result";
        } else {
          this.description = "Searching result:";
        } }
    );    
  }

  ngOnInit() {            
    this.searchText = "lord";
    
    this.newSearchingFilm();
    this.description = "The most searching movies";
    this.page = 1;

    this.subscription = this.searchService
      .getSearchText().subscribe((searchText: string) => {
        this.searchText = searchText;
        this.newSearchingFilm();
      });
  }

  addNextFilmsPage() {
    this.page++;
    this.addFilms();
  }

}
