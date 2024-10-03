import { Grid2 } from "@mui/material";
import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid2
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <img src="appazon_logo.webp" alt="logo" height="40px" />
      <main>{children}</main>
    </Grid2>
  );
};

export default AuthLayout;
