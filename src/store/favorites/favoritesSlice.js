import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: { favorites: [] },
  reducers: {
    onAddFavorite: (state, { payload }) => {
      state.favorites.push(payload);
    },
    onRemoveFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== payload.id
      );
    },
  },
});

export const { onAddFavorite, onRemoveFavorite } = favoritesSlice.actions;
