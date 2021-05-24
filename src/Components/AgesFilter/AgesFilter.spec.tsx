import {render} from "@testing-library/react";
import AgesFilter from "./AgesFilter";
import {mockedStore} from "App.test";
import {Provider} from "react-redux";

test("Renders All ages filter", () => {
  const {container} = render(
    <Provider store={mockedStore}>
      <AgesFilter />
    </Provider>
  );

  expect(container.firstChild?.textContent).toMatch("All");
});

test("Renders Imperial age filter", () => {
  const {container} = render(
    <Provider store={mockedStore}>
      <AgesFilter />
    </Provider>
  );

  expect(container.firstChild?.textContent).toMatch("Imperial");
});
