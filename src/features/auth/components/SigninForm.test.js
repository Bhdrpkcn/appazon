import { reducer, screen } from "../../../shared/utils/test-utils";
import SigninForm from "./SigninForm";

describe("Sign-in Form", () => {
  let signInButton;

  beforeEach(() => {
    reducer(<SigninForm />);
    signInButton = screen.getByRole("button", { name: /sign-in/i });
  });

  test("The login button should be in the document", () => {
    expect(signInButton).toBeInTheDocument();
  });

  test("The login button should initially be disabled", () => {
    expect(signInButton).toBeDisabled();
  });
});
