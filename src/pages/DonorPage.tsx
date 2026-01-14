import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

import Layout from "../components/Layout";

const DonationPage: React.FC = () => {
  return (
    <Layout showBackground={true}>
      <Container maxWidth="lg" sx={{ mt: 6 }}>
        {/* Main Content Paper */}
        <Paper
          elevation={3}
          sx={{
            py: { xs: 3, md: 6 },
            borderRadius: "16px 16px 16px 16px",
            border: "2px solid #5C5245",
            bgcolor: "rgba(255,255,255,0.95)",
          }}
        >
          {/* Quote Section */}

          <Box sx={{ px: { xs: 6, md: 12 } }}>
            <Typography
              sx={{
                color: "#5C5245",
                fontWeight: "bold",
                lineHeight: 1.8,
                fontStyle: "italic",
                textAlign: "center",
              }}
            >
              捐贈單位名單
            </Typography>
          </Box>

          {/* Corporate Donation Partners Section */}
          <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography
              variant="body1"
              sx={{ lineHeight: 2, color: "#000000" }}
            >
              更新中...
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default DonationPage;
