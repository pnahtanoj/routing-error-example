import { Action } from '@ngrx/store';

export const ADD_ITEM = '[HOME] Add Item';
export const FETCH_ITEMS = '[HOME] Fetch Items';
export const SET_ITEMS = '[HOME] Set Items';
export const DEAD_END = '[HOME] Dead End';

export class AddItem implements Action {
  readonly type = ADD_ITEM;
}

export class FetchItems implements Action {
  readonly type = FETCH_ITEMS;
}

export class SetItems implements Action {
  readonly type = SET_ITEMS;

  constructor(public payload: any[]) {
  }
}

export class DeadEnd implements Action {
  readonly type = DEAD_END
}

export type Actions =
  | AddItem
  | FetchItems
  | SetItems
  | DeadEnd
  ;