import { Box , Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import ProgressCircle from "../progress-circle/progress-circle";

const StatBox= ({ title, subtitle, icon, progress, increase}: { 
  title: string, 
  subtitle: string, 
  icon: JSX.Element, 
  progress: string, 
  increase: string 
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography 
            variant="h4" 
            fontWeight="bold" 
            sx={{ color: colors.grey[100]}}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress}/>
        </Box>

        </Box>
        
        <Box display="flex" justifyContent="space-between">
          <Typography 
            variant="h5"
            sx={{ color: colors.greenAccent[500]}}
          >
            {subtitle}
          </Typography>
          <Typography 
            variant="h5" 
            fontWeight="italic" 
            sx={{ color: colors.greenAccent[600]}}
          >
            {increase}
          </Typography>
        </Box>
     
    </Box>
  )
}

export default StatBox;
