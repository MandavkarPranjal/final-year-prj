// import React, { useCallback, useEffect, useRef, useState } from "react";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material";
// import FullCalendar from "@fullcalendar/react";
// import { EventApi, formatDate } from "@fullcalendar/core";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from "@fullcalendar/list";
// import { Button } from "@mui/material";
// import { tokens } from "../../theme";
// import CalendarModal from "./calendarModal";
// import axios from "axios";
// import { debounce } from "lodash";

// interface NewEvent {
//   title: string;
//   start: string;
//   end: string;
//   allDay: boolean;
// }

// const Calendar: React.FC = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);

//   const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [newEvent, setNewEvent] = useState<NewEvent>({
//     title: "",
//     start: "",
//     end: "",
//     allDay: false,
//   });

//   const fetchData = useCallback(() => {
//     axios
//       .get('http://localhost:3000/calendar')
//       .then((res) => {
//         console.log('Data Received:', res.data);
//         setCurrentEvents(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   const debouncedFetchData = useCallback(debounce(() => fetchData(), 500), [fetchData]);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   const calendarRef = useRef<FullCalendar>(null);

//   const handleDateClick = (selected: {
//     view: { calendar: FullCalendar };
//     dateStr: string;
//     startStr: string;
//     endStr: string;
//     allDay: boolean;
//   }) => {
//     setNewEvent({
//       title: "",
//       start: selected.startStr,
//       end: selected.endStr,
//       allDay: selected.allDay,
//     });
//     setModalOpen(true);
//   };

//   const handleModalClose = () => {
//     setModalOpen(false);
//     debouncedFetchData.cancel();
//     fetchData();
//     debouncedFetchData();
//   };

//   const handleFormSubmit = async (title: string) => {
//     try {
//       const event = {
//         id: `${newEvent.start}-${title}`,
//         title: title,
//         start: newEvent.start,
//         end: newEvent.end,
//         allDay: newEvent.allDay,
//       };

//       const response = await axios.post('http://localhost:3000/calendar/create', event);

//       setCurrentEvents([...currentEvents, response.data]);
//       setModalOpen(false);
//     } catch (error) {
//       console.error('Error adding event', error);
//       // Handle error, show a notification, or other error-handling logic
//     }
//   };

//   const handleEventClick = (selected: { event: { title: any; remove: () => void; }; }) => {
//     if (
//       window.confirm(
//         `Are you sure you want to delete the event '${selected.event.title}'`
//       )
//     ) {
//       selected.event.remove();
//     }
//   };

//   return (
//     <Box m="20px">
//       <Typography variant="h3">Calendar</Typography>
//       <Box display="flex" justifyContent="space-between">
//         <Box component={"div"} flex="1 1 20%" p="15px" borderRadius="4px">
//           <Typography variant="h5">Events</Typography>
//           {<List>
//             {currentEvents.map((event: any) => (
//               <ListItem
//                 key={event.id}
//                 sx={{
//                   backgroundColor: colors.greenAccent[500],
//                   margin: "10px 0",
//                   borderRadius: "2px",
//                 }}
//               >
//                 <ListItemText
//                   primary={event.title}
//                   secondary={
//                     <Typography>
//                       {event.start}
//                     </Typography>
//                   }
//                 />
//               </ListItem>
//             ))}
//           </List>}
//         </Box>

//         <Box flex="1 1 100%" ml="15px">
//           <FullCalendar
//             height="75vh"
//             plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
//             headerToolbar={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
//             }}
//             initialView="dayGridMonth"
//             editable={true}
//             selectable={true}
//             selectMirror={true}
//             dayMaxEvents={true}
//             select={handleDateClick}
//             eventClick={handleEventClick}
//             events={currentEvents.map((event: any) => ({
//               id: event.id,
//               title: event.title,
//               start: event.start,
//               end: event.end,
//               allDay: event.allDay,
//             }))}
//             ref={calendarRef}
//           />
//         </Box>
//       </Box>

//       <CalendarModal
//         open={isModalOpen}
//         onClose={handleModalClose}
//         handleFormSubmit={(event: { title: string; start: string; end: string; allDay: boolean }) => handleFormSubmit(event.title)}
//         newEvent={newEvent}
//       />
//     </Box>
//   );
// };

