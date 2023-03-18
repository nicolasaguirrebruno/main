import { createSlice } from "@reduxjs/toolkit";

export const wishesSlice = createSlice({
  name: "wishes",
  initialState: { wishes: [] },
  reducers: {
    onAddWish: (state, { payload }) => {
      state.wishes.push(payload);
    },
    onRemoveWish: (state, { payload }) => {
      state.wishes = state.wishes.filter((wish) => wish.id !== payload.id);
    },
  },
});

export const { onAddWish, onRemoveWish } = wishesSlice.actions;
