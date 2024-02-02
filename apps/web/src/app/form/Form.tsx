import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Form.css';
import axios from 'axios';
import { resolve } from 'path';
import Rectangle from '../../../public/images/Rectangle.jpg';

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

const AppointmentForm: React.FC = ({ }) => {
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
      //  await addAppointment(values);
      resetForm();
      // Handle form submission logic here

      console.log(values);
      const response = await axios.post(
        'http://localhost:3000/api/appointment',
        {
          firstName: values.firstName,
          lastName: values.lastName,
          address: values.address,
          age: Number(values.age),
          gender: values.gender,
          phoneNumber: values.phoneNumber,
          bookingDate: values.bookingDate,
          bookingTime: values.bookingTime,
        }
      );

      // console.log(response);
      // addAppointment(values);
      return response;
    },
  });
  console.log(errors);

  // const addAppointment = async (values: any) => {
  //   console.log(values.bookingDate);
  //   if (typeof addAppointment === 'function') {
  //     addAppointment(values);
  //     // onClose();
  //   } else {
  //     console.error('addNewUser is not a function');
  //   }
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:3000/api/appointment',
  //       {
  //         firstName: values.firstName,
  //         lastName: values.lastName,
  //         address: values.address,
  //         age: Number(values.age),
  //         gender: values.gender,
  //         phoneNumber: values.phoneNumber,
  //         bookingDate: values.bookingDate,
  //         bookingTime: values.bookingTime,
  //       }
  //     );
  //     console.log('Server response:', response.data);

  //     //       // You can update your state or perform other actions based on the response if necessary
  //   } catch (error) {
  //     console.log('errror', error);
  //   }
  // };

  return (
    <div className="super">
      <div className="main-cont">
        <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="g-one">
              <p className="headings">Appointment Form</p>
              <div className="firstNme">
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={() => handleBlur('firstName')}
                  value={values.firstName}
                />
                {/* {errors.firstName && <div>{errors.firstName}</div>} */}
                {touched.firstName && errors.firstName && (
                  <div>{errors.firstName}</div>
                )}
              </div>

              <div className="lastNme">
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={() => handleBlur('lastName')}
                  value={values.lastName}
                />
                {/* {errors.lastName && <div>{errors.lastName}</div>} */}
                {touched.lastName && errors.lastName && (
                  <div>{errors.lastName}</div>
                )}
              </div>

              <div className="addres">
                <input
                  type="text"
                  id="ad"
                  placeholder="Address"
                  name="address"
                  onChange={handleChange}
                  onBlur={() => handleBlur('address')}
                  value={values.address}
                />
                {/* {errors.address && <div>{errors.address}</div>} */}
                {touched.address && errors.address && (
                  <div>{errors.address}</div>
                )}
              </div>

              <div className="age">
                <input
                  type="text"
                  id="age"
                  placeholder="Age"
                  name="age"
                  onChange={handleChange}
                  onBlur={() => handleBlur('age')}
                  value={values.age}
                />
                {/* {errors.age && <div>{errors.age}</div>} */}
                {touched.age && errors.age && <div>{errors.age}</div>}
              </div>
            </div>

            <div className="g-two">
              <div className="gender">
                <input
                  type="text"
                  id="gender"
                  placeholder="Gender"
                  name="gender"
                  onChange={handleChange}
                  onBlur={() => handleBlur('gender')}
                  value={values.gender}
                />
                {/* {errors.gender && <div>{errors.gender}</div>} */}
                {touched.gender && errors.gender && <div>{errors.gender}</div>}
              </div>

              <div className="phn">
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  onChange={handleChange}
                  onBlur={() => handleBlur('phoneNumber')}
                  value={values.phoneNumber}
                />
                {/* {errors.phoneNumber && <div>{errors.phoneNumber}</div>} */}
                {touched.phoneNumber && errors.phoneNumber && (
                  <div>{errors.phoneNumber}</div>
                )}
              </div>

              <div className="date">
                <input
                  type="date"
                  id="bookingDate"
                  name="bookingDate"
                  onChange={handleChange}
                  onBlur={() => handleBlur('bookingDate')}
                  value={values.bookingDate}
                />
                {/* {errors.bookingDate && <div>{errors.bookingDate}</div>} */}
                {touched.bookingDate && errors.bookingDate && (
                  <div>{errors.bookingDate}</div>
                )}
              </div>

              <div className="timeing">
                <select
                  id="bookingTime"
                  name="bookingTime"
                  onChange={handleChange}
                  onBlur={() => handleBlur('bookingTime')}
                  value={values.bookingTime}
                >
                  <option value="" disabled>
                    Select a time
                  </option>
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {/* {errors.bookingTime && <div>{errors.bookingTime}</div>} */}
                {touched.bookingTime && errors.bookingTime && (
                  <div>{errors.bookingTime}</div>
                )}
              </div>
            </div>

            <button className="submit_btn" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="img-container">
          <img className="book_img" src={Rectangle} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;
