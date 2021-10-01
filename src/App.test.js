import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("Renders the header: Sam's Review App", () => {
  const linkElement = screen.getByText(/Sam's Review App/i);
  expect(linkElement).toBeInTheDocument();
});

test("Click on 'details' button redirects to single review page", () => {
  const detailsButton = screen.getAllByText(/Details/i)[0];
  detailsButton.click();
  const addResponse = screen.getByText(/Add a Response/i);

  expect(addResponse).toBeInTheDocument();
});
