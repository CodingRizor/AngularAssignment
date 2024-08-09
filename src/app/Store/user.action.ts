import { createAction, props } from '@ngrx/store';

export const saveSignupStep1Data = createAction(
  '[Signup Step 1] Save Data',
  props<{ data: any }>()
);

export const saveSignupStep2Data = createAction(
  '[Signup Step 2] Save Data',
  props<{ data: any }>()
);
