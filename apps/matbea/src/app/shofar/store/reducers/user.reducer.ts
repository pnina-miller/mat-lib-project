import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export const userFeatureKey = 'user';

export interface StateUser {
  uuid:string;
}

export const initialState: StateUser = {
uuid: "Vasya",
};


export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsersSuccess, (state,action)=>({...state, uuid: action.uuid})),


);
export function reducer(state: StateUser | undefined, action: Action) {
  return userReducer(state, action);
}

