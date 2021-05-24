import {render} from "@testing-library/react";
import { mockedStore } from "App.test";
import { Provider } from "react-redux";
import Units from "./Units";

test("Renders unit page filter title", () => {
  const {container} = render(
    <Provider store={mockedStore}>
      <Units />
    </Provider>
  );

  expect(container.firstChild?.textContent).toMatch("Ages");
});
