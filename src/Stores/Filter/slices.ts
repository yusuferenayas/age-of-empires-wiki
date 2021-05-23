import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AgeFilterTypes} from "Config";
import {FilterState} from "./types";

export const initialState: FilterState = {
  ageFilter: "All",
  costs: {
    wood: null,
    food: null,
    gold: null,
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAgeFilter: (
      state: FilterState,
      action: PayloadAction<AgeFilterTypes>
    ) => {
      state.ageFilter = action.payload;
    },
  },
});

// export const storeUnits = (state: RootState) => state.app.units;

export const {setAgeFilter} = appSlice.actions;

export default appSlice.reducer;
