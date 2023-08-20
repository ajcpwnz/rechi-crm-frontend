import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { reducer as authReducer } from "./auth/authslice";
import { reducer as submissionsReducer } from "./requests/sumissionsSlice.ts";
import { reducer as commentsReducer} from "./comments/commentsSlice.ts";

const rootReducer = combineReducers({
  auth: authReducer,
  submissions: submissionsReducer,
  comments: commentsReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>

