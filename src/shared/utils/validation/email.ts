import { ValidatorFunc } from "./models/ValidatorFunc";

//using regular expression - rfc2822 email regex :
export const validateEmail: ValidatorFunc = (email: string): boolean => {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return re.test(email.trim());
};
