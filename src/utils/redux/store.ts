import { configureStore } from "@reduxjs/toolkit";
import albumsReducer from "./reducers/albums.reducer";
import usersReducer from "./reducers/users.reducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    albums: albumsReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
