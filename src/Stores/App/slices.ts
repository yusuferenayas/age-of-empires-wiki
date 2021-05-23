import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {UnitModel} from "Models";
import {RootState} from "Stores";
import {AppState} from "./types";

export const initialState: AppState = {
  isLoading: true,
  units: undefined,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    onAppInit: (state: AppState) => state,
    onAppReady: (state: AppState) => {
      state.isLoading = false;
    },
    setUnits: (state: AppState, action: PayloadAction<UnitModel[]>) => {
      state.units = action.payload;
    },
  },
});

export const appIsLoading = (state: RootState) => state.app.isLoading;
export const storeUnits = (state: RootState) => state.app.units;
export const storeSelectedUnits = (state: RootState, id: number) =>
  state.app.units?.find((unit) => unit.id === id);

export const {onAppInit, onAppReady, setUnits} = appSlice.actions;

export default appSlice.reducer;
