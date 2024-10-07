import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { verifyJwt } from "../authSlice";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ page }: { page: JSX.Element }) => {
  const { jwt, isSuccess, isAuthenticaded } = useAppSelector(
    (state) => state.auth
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!jwt || !jwt?.token) return;

    dispatch(verifyJwt(jwt.token));
  }, [jwt, isSuccess]);

  return isAuthenticaded ? page : <Navigate replace to="/signin" />;
};

export default PrivateRoute;
