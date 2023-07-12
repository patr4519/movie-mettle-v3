import { createSlice } from "@reduxjs/toolkit";
import { sortByTitle } from "../functions/sortByTitle";
import { sortByDuration } from "../functions/sortByDuration";
import { sortByDate } from "../functions/sortByDate";
import { sortByOrder } from "../functions/sortByOrder";
import { RootState } from "../app/store";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: any[] = [];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    addFavorite: (state, action) => {
      state[0].favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state[0].favorites = action.payload;
    },
    sortBy: (state, action: PayloadAction<string>) => {
      if (action.payload === "order") {
        state[0].favorites.sort(sortByOrder);
      }
      if (action.payload === "title") {
        state[0].favorites.sort(sortByTitle);
      }
      if (action.payload === "duration") {
        state[0].favorites.sort(sortByDuration);
      }
      if (action.payload === "date") {
        state[0].favorites.sort(sortByDate);
      }
    },
    clearUser: () => {
      return initialState;
    },
  },
});

export const selectUser = (state: RootState) => state.user[0];

export const { addUser, clearUser, addFavorite, removeFavorite, sortBy } =
  userSlice.actions;

export default userSlice.reducer;
