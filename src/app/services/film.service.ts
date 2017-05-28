import { EventEmitter, Injectable } from '@angular/core';

import { Http, Response, URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

export class Film {
  constructor(public title: string, public posterUrl: string, public year: number ) {}
}

@Injectable()
export class FilmService {
  url: string = "http://www.omdbapi.com/?i=tt3896198&apikey=520bbe17&s=";

  constructor(private http: Http) { }

  prepareRequest() : URLSearchParams {
    let res = new URLSearchParams();

    return res;
  }

  getFilms(searchText: string, page: number = 1): Observable<Film> {
    return this.http.get(this.url+searchText+'&page='+page)
      .map(res => res.json())
      .flatMap((res:{Search :Array<any>} ) => Observable.from(res.Search) )
      .map((f :{Title,Poster,Year}) => new Film(f.Title, f.Poster, f.Year));
  }
}
