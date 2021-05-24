import {render} from "@testing-library/react";
import Home from "./Home";

test("Renders image on home page", () => {
  const {container} = render(<Home />);
  const backgroundImage = container.querySelector("img") as HTMLImageElement;

  expect(backgroundImage.src).toContain("aoe-bg");
});
