import {render} from "@testing-library/react";
import UnitsTable from "./UnitsTable";
import {mockedStore} from "App.test";
import {Provider} from "react-redux";
import {mockedUnits} from "Config/TestConfig";

test("Renders first unit on table", () => {
  const {container} = render(
    <Provider store={mockedStore}>
      <UnitsTable />
    </Provider>
  );

  expect(container.firstChild?.textContent).toMatch(mockedUnits[0].name);
});
