import { render, act, screen } from "@testing-library/react";
import IndividualReview from "../IndividualReview";
import { BrowserRouter as Router } from "react-router-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("Shows the correct single review that was click on the all review page", () => {
  act(() => {
    render(
      <Router>
        <IndividualReview match ={{params:{reviewId : "5d707203ac281ba7cb5ded76"}}}/>
      </Router>, container)
  });
  const place = screen.getByText(/Ice Scream/i)
  expect(place).toBeInTheDocument();
});
