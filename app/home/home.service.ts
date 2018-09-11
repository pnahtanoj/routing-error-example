import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {
  items: any[] = [];

  constructor() {
    this.items = [{ id: 1 }, { id: 2 }, { id: 3 }];
  }

  fetchItems() {
    return of([...this.items])
    // .pipe(delay(1000));
  }

  addNew() {
    this.items = [...this.items, {id: this.items.length + 1}];

    return of({});
  }
}