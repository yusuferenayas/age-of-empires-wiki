import {capitalize} from "@material-ui/core";
import {AgeFilterTypes, CostsFilterTypes} from "Config";
import {UnitModel} from "Models";

export const filterUnitsByCosts = (
  units: UnitModel[],
  costType: CostsFilterTypes,
  count: number
) => {
  const costTypeNormalized = capitalize(costType) as "Wood" | "Gold" | "Food";

  return units.filter((unit) => {
    const isCostTypeExist = unit.cost?.[costTypeNormalized];

    if (isCostTypeExist) {
      return count <= isCostTypeExist;
    } else {
      return null;
    }
  });
};

export const filterUnitsByAges = (
  units: UnitModel[],
  ageType: AgeFilterTypes
) => {
  return (
    units?.filter((unit) => {
      if (ageType !== "All") {
        if (ageType === unit.age) {
          return unit;
        } else {
          return null;
        }
      } else {
        return unit;
      }
    }) || []
  );
};
