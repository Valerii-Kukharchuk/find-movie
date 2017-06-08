import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchTextService {
  private subject = new Subject<string>();
 
  sendSearchText(searchText: string) {
      this.subject.next(searchText);
  }

  getSearchText(): Observable<string> {
      return this.subject.asObservable();
  }
}
