

import { yupResolver } from '@hookform/resolvers/yup';
import { FormHelperText } from '@mui/material';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import Rectangle from '../../../public/images/Rectangle.jpg';
import appointment from '../../../public/images/appointment.png';
import inTime from '../../../public/images/inTime.png';
import doctor from '../../../public/images/doctor.png';
import './form.css';
import transition from '../transition';
// Define the shape of the form values
type AppointmentFormValues = {
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

// Define validation schema using yup
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

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  // Add more time slots as needed
];

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

const AppointmentForm: React.FC = () => {
  // Destructure react-hook-form functions
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: yupResolver(validationSchema),
  });

  // Define the function to be called on form submission
  const onSubmit: SubmitHandler<AppointmentFormValues> = async (values) => {
    console.log(values);
    console.log('Form submitted');

    try {
      const response = await axios.post(
        'http://localhost:3000/appointment/create',
        values
      );
      console.log('API response:', response.data);
      // Handle success or further actions here
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle errors or display error messages to the user
    }
  };

  return (
    <div className="super">
        <div className="dummy">
          <h3 className='up'>Book a Appointment</h3>
      <div className="main-cont">
        <div className="form-container">
          {/* The onSubmit function will be called when the form is submitted */}
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            {/* Section One: Personal Information */}
            <div className="g-one">
              <p className="headings">Appointment Form</p>
              <TextField
              sx={{
                marginRight: 6,
                marginLeft: 4
              }}
                type="text"
                id="firstName"
                label="First Name"
                {...register('firstName')}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />

              <TextField
                type="text"
                id="lastName"
                label="Last Name"
                {...register('lastName')}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />

              <TextField
              sx={{
                marginRight: 6,
                marginLeft: 4
              }}
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
            </div>

            {/* Section Two: Contact Information */}
            <div className="g-two">
              <TextField
              sx={{
                marginRight: 6,
                marginLeft: 4
              }}
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
              sx={{
                marginRight: 6,
                marginLeft: 4
              }}
                type="date"
                id="bookingDate"
                // label="Booking Date"
                {...register('bookingDate')}
                error={!!errors.bookingDate}
                helperText={errors.bookingDate?.message}
              />
              <FormControl>
                <InputLabel id="SpecializationLabel">Specialization</InputLabel>
                <Select
                  labelId="SpecializationLabel"
                  id="Specialization"
                  {...register('Specialization')} // Provide a default value
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

              <FormControl
              sx={{
                marginRight: 6,
                marginLeft: 4
              }}
              >
                <InputLabel id="genderLabel">Gender</InputLabel>
                <Select
                  labelId="genderLabel"
                  id="gender"
                  {...register('gender')} // Provide a default value
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
                <FormHelperText error>
                  {errors.bookingTime?.message}
                </FormHelperText>
              </FormControl>
            </div>

            {/* Submit Button */}
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{
                marginLeft: 32,
                width: 150,
              }}
            >
              Submit
            </Button>
          </form>
        </div>
        {/* Image Container */}
        <div className="img-container">
          <img className="book_img" src={Rectangle} alt="img" />
        </div>
      </div>
      
      <div className="apptbtm">
        <div className="btm1">
  <img className='aapticon' src={appointment} alt="" />
  <p className='btmtxt'>Monday - Saturday</p>
  </div>

  <div className="btm1">
  <img className='aapticon' src={inTime} alt="" />
  <p className='btmtxt'>09.00 Am - 08.00 Pm</p>
  </div>

  <div className="btm1">
  <img className='aapticon' src={doctor} alt="" />
  <p className='btmtxt'>All Doctors Available</p>
  </div>
  </div>
        
      </div>
    </div>
  );
};

export default transition(AppointmentForm);
