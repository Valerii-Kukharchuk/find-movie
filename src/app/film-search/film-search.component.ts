import { Component, OnInit } from '@angular/core';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'film-search', 
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {

  searchText: string;

  constructor(private service: FilmService) { }

  onSearch() {
    this.service.searchEvent.emit(this.searchText);
  }

}
