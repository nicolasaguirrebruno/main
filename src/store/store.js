import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { favoritesSlice } from "./favorites/favoritesSlice";
import { modalSlice } from "./modals/modalSlice";
import { wishesSlice } from "./wishes/wishesSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modal: modalSlice.reducer,
    favorites: favoritesSlice.reducer,
    wishes: wishesSlice.reducer,
  },
});
