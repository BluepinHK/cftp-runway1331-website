import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";

import Layout from "../components/Layout";
import enterpriseImage1 from "../assets/enterprise1.png";
import enterpriseImage2 from "../assets/enterprise2.png";
import enterpriseImage3 from "../assets/enterprise3.png";
import enterpriseIcon from "../assets/enterprise-icon.png";

// Enterprise Header Component
const EnterpriseHeader: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Box
        sx={{
          bgcolor: "#27AE60",
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
        <img
          src={enterpriseIcon}
          alt="Enterprise Icon"
          width={32}
          height={32}
        />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          企業
        </Typography>
      </Box>
    </Container>
  );
};

const EnterprisePage: React.FC = () => {
  return (
    <Layout showBackground={true}>
      <EnterpriseHeader />
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
              啟航1331相信，每一間企業都有力量，為社區帶來真正而長遠的改變。透過「啟航1331－關愛大埔」計劃，誠邀企業與我們同行，將資源、專業與愛心化為實際行動，陪伴大埔有需要的家庭重新出發。
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

          {/* Main Enterprise Image */}
          <Grid container spacing={0} sx={{ mb: 4 }}>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box
                sx={{
                  width: "100%",
                  height: { xs: 250, md: 300 },
                  backgroundImage: `url(${enterpriseImage1})`,
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
                  backgroundImage: `url(${enterpriseImage2})`,
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
                  backgroundImage: `url(${enterpriseImage3})`,
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
                一起為大埔加一點溫度
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                「啟航1331－關愛大埔」是一個連結企業、社區與家庭的平台，讓關懷不只停留在口號，而是化成看得見、感受得到的支持。
              </Typography>

              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                不論是一次性的參與，還是長期的合作，都能成為改變故事的一部分，讓每個家庭知道：在困難中，並不孤單。
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
                企業可以怎樣參與
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                企業的參與方式可以很靈活，按著公司文化、資源與團隊特質，一起設計最合適的關愛行動：{" "}
              </Typography>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  •
                  物資捐贈：提供生活用品、家居設備、學習用品等，減輕家庭日常負擔，為他們騰出更多空間面對未來
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  •
                  義工服務：員工可組成義工隊，參與清潔整理、搬運支援、空間佈置、前台接待、活動協助等，讓服務變成團隊共同的回憶
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  •
                  專業服務：歡迎具備社工、心理輔導、醫療護理、法律、教育、財務等專業背景的企業或員工，提供專業諮詢、講座或個案支援
                </Typography>
              </Box>

              <Box>
                <Typography
                  variant="body1"
                  sx={{ lineHeight: 2.5, color: "#000000" }}
                >
                  •
                  共同企劃活動：與我們一起構思關愛行動，例如親子活動、興趣班、健康工作坊、社區日等，將企業文化與社區需要結合
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
            {/* Why Corporate Participation Section */}
            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontWeight: "bold",
                  mb: 3,
                  display: "inline-block",
                  pb: 1,
                }}
              >
                讓愛在社會中延續
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                每一次探訪、每一次捐贈、每一次專業支援，都是一顆小小的種子，慢慢在社區發芽。
                期盼與各界企業攜手，群策群力，讓關愛在大埔紮根，在香港蔓延，成為一份可以被看見、也可以被承傳的力量。
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 2, color: "#000000" }}
              >
                如貴公司有意參與或想進一步了解合作模式，歡迎與我們聯絡，一起啟動「啟航1331－關愛大埔」的同行旅程。
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

export default EnterprisePage;
