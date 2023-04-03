import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "cart",
  initialState: {
    showCart: false,
    showWish: false,
    showUser: false,
    showEdit: false,
    product: {},
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

    onOpenUser: (state) => {
      state.showUser = true;
    },
    onCloseUser: (state) => {
      state.showUser = false;
    },

    onOpenEdit: (state, { payload }) => {
      state.showEdit = true;
      state.product = payload;
    },
    onCloseEdit: (state) => {
      state.showEdit = false;
    },
  },
});

export const {
  onCloseWish,
  onOpenWish,
  onCloseCart,
  onOpenCart,
  onOpenUser,
  onCloseUser,
  onOpenEdit,
  onCloseEdit,
} = modalSlice.actions;
