import { LengthOptions } from "./models/options/length";
import { ValidatorFunc } from "./models/ValidatorFunc";

const _validateLength: ValidatorFunc = (
  text: string,
  options?: LengthOptions
): boolean => {
  const textLength = text.trim().length;

  if (options?.min && textLength < options.min) return false;
  if (options?.max && textLength > options.max) return false;

  return true;
};

export const validateNameLength: ValidatorFunc = (text: string): boolean => {
  return _validateLength(text, { min: 2 });
};

export const validatePasswordLength: ValidatorFunc = (
  text: string
): boolean => {
  return _validateLength(text, { min: 6, max: 20 });
};
