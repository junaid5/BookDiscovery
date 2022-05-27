import { render, screen } from "@testing-library/react";
import TopicsCard from "./TopicsCard";
 
test("renders TopicsCard", () => {
  render(
    <TopicsCard
    card={{
        "img": "http://127.0.0.1:8887/Top6.png",
      "content": "SCIENCE"
      }}
    /> 
  );
  const TopicsCardElement = screen.getByTestId("TopicsCard-element");
  expect(TopicsCardElement).toBeInTheDocument();
});
