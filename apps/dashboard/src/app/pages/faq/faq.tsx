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
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet euismod dolor justo takimata dolor
            voluptua diam nihil tation aliquyam iriure vel. Nostrud ut duo sit
            dolor molestie duo. Et kasd dolore cum volutpat voluptua consetetur
            at. Tation et ut consetetur consetetur dolores luptatum ut et
            gubergren. Eos voluptua aliquyam amet est autem illum ea invidunt
            dolore eirmod elitr dolor sadipscing. Dolor takimata et commodo
            velit et et vero assum dolore sed dolore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet euismod dolor justo takimata dolor
            voluptua diam nihil tation aliquyam iriure vel. Nostrud ut duo sit
            dolor molestie duo. Et kasd dolore cum volutpat voluptua consetetur
            at. Tation et ut consetetur consetetur dolores luptatum ut et
            gubergren. Eos voluptua aliquyam amet est autem illum ea invidunt
            dolore eirmod elitr dolor sadipscing. Dolor takimata et commodo
            velit et et vero assum dolore sed dolore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet euismod dolor justo takimata dolor
            voluptua diam nihil tation aliquyam iriure vel. Nostrud ut duo sit
            dolor molestie duo. Et kasd dolore cum volutpat voluptua consetetur
            at. Tation et ut consetetur consetetur dolores luptatum ut et
            gubergren. Eos voluptua aliquyam amet est autem illum ea invidunt
            dolore eirmod elitr dolor sadipscing. Dolor takimata et commodo
            velit et et vero assum dolore sed dolore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet euismod dolor justo takimata dolor
            voluptua diam nihil tation aliquyam iriure vel. Nostrud ut duo sit
            dolor molestie duo. Et kasd dolore cum volutpat voluptua consetetur
            at. Tation et ut consetetur consetetur dolores luptatum ut et
            gubergren. Eos voluptua aliquyam amet est autem illum ea invidunt
            dolore eirmod elitr dolor sadipscing. Dolor takimata et commodo
            velit et et vero assum dolore sed dolore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Semi-Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet euismod dolor justo takimata dolor
            voluptua diam nihil tation aliquyam iriure vel. Nostrud ut duo sit
            dolor molestie duo. Et kasd dolore cum volutpat voluptua consetetur
            at. Tation et ut consetetur consetetur dolores luptatum ut et
            gubergren. Eos voluptua aliquyam amet est autem illum ea invidunt
            dolore eirmod elitr dolor sadipscing. Dolor takimata et commodo
            velit et et vero assum dolore sed dolore.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet euismod dolor justo takimata dolor
            voluptua diam nihil tation aliquyam iriure vel. Nostrud ut duo sit
            dolor molestie duo. Et kasd dolore cum volutpat voluptua consetetur
            at. Tation et ut consetetur consetetur dolores luptatum ut et
            gubergren. Eos voluptua aliquyam amet est autem illum ea invidunt
            dolore eirmod elitr dolor sadipscing. Dolor takimata et commodo
            velit et et vero assum dolore sed dolore.
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  );
};

export default FAQ;
