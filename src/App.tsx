import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/utils/theme";

import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";

import PrivateRoute from "./features/auth/components/PrivateRoute";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute page={<HomePage />} />} />
          <Route path="/cart" element={<PrivateRoute page={<CartPage />} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
