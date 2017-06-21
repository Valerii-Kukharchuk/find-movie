import { Injectable } from '@angular/core';

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
  private paramSearchString :string = 's';
  private paramPage :string = 'page';
  private requestParams :URLSearchParams;  

  url: string = "http://www.omdbapi.com";

  constructor(private http: Http) { 
    this.init();
  }

  prepareRequest(searchText: string, page: number = 1) {
    this.requestParams.set(this.paramSearchString, searchText.trim());
    this.requestParams.set(this.paramPage, page.toString());
  }

  getSearchFilmResult(searchText: string, page: number = 1): Observable<SearchFilmResult> {
    this.prepareRequest(searchText,page);
    return this.http.get(this.url+ '/?' +this.requestParams.toString())
      .map(res => res.json())
      .filter((arg :{Response:string}) => arg.Response === "True" )
      .map( (arg :{Search, totalResults:number} ) =>
        new SearchFilmResult(arg.totalResults,
          arg.Search.map((f :{imdbID,Title,Poster,Year}) =>
            new Film(f.imdbID,f.Title, f.Poster, f.Year)))
      );
  }

  private init() {
    let apiKey: string = "520bbe17";
    this.requestParams = new URLSearchParams(`apiKey=${apiKey}`);
    this.requestParams.append(this.paramSearchString,'');
    this.requestParams.append(this.paramPage,'1');
  }
}
