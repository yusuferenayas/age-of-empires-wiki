import {UnitModel} from "Models";
import {useSelector} from "react-redux";
import {storeUnits} from "Stores/App";
import {storeSelectedAge} from "Stores/Filter";

const useUnitsFilters = (): UnitModel[] => {
  const units = useSelector(storeUnits);
  const selectedAge = useSelector(storeSelectedAge);
  const isUnitsExist = !!units && units.length > 0;

  return isUnitsExist
    ? units?.filter((unit) => {
        if (selectedAge !== "All") {
          if (selectedAge === unit.age) {
            return unit;
          } else {
            return null;
          }
        } else {
          return units;
        }
      }) || []
    : [];
};

export default useUnitsFilters;
