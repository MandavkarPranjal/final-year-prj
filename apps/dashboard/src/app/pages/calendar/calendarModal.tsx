import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useTheme } from "@mui/system";
import axios from "axios";
import { S } from "@fullcalendar/core/internal-common";

interface CalendarModalProps {
  open: boolean;
  onClose: () => void;
  handleFormSubmit: (event: { title: string; start: string; end: string; allDay: boolean; type: string; doctor: string }) => void;
  newEvent: { title: string; start: string; end: string; allDay: boolean; leave: boolean; type: string; doctor: string};
}

const CalendarModal: React.FC<CalendarModalProps> = ({
  open,
  onClose,
  handleFormSubmit,
  newEvent,
}) => {
  const theme = useTheme();
  const [formData, setFormData] = useState({ 
    title: newEvent.title, 
    start: newEvent.start, 
    end: newEvent.end, 
    allDay: newEvent.allDay,
    type: '',
    doctor: '',
  });

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let title = formData.title; // Default title
    if (formData.type === 'Leave') {
      formData.title = `${formData.doctor} Leave`; // Change title if Leave is selected and doctor is chosen
    }
    handleFormSubmit(formData);
    
  };

  const [doctors, setDoctors] = useState([]) // Assuming you have a list of doctors

  useEffect(() => {
    fetchDoctors();
  }, [setDoctors] );
  
  const fetchDoctors = async () => {
    const response = await axios.get('http://localhost:3000/users/doctors').catch((error) => { console.error(error)})
    setDoctors(response.data)
  }
  const typeOptions = [
    'Event',
    'Leave',
  ]

  return (
    <Dialog open={open} onClose={onClose} fullWidth={true} maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle>Add New Event</DialogTitle>
        <DialogContent>
          <FormControl>
            {/* <FormGroup>
              <TextField
                sx={{ marginBottom: "20px", width: "100%" }}
                label="Title"
                value={formData.title}
                type="text"
                onChange={(e) => handleChange("title", e.target.value)}
              />
            
            </FormGroup> */}
            <InputLabel id="type">Type</InputLabel>
            <Select
              labelId="type"
              id="type"
              value={formData.leaveType}
              onChange={(e) => handleChange('leaveType', e.target.value as string)}
              variant="filled"
            >
              <MenuItem value="" disabled>
                Select Specialty
              </MenuItem>
              {/* Assuming you have an array of specialties like RoleOptions */}
              {typeOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>

            {formData.leaveType === 'Event' && (
            <TextField
              fullWidth
              label="Event Title"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              variant="filled"
              sx={{ mt: 2 }}
            />
          )}
          {formData.leaveType === 'Leave' && (
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id="doctorLabel">Doctor</InputLabel>
              <Select
                labelId="doctorLabel"
                id="doctor"
                value={formData.doctor}
                onChange={(e) => handleChange('doctor', e.target.value as string)}
              variant="filled"
              variant="filled"
              labelId="typeLabel"
              label="Type"
              id="type"
              {...register('type')}
                variant="filled"
              labelId="typeLabel"
              label="Type"
              id="type"
              {...register('type')}
              >
                <MenuItem value="" disabled>
                  Select Doctor
                </MenuItem>
                {/* Assuming you have a list of doctors */}
                {doctors.map((doctor) => (
                  <MenuItem key={doctor.id} value={doctor.id}>
                    {doctor.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
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
