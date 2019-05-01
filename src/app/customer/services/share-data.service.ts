import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  currentTag: BehaviorSubject<number>;
  currentTag$: Observable<number>;
  constructor() {
    this.currentTag = new BehaviorSubject<number>(2);
    this.currentTag$ = this.currentTag.asObservable();
  }
  getCurrentTag() {
    return this.currentTag$;
  }
  setCurrentTag(tagNumber) {
    this.currentTag.next(tagNumber);
  }
}
