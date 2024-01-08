import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "A", email: "A@123.com" },
    { name: "B", email: "B@123.com" },
  ];
  const { container } = render(<UserList users={users} />);

  return { users, container };
}

test("shows one line per user", () => {
  // render the component
  const { container } = renderComponent();

  // find the element
  ////   screen.logTestingPlaygroundURL();
  ////  fallback1: const rows = within(screen.getByTestId("users")).getAllByRole("row");
  // fallback2
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");

  // assertion
  expect(rows).toHaveLength(2);
});

test("shows the name and email of each user", () => {
  // render the component
  const { users } = renderComponent();

  //   find the elements and do the assertion
  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
