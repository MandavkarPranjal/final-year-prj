
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Form.css';
import axios from 'axios';
import Rectangle from '../../../public/images/Rectangle.jpg';
import transition from '../transition';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'First Name must only contain letters')
    .required('First Name is required'),
  lastName: yup
    .string()
    .matches(/^[A-Za-z]+$/, 'Last Name must only contain letters')
    .required('Last Name is required'),
  age: yup
    .number()
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .required('Age is required'),
  address: yup.string().required('Address is required'),
  gender: yup.string().required('Gender is required'),
  phoneNumber: yup
    .number()
    .required('Phone Number is required')
    .min(1000000000, 'Phone Number must be at least 10 digits')
    .max(9999999999, 'must contain 10 digits Only'),

  bookingDate: yup
    .date()
    .required('Booking Date is required')
    .min(new Date(), 'Invalid Date'),
  bookingTime: yup.string().required('Booking Time is required'),
});

const timeSlots = [
  '9:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  // Add more time slots as needed
];

const AppointmentForm: React.FC = ({}) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    setTouched,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      age: '',
      gender: '',
      phoneNumber: '',
      bookingDate: '',
      bookingTime: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setTouched({});
      resetForm();
      console.log(values);
      const response = await axios.post('http://localhost:3000/appointment/create', {
            firstName: values.firstName,
            lastName: values.lastName,
            address: values.address,
            age: Number(values.age),
            gender: values.gender,
            phoneNumber: values.phoneNumber,
            bookingDate: values.bookingDate,
            bookingTime: values.bookingTime
      })

      // console.log(response);
      // addAppointment(values);
      return response;
    },
  });

  return (
    <div className="super">
      <div className="main-cont">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="g-one">
              <p className="headings">Appointment Form</p>
              <TextField
                type="text"
                id="firstName"
                label="First Name"
                name="firstName"
                onChange={handleChange}
                onBlur={() => handleBlur('firstName')}
                value={values.firstName}
                error={touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
              />

              <TextField
                type="text"
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                onBlur={() => handleBlur('lastName')}
                value={values.lastName}
                error={touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
              />

              <TextField
                type="text"
                id="address"
                label="Address"
                name="address"
                onChange={handleChange}
                onBlur={() => handleBlur('address')}
                value={values.address}
                error={touched.address && !!errors.address}
                helperText={touched.address && errors.address}
              />

              <TextField
                type="text"
                id="age"
                label="Age"
                name="age"
                onChange={handleChange}
                onBlur={() => handleBlur('age')}
                value={values.age}
                error={touched.age && !!errors.age}
                helperText={touched.age && errors.age}
              />
            </div>

            <div className="g-two">
              <TextField
                type="text"
                id="gender"
                label="Gender"
                name="gender"
                onChange={handleChange}
                onBlur={() => handleBlur('gender')}
                value={values.gender}
                error={touched.gender && !!errors.gender}
                helperText={touched.gender && errors.gender}
              />

              <TextField
                type="text"
                id="phoneNumber"
                label="Phone Number"
                name="phoneNumber"
                onChange={handleChange}
                onBlur={() => handleBlur('phoneNumber')}
                value={values.phoneNumber}
                error={touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
              />

              <TextField
                type="date"
                id="bookingDate"
                // label="Booking Date"
                name="bookingDate"
                onChange={handleChange}
                onBlur={() => handleBlur('bookingDate')}
                value={values.bookingDate}
                error={touched.bookingDate && !!errors.bookingDate}
                helperText={touched.bookingDate && errors.bookingDate}
              />

              <FormControl fullWidth>
                <InputLabel id="bookingTimeLabel">Booking Time</InputLabel>
                <Select
                  labelId="bookingTimeLabel"
                  id="bookingTime"
                  name="bookingTime"
                  onChange={handleChange}
                  onBlur={() => handleBlur('bookingTime')}
                  value={values.bookingTime}
                  error={touched.bookingTime && !!errors.bookingTime}
                >
                  <MenuItem value="" disabled>
                    Select a time
                  </MenuItem>
                  {timeSlots.map((slot) => (
                    <MenuItem key={slot} value={slot}>
                      {slot}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <div className="img-container">
          <img className="book_img" src={Rectangle} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default transition(AppointmentForm);
