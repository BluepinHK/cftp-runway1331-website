import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";

import Layout from "../components/Layout";
import volunteerImage1 from "../assets/volunteer1.png";
import volunteerImage2 from "../assets/volunteer2.png";
import volunteerImage3 from "../assets/volunteer3.png";
import volunteerIcon from "../assets/volunteer-icon.png";

// Volunteer Header Component
const VolunteerHeader: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Box
        sx={{
          bgcolor: "#F2994A",
          color: "white",
          py: 2,
          px: 3,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          borderRadius: "16px 16px 0 0",
          border: "2px solid #5C5245",
          borderBottom: "none",
        }}
      >
        <img src={volunteerIcon} alt="Volunteer Icon" width={32} height={32} />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          義工
        </Typography>
      </Box>
    </Container>
  );
};

const VolunteerPage: React.FC = () => {
  return (
    <Layout showBackground={true}>
      <VolunteerHeader />
      <Container maxWidth="lg" sx={{ mt: 0 }}>
        {/* Main Content Paper */}
        <Paper
          elevation={3}
          sx={{
            py: { xs: 3, md: 6 },
            borderRadius: "0 0 16px 16px",
            border: "2px solid #5C5245",
            borderTop: "none",
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
              「攜手關愛大埔，讓每一個家庭都感到被看見、被記掛、被守護。」
            </Typography>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#5C5245",
                mb: 4,
              }}
            />
          </Box>

          {/* Main Volunteer Image */}
          <Grid container spacing={0} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 300 },
                  backgroundImage: `url(${volunteerImage1})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 300 },
                  backgroundImage: `url(${volunteerImage2})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 300 },
                  backgroundImage: `url(${volunteerImage3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          </Grid>

          <Box sx={{ px: { xs: 6, md: 12 } }}>
            {/* Introduction Section */}
            <Box sx={{ mb: 5, textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  pb: 1,
                }}
              >
                簡介
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                加入「關愛大埔」企業義工團隊，與我們一起為有需要的家庭送上實際支援與心靈安慰，讓關愛成為社區日常。當企業與社區連結起來，每一雙願意付出的手，都可以成為改變故事的一部分。{" "}
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#5C5245",
                my: 4,
              }}
            />

            {/* Values Section */}
            <Box sx={{ mb: 5, textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  display: "inline-block",
                  pb: 1,
                }}
              >
                我們相信的價值
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                在每一次探訪、每一項支援之中，我們都堅守：尊嚴、保密、專業、安全、責任。希望與企業夥伴攜手，為居民打造一個安全、有尊重、有溫度的居住環境。{" "}
              </Typography>
            </Box>

            {/* Why Corporate Participation Section */}
            <Box sx={{ textAlign: "center" }}>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                為何邀請企業參與
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                參與「關愛大埔」義工服務，不單是實踐企業社會責任（CSR），亦是團隊共同成長的機會。讓員工透過親身服務，建立凝聚力與使命感，體會「為社區出一分力」的真正意義。{" "}
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#5C5245",
                my: 4,
              }}
            />

            {/* Main Volunteer Service Areas Section */}
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  display: "inline-block",
                  pb: 1,
                }}
              >
                主要義工服務範疇
              </Typography>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  • 團隊義工活動：為企業度身訂造有意義又有團隊感的服務體驗
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  • 技工支援：協助房間傢俬安裝、公眾空間美化、油漆及簡單維修等
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  •
                  房務支援：房間及走廊清潔、房間佈置，為住戶營造更舒適的居住空間
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  • 搬運支援：幫忙搬運傢俬、床架及床褥，陪伴家庭重整生活
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  •
                  客戶服務支援：駐守前台、迎接及帶領住客、協助住客及供應商日常需要
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  •
                  後勤支援：整理及管理物資、分派物資給居民、與居民溝通了解實際需要
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  • 專業技能支援：提供社工服務、心理支援、興趣班導師等專業參與
                </Typography>
              </Box>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#5C5245",
                my: 4,
              }}
            />

            {/* Corporate Volunteer Partners Section */}
            <Box sx={{ mb: 5, textAlign: "center" }}>
              <Typography
                sx={{
                  color: "#000000",
                  fontWeight: "bold",
                  display: "inline-block",
                  pb: 1,
                }}
              >
                企業義工夥伴
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                如果貴公司希望以行動支持大埔社區，歡迎成為我們的企業義工夥伴，一起為居民帶來長遠而實在的改變。
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                如有興趣合作或了解更多，請透過電子郵件與我們聯絡。
              </Typography>
            </Box>
          </Box>

          {/* Contact Button */}
          {/* <Box sx={{ textAlign: "center", mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: "#5e4b3e",
                color: "white",
                px: 6,
                py: 1.5,
                fontSize: "1.1rem",
                fontWeight: "bold",
                borderRadius: 2,
                "&:hover": {
                  bgcolor: "#4a3a31",
                },
              }}
            >
              聯絡我們
            </Button>
          </Box> */}
        </Paper>
      </Container>
    </Layout>
  );
};

export default VolunteerPage;
