import {mockedUnits} from "Config/TestConfig";
import {UnitModel} from "Models";
import {filterUnitsByCosts, filterUnitsByAges} from "./filterHelpers";

test("Cost filter should work properly with correct filters", () => {
  const filteredUnits = filterUnitsByCosts(
    mockedUnits as UnitModel[],
    "wood",
    25
  );

  expect(filteredUnits.length).toBe(2);
});

test("Cost filter should work correct wrong filters", () => {
  const filteredUnits = filterUnitsByCosts(
    mockedUnits as UnitModel[],
    "wood",
    30
  );

  expect(filteredUnits.length).toBe(0);
});

test("Cost filter should work correct wrong filters", () => {
  const filteredUnits = filterUnitsByAges(mockedUnits as UnitModel[], "All");

  expect(filteredUnits.length).toBe(2);
});

test("Cost filter should work correct wrong filters", () => {
  const filteredUnits = filterUnitsByAges(mockedUnits as UnitModel[], "Feudal");

  expect(filteredUnits.length).toBe(1);
});
