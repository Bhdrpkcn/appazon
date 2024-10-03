import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./shared/utils/theme";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import SignInPage from "./pages/SignInPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
