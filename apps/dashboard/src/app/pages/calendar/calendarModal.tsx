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
  const [formData, setFormData] = useState({ title: newEvent.title, start: newEvent.start, end: newEvent.end, allDay: newEvent.allDay });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmit(formData);
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
