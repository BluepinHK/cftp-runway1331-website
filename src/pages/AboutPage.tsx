import React from "react";
import { Box, Container, Typography, Paper } from "@mui/material";

import aboutUsBanner from "../assets/about-us-banner.png";
import Layout from "../components/Layout";

// Main About Content
const AboutContent: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 4,
          border: "2px solid #5C5245",
          bgcolor: "rgba(255,255,255,0.95)",
        }}
      >
        {/* Page Title */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            sx={{
              color: "#5e4b3e",
              fontWeight: "bold",
              display: "inline-block",
              fontSize: "1.5rem",
              mt: 4,
            }}
          >
            關於我們
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "1px",
            backgroundColor: "#5C5245",
            mt: -2,
            mx: 10,
          }}
        />

        <Box
          sx={{
            width: "100%",
            height: "300px",
            backgroundImage: `url(${aboutUsBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            my: 4,
          }}
        />

        {/* Content Sections */}
        <Container maxWidth="md">
          <Box sx={{ "& p": { mb: 3, lineHeight: 2, fontSize: "1rem" } }}>
            <Typography variant="body1">
              在這段艱難的日子裡，我們深信，無論困境多大，只要彼此守望，總會一步一步走過現在的難關。
            </Typography>

            <Typography variant="body1">
              啟航1331—關愛大埔（Runway 1331 – Care for Tai
              Po）是一個因應今次大埔安福事故而成立的社區關懷計劃，希望在變化之中，為居民帶來一份穩定與支持。當意外打亂生活的節奏，難免不安在心裡浮現，我們最在意的，是讓每一位大埔居民感受到：你並不孤單，身旁始終有一群願意默默向行的人。這個計劃，是讓大家重新連結、彼此共持的一個溫柔起點。
            </Typography>

            <Typography variant="body1">
              在這裡，你可以隨時查閱啟航1331園區的最新資訊，了解園區目前所需物資（我們不接受捐款）、前線服務的安排，以及不同的情緒和生活支援渠道，讓具體的幫助盡量貼近每一位有需要的居民。我們亦會每天更新各捐贈單位、協作團體與義工的鳴謝，讓每一份心意都被珍而重之地記錄，每一份付出都得到真摯的感謝，每一個名字，都是照亮大埔的一點光。
            </Typography>

            <Typography variant="body1">
              若你正經歷生活上的變化與不安，誠邀你隨時來這裡走一走、看一看：這裡既有實用資訊，也盛載著來自社區的問候與關懷。如果你身邊有同樣受影響的家人、朋友或鄰居，也歡迎你把這個平台分享給他們，讓關心和支持輕柔地傳遞開去。你的情緒值得被細心聆聽，你的需要值得被好好對待，請為自己留一點空間，也讓別人的幫忙溫和地走進你的生活。
            </Typography>

            <Typography variant="body1">
              同時，我們真誠邀請每一位關心大埔的人，以適合自己的方式參與其中，一起守護這片社區：
            </Typography>

            {/* Bullet Points */}
            <Box sx={{ pl: 4, mb: 3 }}>
              <Typography variant="body1" component="li" sx={{ mb: 2 }}>
                可以按需要清單捐贈物資或資源，讓受影響的居民在過渡期間獲得更穩妥的支援。
              </Typography>
              <Typography variant="body1" component="li" sx={{ mb: 2 }}>
                可以轉發和分享平台資訊，提醒身邊的人留意大埔居民的情況，讓更多關懷和資源慢慢匯聚。
              </Typography>
            </Box>

            <Typography variant="body1">
              願這個平台成為承載希望與關懷的一道橋樑，讓大家在彼此守望之中，慢慢修補驚嚇和失落，重新找回生活的節奏。讓關愛在社區靜靜流動，為每位居民帶來一點安心、一點力量，陪伴大家溫柔地走過這段路。
            </Typography>
          </Box>
        </Container>
      </Paper>
    </Container>
  );
};

// --- AboutPage Component ---
const AboutPage: React.FC = () => {
  return (
    <Layout showBackground={true}>
      <AboutContent />
    </Layout>
  );
};

export default AboutPage;
