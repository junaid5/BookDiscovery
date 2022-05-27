import { render, screen } from "@testing-library/react";
import RecommendCard from "./RecommendCard";
 
test("renders RecommendCard", () => {
  render(
    <RecommendCard
    card={{
        img: "http://127.0.0.1:8887/Rec1.png",
        bookName: "Basic Physics",
          bookAuthor: "By  Karl F Kuhn",
          category: "Category: Chemistry",
          stars: "4.5",
          ratings: "1210 ratings"
      }}
    /> 
  );
  const RecommendCardElement = screen.getByTestId("RecommendCard-element");
  expect(RecommendCardElement).toBeInTheDocument();
});
