import { Box, useTheme, Typography } from '@mui/material';
import Header from '../../components/header/header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Question Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            About This FAQ Page
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In this FAQ Page, here are some basic questions and answers about how to use this dashboard For both Admin and User. This page is designed to help the users and admin to understand the functionalities of this Dashboard.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            About this Dashboard
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In this dashboard there are TWO Roles - Admin and User. Admin can View Full Dashboard with all the functionalities and User can only view the Dashboard with limited functionalities. Only Admin can Add, Edit, Delete and View all the Users. User can only View the Dashboard and can Edit their own Profile.This Dashboard is User friendly and easy to use. Admin can view and edit all Users and their details in  <strong>'Manage Team'</strong> section. 
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            How to assign Roles?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            To Assign a Role, First Admin needs to log in through his E-mail and Password. Then Admin can go to <strong>'Profile Form'</strong> section and fill the Form . Admin can click on the User and can assign the Role to the User. Admin can assign the Role as Admin or User. Admin can Remove or Edit any Role as needed.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h4">
            Users Functionalities
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            User has limited functionalities in this dashboard as compared to Admin. User can Add, View, Edit and Delete appointments. User can also use Calandar to note down any important events. User can log in through his E-mail and Password that was created while Admin was making his Profile. 
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;
