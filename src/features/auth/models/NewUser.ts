import { RegisterFormFieldInterface } from "./RegisterFormFieldInterface";

export type NewUser = Omit<RegisterFormFieldInterface, "confirmPassword">;
