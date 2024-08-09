import { createReducer, on } from '@ngrx/store';
import { saveSignupStep1Data, saveSignupStep2Data } from './user.action';

const initialState = {
  signupStep1Data: null,
  signupStep2Data: null
};

const _userReducer = createReducer(
  initialState,
  on(saveSignupStep1Data, (state, { data }) => ({
    ...state,
    signupStep1Data: data
  })),
  on(saveSignupStep2Data, (state, { data }) => ({
    ...state,
    signupStep2Data: data
  }))
);

export function userReducer(state:any, action:any) {
  return _userReducer(state, action);
}
