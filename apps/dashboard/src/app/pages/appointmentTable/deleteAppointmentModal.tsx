import React, { useState } from 'react';
import { Modal, Box, Stack, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText, Typography } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { co } from '@fullcalendar/core/internal-common';
import { SnackbarProvider, useSnackbar } from 'notistack'


interface Props {
    open: boolean;
    onClose: () => void;
    // handleDeleteAppointment: (appId: number) => void; // Add a new prop for deleting appointment
    appId: number;
  }
  
  const DeleteAppointmentModal: React.FC<Props> = ({ open, onClose, appId }) => {
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  
    const handleDeleteConfirmationOpen = () => {
      setDeleteConfirmationOpen(true);
    };
  
    const handleDeleteConfirmationClose = () => {
    
        onClose();
      setDeleteConfirmationOpen(false);
    };
  
    const handleDelete = () => {
      handleDeleteAppointment(appId);
      handleDeleteConfirmationClose();
    };

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const handleDeleteAppointment = async (appId: number) => {
        try {
            const response = axios
            .delete(`http://localhost:3000/appointment/delete/${appId}`)

            if((await response).status === 200){
              enqueueSnackbar('Appointmented Deleted Successfully', { variant: 'error' });

                console.log('Appointment Deleted')
            }
        } catch (error) {
            console.log('Appointment Not Deleted')
        }

    };

  
    return (
      <>
        {/* Delete Confirmation Modal */}
        <Modal open={open} onClose={onClose} aria-labelledby="delete-confirmation-modal-title">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 5,
            }}
          >
            <Stack spacing={3}>
              <Typography variant="h6" id="modal-title" gutterBottom>
                Are you sure you want to delete this appointment?
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" color="error" onClick={handleDelete}>
                  Yes
                </Button>
                <Button variant="contained" onClick={handleDeleteConfirmationClose} color="primary"
                >
                  Cancel
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </>
    );
  };
  
  export default DeleteAppointmentModal;
  