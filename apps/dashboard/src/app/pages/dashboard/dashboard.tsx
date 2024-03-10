import { Box, Button, IconButton, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/header/header";
import { mockTransactions } from "../../../data/Mockdata";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import BarChart from "../../components/bar-chart/bar-chart";
import StatBox from "../../components/stat-box/stat-box";
// import ProgressCircle from "../../components/progress-circle/progress-circle";
// import LineChart from "../../components/line-chart/line-chart";
import PieChartComponent from "../../components/pie-chart/pie-chart";
import LineChartComponent from "../../components/line-chart/line-chart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard"/>
      

      <Box>
        {/* <Button
          sx={{
            backgroundColor: colors.blueAccent[700], 
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px"}}/>
          Download Reports
        </Button> */}
      </Box>
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box 
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400]}}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
            }
          />
        </Box>
        <Box 
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400]}}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
            }
          />
        </Box>
        <Box 
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400]}}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="32,653"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
            }
          />
        </Box>
        <Box 
          gridColumn="span 3"
          sx={{ backgroundColor: colors.primary[400]}}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox 
            title="1,21,523"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon sx={{ color: colors.greenAccent[600], fontSize: "26px"}}/>
            }
          />
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <LineChartComponent/>
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          sx={{ backgroundColor: colors.primary[400] }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Piechart of happy lives
          </Typography>
          <Box height="250px" mt="-20px">
            <PieChartComponent/>
          </Box>
        </Box>
        
      </Box>
    </Box>
  )
}

export default Dashboard;