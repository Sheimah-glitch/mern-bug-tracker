import { render, screen } from "@testing-library/react";
import BugForm from "../components/BugForm";

test("renders input", () => {
  render(<BugForm />);
  expect(screen.getByPlaceholderText(/Bug title/i)).toBeInTheDocument();
});
