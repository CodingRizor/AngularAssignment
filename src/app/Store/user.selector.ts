import { createSelector } from '@ngrx/store';
import { AppState } from './app.state';

export const selectSignupStep1Data = createSelector(
  (state: AppState) => state.user,
  (userState) => userState.signupStep1Data
);

export const selectSignupStep2Data = createSelector(
  (state: AppState) => state.user,
  (userState) => userState.signupStep2Data
);
