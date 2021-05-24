import {render} from "@testing-library/react";
import Header from "./Header";

test("Renders header links", () => {
  const {container} = render(<Header />);

  expect(container.firstChild?.textContent).toMatch("Home");
});
