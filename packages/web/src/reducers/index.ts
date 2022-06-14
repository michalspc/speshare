import { combineReducers } from '@reduxjs/toolkit';
import { name as auth, reducer as authReducer } from '@app/features/auth';

export const reducer = combineReducers({
  [auth]: authReducer,
});

export type State = ReturnType<typeof reducer>;
