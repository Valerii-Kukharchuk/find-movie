import { Component, OnInit } from '@angular/core';
import { SearchTextService } from '../services/search-filed.service';

@Component({
  selector: 'film-search', 
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.css']
})
export class FilmSearchComponent {

  searchText: string;

  constructor(private searchService: SearchTextService) { }

  onSearch() {
    this.searchService.sendSearchText(this.searchText);
  }

}
