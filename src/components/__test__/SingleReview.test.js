import { render, act, screen } from "@testing-library/react";
import SingleReview from "../SingleReview";
import { BrowserRouter as Router } from "react-router-dom";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("Render the author of the review", () => {
  const component = render(
    <Router>
      <SingleReview
        review={{
          id: "5d707203ac281ba7cb5ded76",
          author: "Kelley Suarez",
          place: "Ice Scream",
          published_at:
            "Thu Jul 24 1986 04:16:06 GMT-0500 (Central Daylight Time)",
          rating: 2,
          content:
            "Ullamco ad consequat minim culpa quis sit id nulla. Ad sint do ea deserunt aliqua elit pariatur non quis aute Lorem dolore tempor. Eiusmod aliqua ut elit eiusmod tempor amet consequat nostrud incididunt. Ad ullamco aliquip dolor et ipsum in deserunt enim quis nisi et. Labore nulla ad culpa esse magna.\r\n",
        }}
      />
    </Router>,
    container
  );
  const author = component.getByTestId("author");

  expect(author.textContent).toBe("Kelley Suarez");
});

test("Displays the details button on all reviews page", () => {
  const component = render(
    <Router>
      <SingleReview
        button={true}
        review={{
          id: "5d707203ac281ba7cb5ded76",
          author: "Kelley Suarez",
          place: "Ice Scream",
          published_at:
            "Thu Jul 24 1986 04:16:06 GMT-0500 (Central Daylight Time)",
          rating: 2,
          content:
            "Ullamco ad consequat minim culpa quis sit id nulla. Ad sint do ea deserunt aliqua elit pariatur non quis aute Lorem dolore tempor. Eiusmod aliqua ut elit eiusmod tempor amet consequat nostrud incididunt. Ad ullamco aliquip dolor et ipsum in deserunt enim quis nisi et. Labore nulla ad culpa esse magna.\r\n",
        }}
      />
    </Router>,
    container
  );
  const detailsBtn = component.getByTestId("button");
  expect(detailsBtn.textContent).toBe("Details");
});
