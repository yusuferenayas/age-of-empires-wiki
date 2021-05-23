import {UnitModel} from "Models";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {storeUnits} from "Stores/App";
import {storeSelectedAge, storeSelectedCosts} from "Stores/Filter";
import {filterUnitsByAges, filterUnitsByCosts} from "Utils/filterHelpers";

const useUnitsFilters = (): UnitModel[] => {
  const {wood, gold, food} = useSelector(storeSelectedCosts);
  const selectedAge = useSelector(storeSelectedAge);

  const allUnits = useSelector(storeUnits);
  const isUnitsExist = !!allUnits && allUnits.length > 0;
  const [unitsToShow, setUnitsToShow] = useState<UnitModel[]>(
    isUnitsExist ? (allUnits as UnitModel[]) : []
  );

  useEffect(() => {
    if (isUnitsExist) {
      let units = filterUnitsByAges(allUnits as UnitModel[], selectedAge);

      if (wood) {
        units = filterUnitsByCosts(units, "wood", wood);
      }
      if (gold) {
        units = filterUnitsByCosts(units, "gold", gold);
      }
      if (food) {
        units = filterUnitsByCosts(units, "food", food);
      }

      setUnitsToShow(units);
    }
    // eslint-disable-next-line
  }, [isUnitsExist, selectedAge, wood, gold, food]);

  return isUnitsExist ? unitsToShow : [];
};

export default useUnitsFilters;
