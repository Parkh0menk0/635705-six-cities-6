import {createReducer} from "@reduxjs/toolkit";
import {requireAuthorization, setUser} from "src/store/action";
import {EMPTY_USER} from "src/const";
import {AuthorizationStatus} from "src/api";

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: EMPTY_USER
};

const user = createReducer(initialState, (builder) => {
  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });
  builder.addCase(setUser, (state, action) => {
    state.user = action.payload;
  });
});
export {user};
