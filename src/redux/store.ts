import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reducer as authReducer } from "./auth/authslice";
import { reducer as submissionsReducer } from "./requests/sumissionsSlice.ts";

const rootReducer = combineReducers({
  auth: authReducer,
  submissions: submissionsReducer
});

export const store = configureStore({
  reducer: rootReducer,
});
