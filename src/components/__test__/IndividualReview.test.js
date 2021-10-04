import { render, screen, fireEvent, act } from "@testing-library/react";
import IndividualReview from "../IndividualReview";
import { BrowserRouter as Router } from "react-router-dom";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";

Enzyme.configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("Shows the correct single review that was click on the all review page", () => {
  render(
    <Router>
      <IndividualReview
        match={{ params: { reviewId: "5d707203ac281ba7cb5ded76" } }}
      />
    </Router>,
    container
  );

  const place = screen.getByText(/Ice Scream/i);
  expect(place).toBeInTheDocument();
});

test("Response is initally set to empty", () => {
  const component = render(
    <Router>
      <IndividualReview
        match={{ params: { reviewId: "5d707203ac281ba7cb5ded76" } }}
      />
    </Router>,
    container
  );

  const message = component.getByTestId("message");
  const name = component.getByTestId("name");
  expect(message.textContent).toBe("");
  expect(name.textContent).toBe("");
});

test("Response changes according to user input", () => {
  const component = render(
    <Router>
      <IndividualReview
        match={{ params: { reviewId: "5d707203ac281ba7cb5ded76" } }}
      />
    </Router>,
    container
  );

  const message = component.getByTestId("message");

  fireEvent.change(message, {
    target: {
      value: "This food place is amazing!!!",
    },
  });

  expect(message.value).toBe("This food place is amazing!!!");
});

test("Submits the form when 'Add a Response' button is clicked", () => {
  let wrapper = render(
    <Router>
      <IndividualReview
        match={{ params: { reviewId: "5d707203ac281ba7cb5ded76" } }}
      />
    </Router>,
    container
  );

  const message = wrapper.getByTestId("message");

  fireEvent.change(message, {
    target: {
      value: "I am not a fan of the food here :( ",
    },
  });

  const addResponse = wrapper.getByTestId("addResponseBtn");
  addResponse.click();

  expect(message.value).toBe("I am not a fan of the food here :( ");
});
