import { validateEmail } from "./email";

describe("Email validation", () => {
  let email = "";

  beforeEach(() => {
    email = ""; 
  });

  test("should not be an empty input", () => {
    expect(validateEmail(email)).toBe(false);
  });

  test("should fail if missing '@' symbol", () => {
    email = "testemail.com";
    expect(validateEmail(email)).toBe(false);
  });

  test("should fail if missing '.' symbol after '@'", () => {
    email = "test@emailcom";
    expect(validateEmail(email)).toBe(false);
  });

  test("should fail if missing domain part", () => {
    email = "test@";
    expect(validateEmail(email)).toBe(false);
  });

  test("should pass for valid email", () => {
    email = "test@example.com";
    expect(validateEmail(email)).toBe(true);
  });

  test("should fail for invalid characters", () => {
    email = "test@exa$mple.com";
    expect(validateEmail(email)).toBe(false);
  });

  test("should trim whitespaces and validate correctly", () => {
    email = "  test@example.com  ";
    expect(validateEmail(email)).toBe(true);
  });

  test("should handle complex valid email formats", () => {
    email = "user.name+tag+sorting@example.com";
    expect(validateEmail(email)).toBe(true);
  });
});
