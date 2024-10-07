import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { DisplayUser } from "../models/DisplayUser";
import { NewUser } from "../models/NewUser";
import { LoginUser } from "../models/LoginUser";
import { Jwt } from "../models/Jwt";
import { DecodedJwt } from "../models/DecodedJwt";

const register = async (newUser: NewUser): Promise<DisplayUser | null> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/register`,
    newUser
  );
  return response.data;
};

const login = async (
  user: LoginUser
): Promise<{ jwt: Jwt; user: DisplayUser | null }> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/login`,
    user
  );

  if (response.data) {
    localStorage.setItem("jwt", JSON.stringify(response.data));

    const decodedJwt: DecodedJwt = jwtDecode(response.data.token);
    localStorage.setItem("user", JSON.stringify(decodedJwt.user));

    return { jwt: response.data, user: decodedJwt.user };
  }

  return { jwt: response.data, user: null };
};

const logout = (): void => {
  localStorage.removeItem("user");
  localStorage.removeItem("jwt");
};

const verifyJwt = async (jwt: string): Promise<boolean> => {
  const response = await axios.post(
    `${process.env.REACT_APP_BASE_API}/auth/verify-jwt`,
    { jwt }
  );

  if (response.data) {
    //transforming exp time to miliseconds and comparing with the current time
    const jwtExpirationMs = response.data.exp * 1000;
    return jwtExpirationMs > Date.now();
  }

  return response.data;
};

const authService = {
  register,
  login,
  logout,
  verifyJwt,
};

export default authService;
