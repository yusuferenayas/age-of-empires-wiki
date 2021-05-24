import {render} from "@testing-library/react";
import CostsFilter from "./CostsFilter";
import {mockedStore} from "App.test";
import {Provider} from "react-redux";

test("Renders first filter on costs filter", () => {
  const {container} = render(
    <Provider store={mockedStore}>
      <CostsFilter label="wood" />
    </Provider>
  );

  expect(container.firstChild?.textContent).toMatch("Wood");
});
