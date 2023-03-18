import { createSlice } from "@reduxjs/toolkit";
import { Password } from "phosphor-react";

const userDatabase = [
  {
    email: "nicolasaguirrebruno01@gmail.com",
    password: "123456",
  },
];
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-authenticated",
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    onChecking: (state) => {
      state.status = "checking";
      state.user = {};
      state.errorMessage = undefined;
    },
    onLogin: (state, { payload }) => {
      state.status = userDatabase.map((user) => {
        if (user.email == payload.email && user.password == payload.password)
          return "authenticated";
        else {
          state.errorMessage = "No encontramos una cuenta con esa direccion";
          return "not-authenticated";
        }
      });
      state.user = userDatabase.map((user) => {
        if (user.email == payload.email && user.password == payload.password)
          return payload;
        else {
          state.errorMessage = "No encontramos una cuenta con esa direccion";
        }
      });
    },
  },
});

export const { onLogin } = authSlice.actions;
