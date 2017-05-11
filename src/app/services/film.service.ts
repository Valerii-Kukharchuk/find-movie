import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';


import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

export class Film {
  constructor(public title: string, public posterUrl: string, public year: number ) {}
}

@Injectable()
export class FilmService {

  url: string = "http://www.omdbapi.com/?page=1&s=star";

  constructor(private http: Http) { }

  private extractData(res: Response) {
    let body = res.json();
    return body.Search || [];
  }

  getFilms(): Observable<Film> {
    return this.http.get(this.url)
      //.flatMap(this.extractData)
      //.map(this.extractData)
      .map(res => res.json())
      .flatMap((res:{Search :Array<any>} ) => Observable.from(res.Search) )
      .map((f :{Title,Poster,Year}) => new Film(f.Title, f.Poster, f.Year));
      
     // .map(f => new Film(f.Title,f.Poster,f.Year));
    //let films = arr.;
    // let res: Film[] = [];
    // arr.subscribe(f => res.push(new Film(f.Title,f.Poster,f.Year)));
    // return res;
  }

}
