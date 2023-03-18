import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    showWish: false,
  },
  reducers: {
    onOpenCart: (state) => {
      state.showCart = true;
    },
    onCloseCart: (state) => {
      state.showCart = false;
    },

    onOpenWish: (state) => {
      state.showWish = true;
    },
    onCloseWish: (state) => {
      state.showWish = false;
    },
  },
});

export const { onCloseWish, onOpenWish, onCloseCart, onOpenCart } =
  modalSlice.actions;
