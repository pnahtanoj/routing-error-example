import * as actions from './home.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export class State {
  items: any[]
}

export const initialState: State = {
  items: []
};

export function reducer(state: State = initialState, action: actions.Actions) {
  switch (action.type) {
    case actions.SET_ITEMS:
      console.log('SETTING ITEMS: ', action.payload);
      return Object.assign({}, state, {
        items: [...action.payload]
      });
    default:
      return state;
  }
}

export interface StateInterface {
  home: State
}

export const selectHome = createFeatureSelector<StateInterface>('home');
export const selectItems = createSelector(selectHome, home => home.home.items);
