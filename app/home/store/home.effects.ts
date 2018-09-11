import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import * as actions from './home.actions';
import { HomeService } from '~/home/home.service';

@Injectable()
export class HomeEffects {
  @Effect()
  fetch$: Observable<Action> = this.actions$
    .ofType(actions.FETCH_ITEMS)
    .pipe(
      switchMap(_ => this.data.fetchItems()),
      tap(_ => console.log('FETCH_ITEMS: ', _)),
      map(items => new actions.SetItems(items))
    );

    @Effect()
    add$: Observable<Action> = this.actions$
      .ofType(actions.ADD_ITEM)
      .pipe(
        tap(_ => console.log('ADD_ITEM')),
        switchMap(_ => this.data.addNew()),
        map(items => new actions.DeadEnd())
      );
  
  constructor(
    private actions$: Actions,
    private data: HomeService
  ) {
  }
} 