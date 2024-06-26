import { configureStore } from "@reduxjs/toolkit";
import regStepReducer from "./slices/oracleRegistration/registrationSlice";
import modalReducer from "./slices/modal/modalSlice";
import authReducer from "./slices/auth/authSlice"

export const store = configureStore({
  reducer: {
    regStep: regStepReducer,
    modal: modalReducer,
    auth: authReducer
  },

  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([transferApiSlice.middleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatchType = typeof store.dispatch;
