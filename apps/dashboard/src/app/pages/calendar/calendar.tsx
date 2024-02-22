//  eslint-disable @typescript-eslint/no-explicit-any 
import { EventApi, formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  // Button,
  // Dialog,
  // DialogActions,
  // DialogContent,
  // DialogTitle,
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Header from "../../components/header/header";
import { tokens } from "../../theme";
import axios, { AxiosResponse } from "axios";

// interface CalendarEvent {
//   title: string;
//   date: string;
// }

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/appointment/calendar");
      setCurrentEvents(response.data);
    };

    fetchData();
  }, []);

  // // State for managing modal open/close and new event data
  const [isModalOpen, setModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    allDay: false,
  });

  // const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  // const [selectedEventToDelete, setSelectedEventToDelete] = useState(null);

  // Reference to the FullCalendar instance
  const calendarRef = useRef(null);

  // Handle date click on the calendar to open the modal with pre-filled date
  const handleDateClick = (selected: {
    view: { calendar: any };
    dateStr: any;
    startStr: any;
    endStr: any;
    allDay: any;
  }) => {
    setNewEvent({
      title: "",
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    });
    setModalOpen(true);
  };

  // Close the modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Handle form submission from the modal to add a new event
  const handleFormSubmit = () => {
    // Get the calendar instance
    const calendarApi = (calendarRef.current as any)?.getApi();

    // Add the new event to the calendar
    calendarApi?.addEvent({
      id: `${newEvent.start}-${newEvent.title}`,
      title: newEvent.title,
      start: newEvent.start,
      end: newEvent.end,
      allDay: newEvent.allDay,
    });

    // Close the modal after submission
    setModalOpen(false);
  };

  // Handle click on an existing event to prompt for deletion
  // const handleEventClick = (selected: { event: { title: any; remove: () => void; }; }) => {
  //   if (
  //     window.confirm(
  //       `Are you sure you want to delete the event '${selected.event.title}'`
  //     )
  //   ) {
  //     selected.event.remove();
  //   }
  // };

    // Handle click on an existing event to prompt for deletion
    // const handleEventClick = (selected: { event: { title: any; remove: () => void; }; }) => {
    //   setSelectedEventToDelete(selected.events.remove);
    //   setDeleteModalOpen(true);
    // };

    // Handle deletion of the event
    // const handleDeleteEvent = () => {
    //   if (setSelectedEventToDelete) {
    //     setSelectedEventToDelete.remove();
    //     setDeleteModalOpen(false);
    //   }
    // };

  return (
    <Box m="20px">
      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box
          component={"div"}
          flex="1 1 20%"
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          {/* <List>
            {currentEvents.map((event: any) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List> */}
        </Box>

        {/* CALENDAR */}
        <Box 
          flex="1 1 100%" 
          ml="15px"
        >
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            // editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            // eventClick={handleEventClick}
            eventsSet={(events: EventApi[]) => setCurrentEvents(events)}
            ref={calendarRef}
            initialEvents={
              currentEvents.map((event: any) => ({
                title: event.title,
                date: event.date,
              }))
              // [
              //   { title: "Event Now", start: new Date() }
              // ]
            }
          />
        </Box>
      </Box>

      {/* MODAL */}
      {/* <Dialog
        open={isModalOpen}
        onClose={handleModalClose}
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle>Add New Appointment</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ marginBottom: "20px", width: "100%" }}
            label="Title"
            value={newEvent.title}
            onChange={(addEvent) =>
              setNewEvent({ ...newEvent, title: addEvent.target.value })
            }
          />
        
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleModalClose}
            sx={{ color: theme.palette.error.main }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleFormSubmit}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            Add Event
          </Button>
        </DialogActions>
      </Dialog> */}
    </Box>
  );
};

function setSelectedEventToDelete(event: { title: any; remove: () => void; }) {
  throw new Error("Function not implemented.");
}
export default Calendar;

