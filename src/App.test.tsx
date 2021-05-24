import {render} from "@testing-library/react";
import configureStore from "redux-mock-store";
import {mockedInitialState} from "Config/TestConfig";
import App from "./App";

const storeMocker = configureStore();
export const mockedStore = storeMocker(mockedInitialState);

test("Renders App and loading component", () => {
  const {container} = render(<App />);

  expect(
    container.getElementsByClassName("MuiCircularProgress-root").length
  ).toBe(1);
});
