import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reducer as authReducer } from "./auth/authslice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
