import { Box } from "@mui/material";
import Header from "../../components/header/header";
import BarChart from "../../components/bar-chart/bar-chart";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Bar Chart Page" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  )
}

export default Bar;