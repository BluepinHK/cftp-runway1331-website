import React from "react";
import { Box, Button, Stack, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";

import logo from "../assets/logo.png";
import topBanner from "../assets/top-banner.png";
import buildingBackground from "../assets/building-background.jpg";
import Footer from "./Footer";
import navBarLeftBackground from "../assets/navbar-left-background.png";
import navBarRightBackground from "../assets/navbar-right-background.png";

// The Navigation Bar (Brown Strip)
const NavBar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "primary.main",
        color: "white",
        py: 1,
        position: "relative",
        height: "50px",
      }}
    >
      <Box
        sx={{
          height: "50px",
          width: "332px",
          backgroundImage: `url(${navBarLeftBackground})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          position: "absolute",
          top: 0,
          left: { xs: -100, sm: -75, md: 0 },
          zIndex: 1,
        }}
      />
      <Stack
        direction="row"
        spacing={{ xs: 2, md: 8 }}
        justifyContent="center"
        divider={
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              bgcolor: "rgba(255,255,255)",
              height: "30px",
              alignSelf: "center",
            }}
          />
        }
      >
        {[
          { label: "主頁", path: "/" },
          { label: "關於我們", path: "/about" },
          //   { label: "最新通告", path: "/news" },
          { label: "捐贈單位名單", path: "/donors" },
        ].map((item) => (
          <Button
            key={item.label}
            onClick={() => navigate(item.path)}
            sx={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              minWidth: "auto",
              padding: "0 8px",
              "&:hover": { opacity: 0.8 },
            }}
          >
            {item.label}
          </Button>
        ))}
      </Stack>
      <Box
        sx={{
          height: "50px",
          width: "332px",
          backgroundImage: `url(${navBarRightBackground})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          position: "absolute",
          top: 0,
          right: { xs: -100, sm: -75, md: 0 },
          zIndex: 1,
        }}
      />
    </Box>
  );
};

// The Top Header with Logo and Background
const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: "center",
        width: "100%",
        pt: 6,
        backgroundColor: "#EFE8D6",
        backgroundImage: `url(${topBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 2,
      }}
    >
      {/* Language Selector (Top Right) */}
      <Button
        variant="contained"
        size="small"
        startIcon={<LanguageIcon />}
        sx={{
          position: "absolute",
          top: 20,
          right: { xs: 20, md: 50 },
          bgcolor: "rgba(94, 75, 62, 0.9)",
          color: "white",
          borderRadius: 1,
          textTransform: "none",
        }}
      >
        繁
      </Button>

      {/* Logo Area */}
      <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundImage: `url(${logo})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        />
      </Box>

      <Typography
        variant="h4"
        component="h1"
        sx={{ color: "#000", fontWeight: "bold", mb: 3 }}
      >
        啟航1331全力支持政府救援
      </Typography>

      <NavBar />
    </Box>
  );
};

// Layout Component Props
interface LayoutProps {
  children: React.ReactNode;
  showBackground?: boolean;
}

// Main Layout Component
const Layout: React.FC<LayoutProps> = ({ children, showBackground = true }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#FFF",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      {showBackground ? (
        <Box sx={{ position: "relative", flex: 1 }}>
          {/* Background Image - Half Height */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: { xs: "100%", sm: "100%", md: "50vh", lg: "40vh" },
              backgroundImage: `url(${buildingBackground})`,
              backgroundSize: "cover",
              backgroundBlendMode: "lighten",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />
          {/* Content on top of background */}
          <Box sx={{ position: "relative", zIndex: 1, mt: -2, pb: 4 }}>
            {children}
          </Box>
        </Box>
      ) : (
        <Box sx={{ flex: 1, pb: 4 }}>{children}</Box>
      )}
      <Footer />
    </Box>
  );
};

export default Layout;
