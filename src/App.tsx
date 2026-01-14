import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";
import ResidentPage from "./pages/ResidentPage";
import AboutPage from "./pages/AboutPage";
import VolunteerPage from "./pages/VolunteerPage";
import EnterprisePage from "./pages/EnterprisePage";
import DonorPage from "./pages/DonorPage";

// --- Theme Configuration ---
const theme = createTheme({
  palette: {
    primary: {
      main: "#5e4b3e", // The dark brown color
    },
    secondary: {
      main: "#f49e4b", // The orange color
    },
    success: {
      main: "#2eab5e", // The green color
    },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: "#333333",
    },
  },
  typography: {
    fontFamily: '"Noto Sans HK", "Roboto", "Helvetica", "Arial", sans-serif',
    h3: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 600 },
    subtitle1: { fontWeight: 600 },
  },
});

// --- Main App Component ---
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resident" element={<ResidentPage />} />
          {/* Add more routes as needed */}
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/donors" element={<DonorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
