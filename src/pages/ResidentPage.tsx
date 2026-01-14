import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

import Layout from "../components/Layout";

import residentIcon from "../assets/resident-icon.png";
import roomStandardDouble from "../assets/room-standard-double.png";
import roomDoubleApartment from "../assets/room-double-apartment.png";
import roomFourApartment from "../assets/room-four-apartment.png";

import facilityImage from "../assets/facility-image.png";
import busImage1 from "../assets/bus1.png";
import busImage2 from "../assets/bus2.png";

// Resident Header Component
const ResidentHeader: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 6 }}>
      <Box
        sx={{
          bgcolor: "#5e4b3e",
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
        <img src={residentIcon} alt="Resident Icon" width={32} height={32} />
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          居民
        </Typography>
      </Box>
    </Container>
  );
};

const ResidentPage: React.FC = () => {
  // Room types data
  const roomTypes = [
    {
      title: "標準雙房",
      subtitle: "樓層 2-3人入住",
      image: roomStandardDouble,
    },
    {
      title: "標準大房",
      subtitle: "樓層 2-3人入住",
      image: roomDoubleApartment,
    },
    {
      title: "標準家庭房",
      subtitle: "樓層 2-3人入住",
      image: roomFourApartment,
    },
  ];

  // Schedule data
  const scheduleData = [
    {
      facility: "旅舍接待處",
      location: "088-G03",
      hours: "24小時",
      remark: "入住後如需協助，請致電：84838952",
    },
    {
      facility: "火災應急住宿政府服務",
      location: "088-G04",
      hours: "08:00 - 22:00",
      remark: "",
    },
    {
      facility: "兒童遊戲房",
      location: "088-G05",
      hours: "09:00 - 23:00",
      remark: "",
    },
    {
      facility: "洗衣房",
      location: "088-G02 / 809-G02",
      hours: "24小時",
      remark: "",
    },
    {
      facility: "活動室",
      location: "089-G01",
      hours: "09:00 - 23:00",
      remark: "",
    },
    {
      facility: "物資站",
      location: "089-G03",
      hours: "09:00 - 21:00",
      remark: "",
    },
    {
      facility: "食物補給站",
      location: "089-G04",
      hours: "09:00 - 21:00",
      remark: "",
    },
    { facility: "", number: "", hours: "", remark: "" },
    {
      facility: "衣物提供站",
      location: "089-G05",
      hours: "09:00 - 21:00",
      remark: "",
    },
    {
      facility: "西方寺－抄經房（即將開幕）",
      location: "080-G03",
      hours: "請致電提前預約：84838952 /84838915",
      remark: "",
    },
    {
      facility: "中醫診療所",
      location: "081-G02",
      hours: "請致電提前預約：84838952 /84838915",
      remark: "",
    },
    {
      facility: "醫療中心",
      location: "081-G03",
      hours: "請致電提前預約：84838952 /84838915",
      remark: "",
    },
    {
      facility: "減壓聊天室",
      location: "081-G04",
      hours: "請致電提前預約：84838952 /84838915",
      remark: "",
    },
    {
      facility: "共享客廳（歡迎所有人享用）",
      location: "",
      hours: "24小時",
      remark: "",
    },
  ];

  // Bus schedule
  const busSchedule = [
    { runway1331: "7:00", kaitakExitA: "7:10" },
    { runway1331: "7:30", kaitakExitA: "7:40" },
    { runway1331: "8:00", kaitakExitA: "8:10" },
    { runway1331: "8:30", kaitakExitA: "8:40" },
    { runway1331: "9:00", kaitakExitA: "9:10" },
    { runway1331: "9:30", kaitakExitA: "9:40" },
    { runway1331: "10:00", kaitakExitA: "10:10" },
    { runway1331: "10:30", kaitakExitA: "10:40" },
    { runway1331: "11:00", kaitakExitA: "11:10" },
    { runway1331: "11:30", kaitakExitA: "11:40" },
    { runway1331: "12:00", kaitakExitA: "12:10" },
    { runway1331: "12:30", kaitakExitA: "12:40" },
    { runway1331: "13:00", kaitakExitA: "18:45" },
    { runway1331: "13:30", kaitakExitA: "13:40" },
    { runway1331: "14:00", kaitakExitA: "14:10" },
    { runway1331: "14:30", kaitakExitA: "14:40" },
    { runway1331: "15:00", kaitakExitA: "15:10" },
    { runway1331: "15:30", kaitakExitA: "15:40" },
    { runway1331: "16:00", kaitakExitA: "16:10" },
    { runway1331: "16:30", kaitakExitA: "16:40" },
    { runway1331: "17:00", kaitakExitA: "17:10" },
    { runway1331: "17:30", kaitakExitA: "17:40" },
    { runway1331: "18:00", kaitakExitA: "18:10" },
    { runway1331: "18:30", kaitakExitA: "18:40" },
    { runway1331: "19:00", kaitakExitA: "19:10" },
    { runway1331: "19:30", kaitakExitA: "19:40" },
    { runway1331: "20:00", kaitakExitA: "20:10" },
    { runway1331: "20:30", kaitakExitA: "20:40" },
    { runway1331: "21:00", kaitakExitA: "21:10" },
  ];

  return (
    <Layout showBackground={true}>
      <ResidentHeader />
      <Container maxWidth="lg" sx={{ mt: 0 }}>
        {/* Main Content Paper */}
        <Paper
          elevation={3}
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: "0 0 16px 16px",
            border: "2px solid #5C5245",
            borderTop: "none",
            bgcolor: "rgba(255,255,255,0.95)",
          }}
        >
          {/* Title */}
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography
              sx={{
                color: "#5e4b3e",
                fontWeight: "bold",
                display: "inline-block",
                fontSize: "1.5rem",
              }}
            >
              房型介紹
            </Typography>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              width: "100%",
              height: "1px",
              backgroundColor: "#5C5245",
              mb: 4,
            }}
          />

          {/* Room Types Section */}
          <Grid container spacing={2} sx={{ mb: 6 }}>
            {/* Column 1: 標準雙床房 */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box>
                <Box
                  component="img"
                  src={roomTypes[0].image}
                  alt={roomTypes[0].title}
                  sx={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {roomTypes[0].title} （{roomTypes[0].subtitle}）
                </Typography>
              </Box>
            </Grid>

            {/* Column 2: 雙床公寓房 */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box>
                <Box
                  component="img"
                  src={roomTypes[1].image}
                  alt={roomTypes[1].title}
                  sx={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {roomTypes[1].title} （{roomTypes[1].subtitle}）
                </Typography>
              </Box>
            </Grid>

            {/* Column 3: 四床公寓房 */}
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box>
                <Box
                  component="img"
                  src={roomTypes[2].image}
                  alt={roomTypes[2].title}
                  sx={{
                    width: "100%",
                    height: 360,
                    objectFit: "cover",
                    borderRadius: 1,
                    mb: 2,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {roomTypes[2].title} （{roomTypes[2].subtitle}）
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              bgcolor: "#EFE8D6",
              border: "2px solid #5C5245",
              borderRadius: "16px",
              p: 6,
            }}
          >
            {/* Facilities Section */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                sx={{
                  color: "#5e4b3e",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                設施與服務
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#5C5245",
                mb: 4,
              }}
            />

            <Box
              component="img"
              src={facilityImage}
              alt="Facility"
              sx={{ width: "100%", height: 1200, objectFit: "cover" }}
            />

            {/* Schedule/Hours Section */}

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#5C5245",
                mb: 4,
                mt: 2,
              }}
            />

            <Grid container spacing={2}>
              <Grid size={{ xs: 5 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  設施
                </Typography>
              </Grid>
              <Grid size={{ xs: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  位置
                </Typography>
              </Grid>
              <Grid size={{ xs: 3 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  開放時間
                </Typography>
              </Grid>
              <Grid size={{ xs: 2 }}>
                <Typography
                  variant="subtitle2"
                  sx={{ fontWeight: "bold", mb: 1 }}
                >
                  備註
                </Typography>
              </Grid>
            </Grid>
            {scheduleData.map((item, index) => (
              <Grid container spacing={2} key={index} sx={{ mb: 0.5 }}>
                <Grid size={{ xs: 5 }}>
                  <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                    {item.facility}
                  </Typography>
                </Grid>
                <Grid size={{ xs: 2 }}>
                  <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                    {item.location}
                  </Typography>
                </Grid>
                <Grid size={{ xs: item.remark.length > 0 ? 3 : 5 }}>
                  <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                    {item.hours}
                  </Typography>
                </Grid>
                <Grid size={{ xs: item.remark.length > 0 ? 2 : 0 }}>
                  <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                    {item.remark}
                  </Typography>
                </Grid>
              </Grid>
            ))}

            {/* <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#5e4b3e",
                  color: "white",
                  px: 4,
                  "&:hover": {
                    bgcolor: "#4a3a31",
                  },
                }}
              >
                預約
              </Button>
            </Box> */}
          </Box>

          {/* Transportation Section */}
          <Box>
            <Box sx={{ textAlign: "center", mb: 4, mt: 6 }}>
              <Typography
                sx={{
                  color: "#5e4b3e",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                交通資訊
              </Typography>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#5C5245",
                mb: 4,
              }}
            />

            {/* Bus Route Info */}
            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
              >
                穿梭巴士服務 （往大埔）
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center", mb: 1 }}>
                出發地點：由 5 號閘開出，途經 3 號閘及 2 號閘
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center", mb: 1 }}>
                08:30 啟航1331 → 大埔街市
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center", mb: 2 }}>
                18:00 大埔街市 → 啟航1331
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
              >
                穿梭巴士服務 （往港鐵啟德站A出口－沐安街）
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center", mb: 1 }}>
                由早上7：00至晚上9：10{" "}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center", mb: 1 }}>
                每30分鐘一班，由 5 號閘開出，途經 3 號閘及 2 號閘{" "}
              </Typography>
            </Box>

            <Box sx={{ mb: 3 }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
              >
                啟航1331 穿梭巴士 來往啟德站時間表（2025年12月15日生效）
              </Typography>

              <Typography variant="body2" sx={{ textAlign: "center", mb: 1 }}>
                循環路線：啟航1331（第3B期）▶ 啟航1331（第2期）▶
              </Typography>
              <Typography variant="body2" sx={{ textAlign: "center", mb: 1 }}>
                沐安街（啟德站A出口）▶ 啟航1331（第2期）▶ 啟航1331（第3B期）
              </Typography>
            </Box>

            {/* Bus Image Placeholder */}
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Box
                component="img"
                src={busImage1}
                alt="Bus"
                sx={{
                  padding: 1,
                  width: "100%",
                  maxWidth: 300,
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 1,
                  mx: "auto",
                }}
              />
              <Box
                component="img"
                src={busImage2}
                alt="Bus"
                sx={{
                  padding: 1,
                  width: "100%",
                  maxWidth: 300,
                  height: 200,
                  objectFit: "cover",
                  borderRadius: 1,
                  mx: "auto",
                }}
              />
            </Box>

            {/* Bus Schedule Table */}
            <TableContainer>
              <Table size="small" sx={{ border: "1px solid #ddd" }}>
                <TableBody>
                  <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", border: "1px solid #ddd" }}
                    >
                      啟航1331（第3B期）
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", border: "1px solid #ddd" }}
                    >
                      沐安街（啟德站A出口）
                    </TableCell>
                  </TableRow>

                  <TableRow sx={{ bgcolor: "#f5f5f5" }}>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", border: "1px solid #ddd" }}
                    >
                      開車時間
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ fontWeight: "bold", border: "1px solid #ddd" }}
                    >
                      開車時間
                    </TableCell>
                  </TableRow>
                  {busSchedule.map((schedule, index) => (
                    <TableRow key={index}>
                      <TableCell
                        align="center"
                        sx={{ border: "1px solid #ddd" }}
                      >
                        {schedule.runway1331}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ border: "1px solid #ddd" }}
                      >
                        {schedule.kaitakExitA}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>

          {/* Notice Section */}

          {/* Divider */}

          <Box
            sx={{
              bgcolor: "#EFE8D6",
              border: "2px solid #5C5245",
              p: 3,
              borderRadius: 2,
              "& p": { mb: 2, fontSize: "0.9rem", lineHeight: 1.8 },
              mt: 6,
            }}
          >
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
            >
              住宿及政策
            </Typography>
            <Box
              sx={{
                width: "100%",
                height: "1px",
                backgroundColor: "#5C5245",
                mb: 4,
              }}
            />
            <Typography variant="body2" textAlign="center">
              •請於退房時交回房間鎖匙。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •住客須自行妥善保管個人物品及貴重財物。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •所有房門及窗戶必須上鎖。住宿期間如因存放不當或疏忽
              而導致個人物品遺失或損壞，本宿舍恕不負責。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •嚴禁於房間內烹飪。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •為顧及他人，請於晚上11時至早上9時期間保持安靜。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •所有房間及非吸煙區域內嚴禁吸煙。吸煙區域請參閱地圖指示。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •晚上11時後恕不接待訪客留宿房內。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •嚴禁在宿舍內存放或使用任何非法娛樂性藥物。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •不得攜帶榴槤或其他味道濃烈的食物及飲品進入宿舍。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •請勿在走廊或公共區域晾曬衣物。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •未經管理層書面同意，請勿於宿舍內舉行任何商業、政治或宗教聚會。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •管理層保留修改所有條款及規定的權利。住宿守則及指引或會於未有事先通知的情況下作出更改。
            </Typography>
            <Typography variant="body2" textAlign="center">
              •請保持房間清潔。本宿舍備有清潔用品可供使用。
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default ResidentPage;
