import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer  from "./slices/auth";
import chatReducer  from "./slices/chat";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
