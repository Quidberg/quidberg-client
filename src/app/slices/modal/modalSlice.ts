import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { InitialModalStateType } from "./types";
import { RootStateType } from "../../store";

const initialModalState: InitialModalStateType = {
  castNetModal: false,
  filterModal: false,
  infoModal: false,
  warningModal: false,
  welcomeModal: false,
};
export const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showModal: (state, action: PayloadAction<string>) => {
      state[action.payload as keyof InitialModalStateType] = true;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      state[action.payload as keyof InitialModalStateType] = false;
    },
    clearModal: (state) => {
      state = initialModalState;
    },
  },
});

export const { showModal, closeModal, clearModal } = modalSlice.actions;

export const selectModal = (modalKey: string) => (state: RootStateType) =>
  state.modal[modalKey as keyof InitialModalStateType];

export default modalSlice.reducer;
