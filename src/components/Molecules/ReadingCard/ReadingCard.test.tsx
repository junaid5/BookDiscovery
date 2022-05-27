import { render, screen } from "@testing-library/react";
import ReadingCard from "./ReadingCard";

test("renders ReadingCard", () => {
  render(
    <ReadingCard
      card={{
        img: "http://127.0.0.1:8887/Re1.png",
        bookName: "Inorganic Chemistry",
        bookAuthor: "VK Ahulwalia",
        category: "Chemistry",
        pagesLeft: "20/250",
      }}
    />
  );
  const ReadingCardElement = screen.getByTestId("ReadingCard-element");
  expect(ReadingCardElement).toBeInTheDocument();
});
