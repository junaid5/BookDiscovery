import { render, screen } from "@testing-library/react";
import Buttons from "./Button";

test("renders Button", () => {
  render(
    <Buttons
      content="Explore"
      width="100px"
      endIcon={true}
      height="30px"
      color="white"
      backgroundColor="#8C52C6"
      type="text"
    />
  );
  const ButtonElement = screen.getByTestId("Button-element");
  expect(ButtonElement).toBeInTheDocument();
});
