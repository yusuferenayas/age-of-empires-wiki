import {UnitModel} from "Models";

export interface AppState {
  isLoading: boolean;
  units: UnitModel[] | undefined;
}
