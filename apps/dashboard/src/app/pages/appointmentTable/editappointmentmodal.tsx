
//------------------------temp code editmodal----------------------
import React, { useEffect, useState } from 'react';
import {
  Modal,
  Box,
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './editappointmentmodal.css';

type Appointment = {
  firstName: string;  
  lastName: string;
  email: string;
  address: string;
  age: number;
  gender: string;
  phoneNumber: string;
  Specialization: string;
  bookingDate: string;
  bookingTime: string;
};

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required('First Name is required')
    .matches(/^[A-Za-z]+$/, 'First Name must only contain letters'),
  lastName: yup
    .string()
    .required('Last Name is required')
    .matches(/^[A-Za-z]+$/, 'Last Name must only contain letters'),
  age: yup
    .number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Age is required'),
  address: yup.string().required('Address is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .required('Phone Number is required')
    .min(10, 'Phone Number must be at least 10 digits')
    .max(10, 'Must contain 10 digits only'),
  bookingDate: yup.string().required('Booking Date is required'),
  bookingTime: yup.string().required('Booking Time is required'),
  Specialization: yup.string().required('Specialization is required'),
  gender: yup.string().required('Gender is required'),
});

interface Props {
  open: boolean;
  onClose: () => void;
  appId: number;
}

const EditAppointmentModal: React.FC<Props> = ({ open, onClose, appId }) => {
  const { enqueueSnackbar } = useSnackbar();

  const { register, control, setValue, handleSubmit, formState: { errors } } = useForm<Appointment>({
    resolver: yupResolver(validationSchema),
  });

  const SpecializationOptions = [
    'Dentist',
    'Cardiologist',
    'Dermatologist',
    'Gynecologist',
    'Neurologist',
    'Gastroenterologists',
    'Pediatricians',
    'Oncologist',
  ];

  const genderOptions = ['Male', 'Female', 'Other'];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
  ];

  useEffect(() => {
    fetchdata();
  }, [appId]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/appointment/get/${appId}`);
      const appData = response.data;

      Object.keys(appData).forEach((key) => {
        setValue(key as keyof Appointment, appData[key]);
      });
    } catch (error) {
      console.log('Error fetching appointment data', error);
    }
  };

  const handleFormSubmit: SubmitHandler<Appointment> = async (values) => {
    try {
      const response = await axios.patch(`http://localhost:3000/appointment/update/${appId}`, values);

      if (response.status === 200) {
        enqueueSnackbar('Appointment Edited Successfully', { variant: 'success' });
        onClose();
      }
    } catch (error) {
      console.error('Error editing appointment', error);
      enqueueSnackbar('Failed to edit appointment', { variant: 'error' });
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <form className="form" onSubmit={handleSubmit(handleFormSubmit)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          < Stack spacing={3} sx={{ width: '100%' }
        }
          >
             <Stack direction="row" spacing={2}>

        <Controller 
          name='firstName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              sx={{ flex: 1 }}
              type="text"
              id="firstName"
              label="First Name"
              className='firstName'
              {...field}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}

        />            
        
        <Controller 
          name='lastName'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              sx={{ flex: 1}}
              type="text"
              id="lastName"
              label="Last Name"
              defaultValue={""}
              {...field}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />
          </Stack>

          <Stack direction="row" spacing={2}>
          
          <Controller
            name='address'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                sx={{ flex: 1 }}
                type="text"
                id="address"
                label="Address"
                defaultValue={""}
                {...field}
                error={!!errors.address}
                helperText={errors.address?.message}
              />
            )}
          />
          
          <Controller 
            name='age'
            control={control}
            // defaultValue=''
            render={({ field }) => (
              <TextField
                sx={{ flex: 1 }}
                type="number"
                id="age"
                label="Age"
                defaultValue={""}
                {...field}
                error={!!errors.age}
                helperText={errors.age?.message}
              />
            )}
          />
          
          </Stack>

          <Stack direction="row" spacing={2}>
          
          <Controller 
            name='email'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                sx={{ flex: 1 }}
                type="text"
                id="email"
                label="Email"
                defaultValue={""}
                {...field}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
          
          <Controller 
            name='phoneNumber'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                sx={{ flex: 1 }}
                type="text"
                id="phoneNumber"
                label="Phone Number"
                defaultValue={""}
                {...field}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            )}
          /> 
          </Stack>  

          <Stack direction="row" spacing={2}>

            <Controller 
            name='bookingDate'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                type="date"
                id="bookingDate"
                defaultValue={""}
                {...field}
                error={!!errors.bookingDate}
                helperText={errors.bookingDate?.message}
              />
            )}
            />
          <FormControl>
            <InputLabel id="SpecializationLabel">Specialization</InputLabel>
            <Controller
            name='Specialization'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <Select
                labelId="SpecializationLabel"
                id="Specialization"
                {...field}
                error={!!errors.Specialization}
              >
                <MenuItem value="" disabled>
                  Select Specialization
                </MenuItem>
                {SpecializationOptions.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
              
            )}
            />
           
          </FormControl>
                </Stack>

                <Stack direction="row" spacing={2}>
          <FormControl>
            <InputLabel id="genderLabel">Gender</InputLabel>
            <Controller 
              name="gender"
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Select
                  labelId="genderLabel"
                  id="gender"
                  {...field}
                  error={!!errors.gender}
                >
                  <MenuItem value="" disabled>
                    Select Gender
                  </MenuItem>
                  {genderOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>

              )}
            />
          </FormControl>
          <FormControl>
            <InputLabel id="bookingTimeLabel">Booking Time</InputLabel>
            <Controller 
              name="bookingTime"
              control={control}
              defaultValue=''
              render={({ field }) => (
                <Select
                  labelId="bookingTimeLabel"
                  id="bookingTime"
                  {...field}
                  error={!!errors.bookingTime}
                >
                  <MenuItem value="" disabled>
                    Select Booking Time
                  </MenuItem>
                  {timeSlots.map((slot) => (
                    <MenuItem key={slot} value={slot}>
                      {slot}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
            
            <FormHelperText error>{errors.bookingTime?.message}</FormHelperText>
          </FormControl>
          </Stack>
          <Button 
            variant="contained"
            type='submit'
            
          >
            Edit Appointment
          </Button>
          </Stack>
        </Box>
      </form>
    </Modal>
  );
};

export default EditAppointmentModal;
