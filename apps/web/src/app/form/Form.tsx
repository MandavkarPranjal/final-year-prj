// import React from 'react';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import './Form.css';

// const validationSchema = yup.object({
//   firstName: yup.string().required('First Name is required'),
//   lastName: yup.string().required('Last Name is required'),
//   address: yup.string().required('Address is required'),
//   age: yup.number().required('Age is required').positive().integer(),
//   gender: yup.string().required('Gender is required'),
//   phoneNumber: yup.string().required('Phone Number is required'),
//   bookingDate: yup.date().required('Booking Date is required').min(new Date(), 'Invalid Date'),
// });

// const AppointmentForm: React.FC = () => {
//   const formik = useFormik({
//     initialValues: {
//       firstName: '',
//       lastName: '',
//       address: '',
//       age: '',
//       gender: '',
//       phoneNumber: '',
//       bookingDate: '',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       // Handle form submission logic here
//       console.log(values);
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input
//           type="text"
//           id="firstName"
//           name="firstName"
//           onChange={formik.handleChange}
//           value={formik.values.firstName}
//         />
//         {formik.errors.firstName && <div>{formik.errors.firstName}</div>}
//       </div>

//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input
//           type="text"
//           id="lastName"
//           name="lastName"
//           onChange={formik.handleChange}
//           value={formik.values.lastName}
//         />
//         {formik.errors.lastName && <div>{formik.errors.lastName}</div>}
//       </div>

//       <div>
//         <label htmlFor="address">Address:</label>
//         <input
//           type="text"
//           id="address"
//           name="address"
//           onChange={formik.handleChange}
//           value={formik.values.address}
//         />
//         {formik.errors.address && <div>{formik.errors.address}</div>}
//       </div>

//       <div>
//         <label htmlFor="age">Age:</label>
//         <input
//           type="text"
//           id="age"
//           name="age"
//           onChange={formik.handleChange}
//           value={formik.values.age}
//         />
//         {formik.errors.age && <div>{formik.errors.age}</div>}
//       </div>

//       <div>
//         <label htmlFor="gender">Gender:</label>
//         <input
//           type="text"
//           id="gender"
//           name="gender"
//           onChange={formik.handleChange}
//           value={formik.values.gender}
//         />
//         {formik.errors.gender && <div>{formik.errors.gender}</div>}
//       </div>

//       <div>
//         <label htmlFor="phoneNumber">Phone Number:</label>
//         <input
//           type="text"
//           id="phoneNumber"
//           name="phoneNumber"
//           onChange={formik.handleChange}
//           value={formik.values.phoneNumber}
//         />
//         {formik.errors.phoneNumber && <div>{formik.errors.phoneNumber}</div>}
//       </div>

//       <div>
//         <label htmlFor="bookingDate">Booking Date:</label>
//         <input
//           type="date"
//           id="bookingDate"
//           name="bookingDate"
//           onChange={formik.handleChange}
//           value={formik.values.bookingDate}
//         />
//         {formik.errors.bookingDate && <div>{formik.errors.bookingDate}</div>}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default AppointmentForm;



// AppointmentForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import './Form.css';

const validationSchema = yup.object({
    
  firstName: yup.string().matches(/^[A-Za-z]+$/, 'First Name must only contain letters').required('First Name is required'),
  lastName: yup.string().matches(/^[A-Za-z]+$/, 'Last Name must only contain letters').required('Last Name is required'),
  age: yup.number().positive('Age must be a positive number').integer('Age must be an integer').required('Age is required'),
  address: yup.string().required('Address is required'),
  gender: yup.string().required('Gender is required'),
  phoneNumber: yup.string().required('Phone Number is required'),
  bookingDate: yup.date().required('Booking Date is required').min(new Date(), 'Invalid Date'),
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

const AppointmentForm: React.FC = () => {
  const formik = useFormik({
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
    onSubmit: (values) => {
      // Handle form submission logic here
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />
        {formik.errors.firstName && <div>{formik.errors.firstName}</div>}
      </div>

      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />
        {formik.errors.lastName && <div>{formik.errors.lastName}</div>}
      </div>

      <div>
        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
        {formik.errors.address && <div>{formik.errors.address}</div>}
      </div>

      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="age"
          name="age"
          onChange={formik.handleChange}
          value={formik.values.age}
        />
        {formik.errors.age && <div>{formik.errors.age}</div>}
      </div>

      <div>
        <label htmlFor="gender">Gender:</label>
        <input
          type="text"
          id="gender"
          name="gender"
          onChange={formik.handleChange}
          value={formik.values.gender}
        />
        {formik.errors.gender && <div>{formik.errors.gender}</div>}
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        {formik.errors.phoneNumber && <div>{formik.errors.phoneNumber}</div>}
      </div>

      <div>
        <label htmlFor="bookingDate">Booking Date:</label>
        <input
          type="date"
          id="bookingDate"
          name="bookingDate"
          onChange={formik.handleChange}
          value={formik.values.bookingDate}
        />
        {formik.errors.bookingDate && <div>{formik.errors.bookingDate}</div>}
      </div>

      <div>
        <label htmlFor="bookingTime">Booking Time:</label>
        <select
          id="bookingTime"
          name="bookingTime"
          onChange={formik.handleChange}
          value={formik.values.bookingTime}
        >
          <option value="" disabled>Select a time</option>
          {timeSlots.map((slot) => (
            <option key={slot} value={slot}>{slot}</option>
          ))}
        </select>
        {formik.errors.bookingTime && <div>{formik.errors.bookingTime}</div>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AppointmentForm;
