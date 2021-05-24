import {render} from "@testing-library/react";
import UnitDetails from "./UnitDetails";
import {mockedStore} from "App.test";
import {mockedUnits} from "Config/TestConfig";
import {Provider} from "react-redux";
import * as redux from "react-redux";

const routeComponentPropsMock = {
  history: {} as any,
  location: {} as any,
  match: {} as any,
};

test("Renders unit details", () => {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue(mockedUnits[0]);

  const {container} = render(
    <Provider store={mockedStore}>
      <UnitDetails {...routeComponentPropsMock} />
    </Provider>
  );

  expect(container.firstChild?.textContent).toMatch(mockedUnits[0].name);
});

test("Renders unit other details", () => {
  const spy = jest.spyOn(redux, "useSelector");
  spy.mockReturnValue(mockedUnits[0]);

  const {container} = render(
    <Provider store={mockedStore}>
      <UnitDetails {...routeComponentPropsMock} />
    </Provider>
  );

  expect(container.firstChild?.textContent).toMatch(
    mockedUnits[0].attack.toString()
  );
});

test("Renders unit details error, if there is not any unit", () => {
  const {container} = render(
    <Provider store={mockedStore}>
      <UnitDetails {...routeComponentPropsMock} />
    </Provider>
  );

  expect(container.firstChild?.textContent).toMatch("Please choose");
});
