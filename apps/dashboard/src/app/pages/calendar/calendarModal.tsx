// import React, { useState } from "react";
// import {
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Button,
//   TextField,
// } from "@mui/material";
// import { useTheme } from "@mui/system";
// import { formatDate } from "@fullcalendar/core";

// interface CalendarModalProps {
//   open: boolean;
//   onClose: () => void;
//   handleFormSubmit: (title: string) => void;
//   newEvent: { title: string; start: string; end: string; allDay: boolean };
// }
// const CalendarModal: React.FC<CalendarModalProps> = ({
//   open,
//   onClose,
//   handleFormSubmit,
//   newEvent,
// }) => {
//   const theme = useTheme();

//   return (
//     <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="sm">
//       <DialogTitle>Add New Event</DialogTitle>
//       <DialogContent>
//         <TextField
//           sx={{ marginBottom: "20px", width: "100%" }}
//           label="Title"
//           value={newEvent.title}
//           type="text"
//           // onChange={(addEvent) =>
//           //   handleFormSubmit(addEvent.target.value)
//           // }
//           onChange={(e) => {
//             newEvent.title = e.target.value;
//           }}
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={onClose} sx={{ color: theme.palette.error.main }}>
//           Cancel
//         </Button>
//         <Button
//           onClick={() => handleFormSubmit(newEvent.title)}
//           sx={{
//             backgroundColor: theme.palette.primary.main,
//             color: theme.palette.primary.contrastText,
//           }}
//         >
//           Add Event
//         </Button>
//       </DialogActions>
//     </Dialog>
//   );
// };

// export default CalendarModal;


//---------------------------------------------------------------------

import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useTheme } from "@mui/system";

interface CalendarModalProps {
  open: boolean;
  onClose: () => void;
  handleFormSubmit: (event: { title: string; start: string; end: string; allDay: boolean }) => void;
  newEvent: { title: string; start: string; end: string; allDay: boolean };
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  open,
  onClose,
  handleFormSubmit,
  newEvent,
}) => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ title: newEvent.title });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmit({ ...formData, start: newEvent.start, end: newEvent.end, allDay: newEvent.allDay });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <FormControl>
            <FormGroup>
              <TextField
                sx={{ marginBottom: "20px", width: "100%" }}
                label="Title"
                value={formData.title}
                type="text"
                onChange={(e) => handleChange("title", e.target.value)}
              />
              {/* Add more fields for other event details as needed */}
            </FormGroup>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} sx={{ color: theme.palette.error.main }}>
            Cancel
          </Button>
          <Button
            type="submit"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
          >
            Add Event
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CalendarModal;


