
import { Component, OnInit } from '@angular/core';

import {MdSelectChange} from '@angular/material';

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

  private description :string;
  private searchText :string;
  private page :number;

  views = [
    {value: 'poster-right', viewValue: 'Poster Card View'},
    {value: 'poster-up', viewValue: 'Backdrop Card View'}
  ];

  selectedViewValue :string = "poster-up";

  constructor(
     private filmsService: FilmService,
     private searchService: SearchTextService) {}

  addFilms() {
    this.filmsService.getFilms(this.searchText, this.page).subscribe(
      (film :Film) => this.films.push(film)
    );    
  }

  newSearchingFilm() {
    this.description = "Searching ...";
    this.films = [];
    this.filmsService.getFilms(this.searchText).subscribe(
      (film :Film) => this.films.push(film),
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
