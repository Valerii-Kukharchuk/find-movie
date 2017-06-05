import { EventEmitter, Injectable } from '@angular/core';

import { Http, Response, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

export class Film {
  static N_A: string = "N/A";  
  constructor(
    public id : string,
    public title: string, 
    public posterUrl: string, 
    public year: number,
    public genre: [string] = [Film.N_A],
    public director: string = Film.N_A,
    public plot: string = "",
    public country: [string] = [Film.N_A] ) {}
}

export class SearchFilmResult {
  constructor(
      public totalResults :number, 
      public films :[Film]) {}
}

@Injectable()
export class FilmService {
  apiKey: string = "520bbe17";

  url: string = "http://www.omdbapi.com/?apikey=520bbe17&s=";

  constructor(private http: Http) { }

  prepareRequest() : URLSearchParams {
    let res = new URLSearchParams();

    return res;
  }

  getSearchFilmResult(searchText: string, page: number = 1): Observable<SearchFilmResult> {
    return this.http.get(this.url+searchText+'&page='+page)
      .map(res => res.json())
      .map( (arg :{Search, totalResults:number}) =>       
        new SearchFilmResult(arg.totalResults,
          arg.Search.map((f :{imdbID,Title,Poster,Year}) => 
            new Film(f.imdbID,f.Title, f.Poster, f.Year)))
      );
  }
}
