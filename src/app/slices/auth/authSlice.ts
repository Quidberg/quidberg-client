import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootStateType } from "../../store";
import { AuthRegType, InitialAuthStateType } from "./types";

const initialAuthState: InitialAuthStateType = {
    authRegType: null, //signin or signup
    isForgotPassword: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setAuthRegType: (state, action: PayloadAction<AuthRegType>)=>{
        state.authRegType = action.payload
    },
    setIsForgotPswd: (state, action: PayloadAction<boolean>)=>{
        state.isForgotPassword = action.payload
    },
  },
});

export const { setAuthRegType, setIsForgotPswd} = authSlice.actions;

export const selectAuthRegType = (state: RootStateType) => state.auth.authRegType
export const selectIsForgotPswd   = (state: RootStateType) => state.auth.isForgotPassword


export default authSlice.reducer;
