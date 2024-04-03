import React, { useState } from 'react';
import { Modal, Box, Stack, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSnackbar } from 'notistack';

type Appointment = {
  firstName: string;
  lastName: string;
  address: string;
  age: number;
  email: string;
  phoneNumber: string;
  bookingDate: string;
  Specialization: string;
  gender: string;
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
    // handleAddAppointment: (data: Appointment) => void;
    // formData: Appointment; // Receive formData prop
    // setFormData: (data: Appointment) => void; // Receive setFormData prop
  }

const AddAppointmentModal: React.FC<Props> = ({ open, onClose}) => {
  const { enqueueSnackbar } = useSnackbar();
//   const [formData, setFormData] = useState<Appointment>({
//     firstName: '',
//     lastName: '',
//     email: '',
//     address: '',
//     age: 0,
//     gender: '',
//     phoneNumber: '',
//     Specialization: '',
//     bookingDate: '',
//     bookingTime: '',
//   });

  const { register,reset, handleSubmit, formState: { errors } } = useForm<Appointment>({
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

  const handleFormSubmit: SubmitHandler<Appointment> = async (values) => {
    // handleAddAppointment(formData);
    // console.log('Form Data', values);
   

    try {
      const response = axios.post('http://localhost:3000/appointment/create', values);

      if((await response).status === 201){
        onClose();
        enqueueSnackbar('Appointment added Successfully', { variant: 'success' });
        // navigate(`/appointment`);
      }
      reset();
    } catch (error) {
      enqueueSnackbar('Failed to add appointment', { variant: 'error' });
      console.error('Error adding appointment', error);
    }
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
      <form className='form' onSubmit={handleSubmit(handleFormSubmit)}>
      
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
        <Stack spacing={3}sx={{ width: '100%' }
        }>
          <Stack direction="row" spacing={2}>

          <TextField
            sx={{ flex: 1 }}
            type="text"
            autoComplete='off'
            id="firstName"
            label="First Name"
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
          />
          <TextField
          sx={{ flex: 1 }}
            type="text"
            id="lastName"
            autoComplete='off'
            label="Last Name"
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
           </Stack>

           <Stack direction="row" spacing={2}>

          <TextField
          sx={{ flex: 1 }}
            type="text"
            id="address"
            autoComplete='off'
            label="Address"
            {...register('address')}
            error={!!errors.address}
            helperText={errors.address?.message}
            />
          <TextField
          sx={{ flex: 1 }}
            type="number"
            id="age"
            autoComplete='off'
            label="Age"
            {...register('age')}
            error={!!errors.age}
            helperText={errors.age?.message}
            />
            </Stack>

            <Stack direction="row" spacing={2}>

          <TextField
          sx={{ flex: 1 }}
            type="text"
            id="email"
            autoComplete='off'
            label="Email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            />
          <TextField
          sx={{ flex: 1 }}
            type="text"
            id="phoneNumber"
            autoComplete='off'
            label="Phone Number"
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            />
            </Stack>
            <Stack direction="row" spacing={2}>

          <TextField
          // sx={{ flex: 1 }}
            type="date"
            id="bookingDate"
            autoComplete='off'
            {...register('bookingDate')}
            error={!!errors.bookingDate}
            helperText={errors.bookingDate?.message}
            />
          <FormControl>
            <InputLabel id="SpecializationLabel">Specialization</InputLabel>
            <Select
              labelId="SpecializationLabel"
              id="Specialization"
              {...register('Specialization')}
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
            <FormHelperText error>{errors.Specialization?.message}</FormHelperText>
          </FormControl>
            </Stack>
            <Stack direction="row" spacing={2}>

          <FormControl>
            <InputLabel id="genderLabel">Gender</InputLabel>
            <Select
              labelId="genderLabel"
              id="gender"
              {...register('gender')}
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
            <FormHelperText error>{errors.gender?.message}</FormHelperText>
          </FormControl>
          <FormControl>
            <InputLabel id="bookingTimeLabel">Booking Time</InputLabel>
            <Select
              labelId="bookingTimeLabel"
              id="bookingTime"
              {...register('bookingTime')}
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
            <FormHelperText error>{errors.bookingTime?.message}</FormHelperText>
          </FormControl>
              </Stack>
          <Button 
            variant='contained'
            type='submit'
            // onClick={handleFormSubmi}
          >
            Add Appointment
          </Button>
        </Stack>
      </Box>

      </form>
    </Modal>
  );
};

export default AddAppointmentModal;