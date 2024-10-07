import { validateNameLength, validatePasswordLength } from "./length";

describe("Name Length Validation", () => {
  test("should fail if name is shorter than 2 characters", () => {
    expect(validateNameLength("A")).toBe(false);
  });

  test("should pass if name is exactly 2 characters", () => {
    expect(validateNameLength("AB")).toBe(true);
  });

  test("should pass if name is longer than 2 characters", () => {
    expect(validateNameLength("Alice")).toBe(true);
  });

  test("should fail for empty name input", () => {
    expect(validateNameLength("")).toBe(false);
  });

  test("should trim whitespace and validate correctly", () => {
    expect(validateNameLength("  Bob  ")).toBe(true);
  });
});

describe("Password Length Validation", () => {
  test("should fail if password is shorter than 6 characters", () => {
    expect(validatePasswordLength("12345")).toBe(false);
  });

  test("should pass if password is exactly 6 characters", () => {
    expect(validatePasswordLength("123456")).toBe(true);
  });

  test("should pass if password is between 6 and 20 characters", () => {
    expect(validatePasswordLength("securepassword")).toBe(true);
  });

  test("should pass if password is exactly 20 characters", () => {
    expect(validatePasswordLength("12345678901234567890")).toBe(true);
  });

  test("should fail if password is longer than 20 characters", () => {
    expect(validatePasswordLength("123456789012345678901")).toBe(false);
  });

  test("should trim whitespace and validate correctly", () => {
    expect(validatePasswordLength("  securePass  ")).toBe(true);
  });
});
