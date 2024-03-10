import { Box } from "@mui/material";
import Header from "../../components/header/header";
import PieChartComponent from "../../components/pie-chart/pie-chart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Pie Chart Page" />
      <Box height="75vh">
        <PieChartComponent />
      </Box>
    </Box>
  )
}

export default Pie;