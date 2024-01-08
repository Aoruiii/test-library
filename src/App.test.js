import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test("can receive a new user and show it on a list", async () => {
  //  render the app
  render(<App />);

  // simulate user input
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  await user.click(nameInput);
  await user.keyboard("jane");
  await user.click(emailInput);
  await user.keyboard("jane@jane.com");

  const button = screen.getByRole("button");

  await user.click(button);

  // find the table
  const name = screen.getByRole("cell", { name: "jane" });
  const email = screen.getByRole("cell", { name: "jane@jane.com" });
  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
