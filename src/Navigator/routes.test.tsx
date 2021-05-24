import {render} from "@testing-library/react";
import {mockedStore} from "App.test";
import {Provider} from "react-redux";
import Navigator from "./";

test("Renders navigator successfuly", () => {
  const {container} = render(
    <Provider store={mockedStore}>
      <Navigator />
    </Provider>
  );

    expect(container?.textContent).toMatch("Home");
});
