import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { AppBar, Badge, Box, Button, Toolbar } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux/hooks";
import { logout, selectedUser } from "../../auth/authSlice";

const HeaderComponent = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(selectedUser);
  const { cart } = useAppSelector((state) => state.product);

  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

    setCartCount(() => totalQuantity);
  }, [cart]);

  const logoutHandler = () => {
    dispatch(logout());
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: "lightgray",
    cursor: "pointer",
    border: "1px solid black",
    borderRadius: "5px",
    margin: "5px",
    padding: "5px",
    textAlign: "center",
    width: "100px",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#131921", color: "white", padding: "4px" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img
            onClick={() => navigate("/")}
            src="/amazon_logo.webp"
            alt="amazon-logo"
            style={{
              width: "113px",
              height: "50px",
              paddingTop: "10px",
              cursor: "pointer",
            }}
          />
          <div style={{ display: "flex" }}>
            <div>
              <div>Hello, {user?.name}</div>
              <Button
                onClick={logoutHandler}
                sx={{ padding: 0, marginRight: "16px" }}
                color="inherit"
              >
                Sign out
              </Button>
            </div>
            <Button onClick={() => navigate("/cart")}>
              <Badge badgeContent={cartCount} color="primary">
                <ShoppingCartOutlined fontSize="large" />
              </Badge>
              <span>Cart</span>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default HeaderComponent;