// export default Calendar;



//---------------------------------



import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import { EventApi } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import { tokens } from "../../theme";
import CalendarModal from "./calendarModal";
import axios from "axios";
import { debounce } from "lodash";

interface NewEvent {
  title: string;
  start: string;
  end: string;
  allDay: boolean;
}

const Calendar: React.FC = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventApi | null>(null);
  const [newEvent, setNewEvent] = useState<NewEvent>({
    title: "",
    start: "",
    end: "",
    allDay: false,
  });

  const fetchData = useCallback(() => {
    axios
      .get('http://localhost:3000/calendar')
      .then((res) => {
        console.log('Data Received:', res.data);
        setCurrentEvents(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const debouncedFetchData = useCallback(debounce(() => fetchData(), 500), [fetchData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const calendarRef = useRef<FullCalendar>(null);

  const handleDateClick = (selected: {
    view: { calendar: FullCalendar };
    dateStr: string;
    startStr: string;
    endStr: string;
    allDay: boolean;
  }) => {
    setNewEvent({
      title: "",
      start: selected.startStr,
      end: selected.endStr,
      allDay: selected.allDay,
    });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
    debouncedFetchData.cancel();
    fetchData();
    debouncedFetchData();
  };

  const handleDeleteModalOpen = (event: EventApi) => {
    setSelectedEvent(event);
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setSelectedEvent(null);
    setDeleteModalOpen(false);
  };

  const handleFormSubmit = async (title: string) => {
    try {
      const event = {
        id: `${newEvent.start}-${title}`,
        title: title,
        start: newEvent.start,
        end: newEvent.end,
        allDay: newEvent.allDay,
      };

      const response = await axios.post('http://localhost:3000/calendar/create', event);

      setCurrentEvents([...currentEvents, response.data]);
      setModalOpen(false);
    } catch (error) {
      console.error('Error adding event', error);
      // Handle error, show a notification, or other error-handling logic
    }
  };

  const handleEventClick = (selected: { event: EventApi; }) => {
    setSelectedEvent(selected.event);
    setDeleteModalOpen(true);
  };

  const handleEventDelete = async () => {
    if (selectedEvent) {
      try {
        // Perform the deletion on the server
        await axios.delete(`http://localhost:3000/calendar/${selectedEvent.id}`);

        // Update the local state after successful deletion
        setCurrentEvents(currentEvents.filter((event) => event.id !== selectedEvent.id));
        setDeleteModalOpen(false);
        console.log('Event deleted',selectedEvent.title);
      } catch (error) {
        console.error('Error deleting event', error);
        // Handle error, show a notification, or other error-handling logic
      }
    }
  };

  return (
    <Box m="20px">
      <Typography variant="h3">Calendar</Typography>
      <Box display="flex" justifyContent="space-between">
        <Box component={"div"} flex="1 1 20%" p="15px" borderRadius="4px">
          <Typography variant="h5">Events</Typography>
          {<List>
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
                      {event.start}
                    </Typography>
                  }
                />
                <Button onClick={() => handleDeleteModalOpen(event)}>Delete</Button>
              </ListItem>
            ))}
          </List>}
        </Box>

        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            events={currentEvents.map((event: any) => ({
              id: event.id,
              title: event.title,
              start: event.start,
              end: event.end,
              allDay: event.allDay,
            }))}
            ref={calendarRef}
          />
        </Box>
      </Box>

      <CalendarModal
        open={isModalOpen}
        onClose={handleModalClose}
        handleFormSubmit={(event: { title: string; start: string; end: string; allDay: boolean }) => handleFormSubmit(event.title)}
        newEvent={newEvent}
      />

      <Dialog
        open={isDeleteModalOpen}
        onClose={handleDeleteModalClose}
        aria-labelledby="delete-event-dialog-title"
        aria-describedby="delete-event-dialog-description"
      >
        <DialogTitle id="delete-event-dialog-title">Delete Event</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-event-dialog-description">
            Are you sure you want to delete the event "{selectedEvent?.title}"?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteModalClose}color="primary"variant="outlined" sx={{color:"white"}}>Cancel</Button>
          <Button onClick={handleEventDelete} color="error" variant="contained" >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
