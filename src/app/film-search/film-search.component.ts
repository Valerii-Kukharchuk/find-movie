import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { SearchTextService } from '../services/search-text.service';
import { FilmService, Film, SearchFilmResult } from '../services/film.service';

import 'rxjs/add/operator/debounceTime';

@Component({
  selector: 'film-search', 
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent implements OnInit {

  searchText: string;

  control :FormControl;

  private films: [Film];

  constructor(
    private searchService: SearchTextService,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    this.control = new FormControl();
    this.control.valueChanges
            .debounceTime(200)
            .filter(searchValue => {
              searchValue = searchValue || "";
              return searchValue.length > 4;
            })
            .switchMap(searchValue => this.filmService.getSearchFilmResult(searchValue))
            .subscribe((arg :SearchFilmResult) => this.films = arg.films);
  }

  onSearch() {
    this.searchService.sendSearchText(this.searchText);
  }

}
