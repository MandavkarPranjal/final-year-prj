import React, { useState } from 'react';
import { Modal, Box, Stack, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
}

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
    handleEditAppointment: (data: Appointment) => void;
    appId: number;
    // formData: Appointment; // Receive formData prop
    // setFormData: (data: Appointment) => void; // Receive setFormData prop
  }

const EditAppointmentModal: React.FC<Props> = ({ open, onClose, handleEditAppointment, appId }) => {
  // const [formData, setFormData] = useState<Appointment>({
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   address: '',
  //   age: 0,
  //   gender: '',
  //   phoneNumber: '',
  //   Specialization: '',
  //   bookingDate: '',
  //   bookingTime: '',
  // });
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<Appointment>({
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
    console.log(appId)

    try {
      const response = axios.patch(`http://localhost:3000/appointment/update/${appId}`, values);
      // console.log(appId)
      if((await response).status === 200){
        handleEditAppointment(values);
        onClose();
        // navigate(`/appointment`);
      }
    } catch (error) {
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
        }}
      >
        <Stack spacing={3}
        sx={{display: 'inline',
        
      }}
        >
          <TextField
          sx={{width: '50%',
               
               display: 'inline',}}
            type="text"
            id="firstName"
            label="First Name"
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            />
          <TextField
            sx={{width: '60%',
          display: 'inline',  
          }}
          
            type="text"
            id="lastName"
            label="Last Name"
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
          />
          <TextField
            type="text"
            id="address"
            label="Address"
            {...register('address')}
            error={!!errors.address}
            helperText={errors.address?.message}
          />
          <TextField
            type="number"
            id="age"
            label="Age"
            {...register('age')}
            error={!!errors.age}
            helperText={errors.age?.message}
          />
          <TextField
            type="text"
            id="email"
            label="Email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          
       
          <TextField
            type="text"
            id="phoneNumber"
            label="Phone Number"
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />
          <TextField
            type="date"
            id="bookingDate"
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