import { Box } from "@mui/material";
import Header from "../../components/header/header";
import LineChartComponent from "../../components/line-chart/line-chart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Line Chart Page" />
      <Box height="75vh">
        <LineChartComponent />
      </Box>
    </Box>
  )
}

export default Line;