import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  IconButton,
  Stack,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

import videoThumbnail from "../assets/video-thumbnail.jpg";
import residentIcon from "../assets/resident-icon.png";
import volunteerIcon from "../assets/volunteer-icon.png";
import enterpriseIcon from "../assets/enterprise-icon.png";
import Layout from "../components/Layout";

// The Beige Statistics Banner
const StatsBanner: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          bgcolor: "#dcd8cc",
          py: 4,
          borderBottom: "1px solid #c8c4b8",
          borderRadius: 4,
          border: "2px solid #5C5245",
        }}
      >
        <Container maxWidth="md">
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <StatItem label="捐贈夥伴" value="228" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <StatItem label="義工人數" value="87" />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <StatItem label="義工時數" value="3789" unit="hr" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
};

const StatItem: React.FC<{ label: string; value: string; unit?: string }> = ({
  label,
  value,
  unit,
}) => (
  <Box sx={{ textAlign: "center" }}>
    <Typography
      variant="body1"
      sx={{ fontWeight: "bold", color: "#5e4b3e", mb: 0.5 }}
    >
      {label}
    </Typography>
    <Typography variant="h3" sx={{ fontWeight: "bold", color: "black" }}>
      {value}
      {unit && (
        <span style={{ fontSize: "1.5rem", marginLeft: "4px" }}>{unit}</span>
      )}
    </Typography>
  </Box>
);

// The Main Content Card (White Box)
const MainContent: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ mt: 2 }}>
      <Paper
        elevation={3}
        sx={{
          p: { xs: 3, md: 6 },
          borderRadius: 4,
          border: "2px solid #5C5245",
          bgcolor: "rgba(255,255,255,0.8)",
        }}
      >
        {/* Section Title */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              display: "inline-block",
              color: "#5e4b3e",
              fontWeight: "bold",
              pb: 1,
            }}
          >
            啟航1331 — 關愛大埔 三大核心價值
            <Box
              sx={{
                borderBottom: "1px solid #5e4b3e",
                width: "100%",
                mt: -0.5,
              }}
            />
          </Typography>
        </Box>

        {/* Text Columns */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "#000", justifyContent: "center" }}
              >
                彼此守望{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: "light", fontSize: "24px" }}
                >
                  |
                </Box>{" "}
                同行的力量
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#000", lineHeight: 1.8 }}
              >
                在風雨之中，我們選擇不孤單。每一份問候、每一次伸出援手，都是讓彼此走過難關的力量。
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#000" }}>
                溫柔支援{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: "light", fontSize: "24px" }}
                >
                  |
                </Box>{" "}
                最貼近的陪伴
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#000", lineHeight: 1.8 }}
              >
                無論是生活上的需要，還是情緒的起伏，我們都願意用最實在的關心去回應，讓每位居民都能感受到被理解、被照顧。
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom sx={{ color: "#000" }}>
                重建連結{" "}
                <Box
                  component="span"
                  sx={{ fontWeight: "light", fontSize: "24px" }}
                >
                  |
                </Box>{" "}
                讓希望再次亮起
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#000", lineHeight: 1.8 }}
              >
                當生活被打亂，心也會跟著慌亂。而這個平台，正是讓人重新找到方向的起點——在守望與關懷中，一起修補傷口，重新啟航。
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Section: Video and Buttons */}
        <Grid container spacing={3}>
          {/* Left: Video Player */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                height: "100%",
                minHeight: "300px",
                bgcolor: "#ddd",
                backgroundImage: `url(${videoThumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IconButton
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  transform: "scale(10)",
                }}
              >
                <PlayArrowIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Right: 3 Action Buttons */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack direction="row" spacing={2} sx={{ height: "300px" }}>
              <ActionButton
                label="居民"
                color="#5e4b3e"
                icon={
                  <img
                    src={residentIcon}
                    alt="Resident Icon"
                    width={"85"}
                    height={"85"}
                  />
                }
                onClick={() => navigate("/resident")}
              />
              <ActionButton
                label="義工"
                color="#f49e4b"
                icon={
                  <img
                    src={volunteerIcon}
                    alt="Volunteer Icon"
                    width={85}
                    height={85}
                  />
                }
                onClick={() => navigate("/volunteer")}
              />
              <ActionButton
                label="企業"
                color="#2eab5e"
                icon={
                  <img
                    src={enterpriseIcon}
                    alt="Enterprise Icon"
                    width={85}
                    height={85}
                  />
                }
                onClick={() => navigate("/enterprise")}
              />
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

// Helper for the colored action buttons
interface ActionButtonProps {
  label: string;
  color: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  label,
  color,
  icon,
  onClick,
}) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        flex: 1,
        bgcolor: color,
        color: "white",
        borderRadius: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        "&:hover": {
          filter: "brightness(1.1)",
          transform: "scale(1.02)",
        },
      }}
    >
      <Box sx={{ mt: 2 }}>{icon}</Box>
      <Typography variant="h4" fontWeight="bold" mt={12}>
        {label}
      </Typography>
    </Box>
  );
};

// --- HomePage Component ---
const HomePage: React.FC = () => {
  return (
    <Layout showBackground={true}>
      <StatsBanner />
      <MainContent />
    </Layout>
  );
};

export default HomePage;
