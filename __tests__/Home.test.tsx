import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

it("should have Docs Text", () => {
  render(<Home />);
  const text = screen.getByText(/Docs/i);
  expect(text).toBeInTheDocument();
});

it("should have heading", () => {
  render(<Home />);
  const Ele = screen.getByRole("heading", { name: "Welcome" });
  expect(Ele).toBeInTheDocument();
});
