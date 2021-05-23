import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AgeFilterTypes} from "Config";
import {CostsFilterTypes} from "Config";
import {RootState} from "Stores";
import {FilterState} from "./types";

export const initialState: FilterState = {
  ageFilter: "All",
  costs: {
    wood: null,
    food: null,
    gold: null,
  },
};

const filterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAgeFilter: (
      state: FilterState,
      action: PayloadAction<AgeFilterTypes>
    ) => {
      state.ageFilter = action.payload;
    },
    setCostsFilter: (
      state: FilterState,
      action: PayloadAction<{
        costFilterType: CostsFilterTypes;
        costCount: number | null;
      }>
    ) => {
      const {costFilterType, costCount} = action.payload;
      state.costs[costFilterType] = costCount;
    },
  },
});

export const storeSelectedAge = (state: RootState) => state.filter.ageFilter;
export const storeSelectedCosts = (state: RootState) => state.filter.costs;

export const {setAgeFilter, setCostsFilter} = filterSlice.actions;

export default filterSlice.reducer;
