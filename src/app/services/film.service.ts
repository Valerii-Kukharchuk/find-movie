import { EventEmitter, Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
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

  getFilms(searchText: string): Observable<Film> {
    return this.http.get(this.url+searchText)
      .map(res => res.json())
      .flatMap((res:{Search :Array<any>} ) => Observable.from(res.Search) )
      .map((f :{Title,Poster,Year}) => new Film(f.Title, f.Poster, f.Year));
  }
}
