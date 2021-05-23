import {AgeFilterTypes} from "Config";

export interface FilterState {
  ageFilter: AgeFilterTypes;
  costs: {
    wood: number | null;
    food: number | null;
    gold: number | null;
  };
}
