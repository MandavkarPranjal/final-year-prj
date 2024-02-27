import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/header/header";
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { __values } from "tslib";
import Select from '@mui/material/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, set, useForm } from 'react-hook-form';
import { SnackbarProvider, useSnackbar } from 'notistack'

import { co } from "@fullcalendar/core/internal-common";
import { on } from "events";

type UserFormProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address_1: string;
  address_2: string;
  role: string[];
  password: string;
}


const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address_1: "",
  address_2: "",
  role : "",
  password: "",
};

const userSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .length(10, "Phone number must be 10 digits")
    .required("required"),
  address_1: yup.string().required("required"),
  address_2: yup.string().required("required"),
  role: yup.string().required("required"),
  password: yup.string().min(6, "Must contain atleast 6 characters").max(20, "Should be under 20 characters").required('Password is required'),
});


// const RoleOptions = [
//   'ADMIN',
//   'DOCTOR',
//   'RECEPTIONIST',
  
// ];
const RoleOptions = [
  { value: 'ADMIN', label: 'Admin' },
  { value: 'USER', label: 'User' },
];


const Form = () => {

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [status, setStatus] = useState<String | null>(); // Fix: Change the type to [String, Dispatch<SetStateAction<String>>
  const [res, setRes] = useState<String | null>(null);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<UserFormProps>({
    resolver: yupResolver(userSchema),
  });

  // useEffect(() => {
  //   // This block will execute every time 'res' is updated
  //   if (res) {
  //     console.log(res.data); // Log the response data

  //     if (res.status === 201) {
  //       enqueueSnackbar('User Created Successfully', { variant: 'success' });
  //     } else {
  //       enqueueSnackbar(res.data.message, { variant: 'error' });
  //     }
  //   }
  // }, [res, enqueueSnackbar]);

  const onSubmit: SubmitHandler<UserFormProps> = async (data) => {
    // console.log(data);
    
    try {
      // Include the selected role in the data
      const userData = { ...data, role: [data.role], }
      const response = await axios.post('http://localhost:3000/auth/create-user', userData);
  
      setStatus(response.status.toString());
  
      if (response.status === 201) {
        enqueueSnackbar('User Created Successfully', { variant: 'success' });
      } else {
        console.log('User Creation Failed');
      }
      reset();
    } catch (error: any) {
      if (status && status.status === 500) {
        enqueueSnackbar('User Creation Failed', { variant: 'error' });
      }
      setRes(error.response?.data?.message || 'Error creating user');
      enqueueSnackbar(res, { variant: 'error' });
    }
    
   
  }

 

  return (
    <Box m="20px" >
    <Header title="CREATE USER" subtitle="Create a New User Profile"/>

        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box 
            display="inline-grid" 
            gap="30px" 
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": {
                gridColumn: { gridColumn : "span 4" },
                marginLeft: "30px",
                width: "550px",
                height: "80px"
              }
            }}
          >
            <TextField 
              // fullWidth
              variant="filled"
              autoComplete="off"
              type="text"
              label="First Name"
              id="firstName"
              {...register('firstName')}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              sx={{
                gridColumn: "span 1"
              }}
            />
            <TextField 
              // fullWidth
              variant="filled"
              autoComplete="off"
              type="text"
              label="Last Name"
              id="lastName"
              {...register('lastName')}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              sx={{
                gridColumn: "span 1"
              }}
            />
            
            <TextField 
              // fullWidth
              variant="filled"
              autoComplete="off"
              type="text"
              label="email"
              id="email"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                gridColumn: "span 4"
              }}
            />
            <TextField 
              fullWidth
              variant="filled"
              autoComplete="off"
              type="text"
              label="Contact Number"
              id="phoneNumber"
              {...register('phoneNumber')}
              error={!!errors.phoneNumber }
              helperText={errors.phoneNumber?.message}
              sx={{
                gridColumn: "span 4"
              }}
            />

            </Box>
            
            <Box 
            display="inline-grid" 
            gap="30px" 
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": {
                gridColumn: { gridColumn : "span 4" },
                justifyContent: "center",
                marginLeft: "50px",
                width: "550px",
                height: "80px"
              }
            }}
          >
            <TextField 
              // fullWidth
              variant="filled"
              autoComplete="off"
              type="text"
              label="Address 1"
              id="address_1"
              {...register('address_1')}
              error={!!errors.address_1 }
              helperText={errors.address_1?.message}
              sx={{
                gridColumn: "span 4"
              }}
            />
            <TextField 
              // fullWidth
              variant="filled"
              autoComplete="off"
              type="text"
              label="Address 2"
              id="address_2"
              {...register('address_2')}
              error={!!errors.address_2 }
              helperText={errors.address_2 ?.message}
              sx={{
                gridColumn: "span 4"
              }}
            />
             {/* <TextField 
              // fullWidth
              variant="filled"
              type="text"
              label="Role"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.role}
              name="role"
              error={!!touched.role && !!errors.role}
              helperText={touched.role && errors.role}
              sx={{
                gridColumn: "span 2"
              }}
              /> */}
             
             <FormControl
              // sx={{
              //   marginRight: 6,
              //   marginLeft: 4
              // }}
              >
                <InputLabel id="roleLabel">Role</InputLabel>
                <Select
                  variant="filled"
                  labelId="roleLabel"
                  label="Role"
                  id="role"
                  {...register('role')} // Provide a default value
                  error={!!errors.role}
                >
                  <MenuItem value="" disabled>
                    Select Role
                  </MenuItem>
                  {RoleOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText error>{errors.role?.message}</FormHelperText>
              </FormControl>

            <TextField 
              // fullWidth
              variant="filled"
              autoComplete="off"
              type="text"
              label="Password"
              id="password"
              {...register('password')}
              error={!!errors.password }
              helperText={errors.password?.message}
              sx={{
                gridColumn: "span 4"
              }}
            />
            
          </Box>
          <Box display="flex" justifyContent="center" mt="20px" ml="-35px">
            <Button type="submit" color="secondary" variant="contained" size="large"
            >
              Create New User
            </Button>
          </Box>
        </form>

    </Box>
  )
}

export default Form;