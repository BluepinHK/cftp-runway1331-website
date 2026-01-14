import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import facebookIcon from "../assets/facebook-icon.png";
import instagramIcon from "../assets/instagram-icon.png";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
            bgcolor: "#EFE8D6",
            py: 2,
            px: 3,
            borderRadius: "16px 16px 0 0",
            borderWidth: "2px 2px 0 2px",
            borderStyle: "solid",
            borderColor: "#5C5245",
            flex: 1,
          }}
        >
          {/* Left: About Us */}
          <Box sx={{ ml: { xs: 0, md: 10 } }}>
            <Link to="/about">
              <Typography
                variant="h6"
                sx={{
                  color: "#5e4b3e",
                  fontWeight: "bold",
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  borderBottom: "2px solid #5e4b3e",
                }}
              >
                關於我們
              </Typography>
            </Link>
          </Box>

          {/* Center: Contact Message */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              justifyContent: "center",
              mr: 4,
            }}
          >
            <EmailIcon sx={{ color: "#5e4b3e", fontSize: 28 }} />
            <Typography
              variant="body1"
              sx={{
                color: "#5e4b3e",
                fontSize: { xs: "0.9rem", md: "1rem" },
              }}
            >
              Please DM us on Facebook and Instagram
            </Typography>

            {/* Right: Social Media Icons */}
            <IconButton
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#5e4b3e",
                bgcolor: "transparent",
                p: 1,
                "&:hover": {
                  bgcolor: "rgba(94, 75, 62, 0.1)",
                },
              }}
            >
              <Box
                component="img"
                src={instagramIcon}
                alt="Instagram"
                sx={{ width: 28, height: 28 }}
              />
            </IconButton>
            <IconButton
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#5e4b3e",
                bgcolor: "transparent",
                p: 1,
                "&:hover": {
                  bgcolor: "rgba(94, 75, 62, 0.1)",
                },
              }}
            >
              <Box
                component="img"
                src={facebookIcon}
                alt="Facebook"
                sx={{ width: 28, height: 28 }}
              />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
