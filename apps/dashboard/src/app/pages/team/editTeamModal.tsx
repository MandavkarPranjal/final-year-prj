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
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { SnackbarProvider, useSnackbar } from 'notistack';
import { useSnackbar } from 'notistack';

type Team = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  address_1: string;
  address_2: string;
  role: string;
  password: string;
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email('invalid email').required('required'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .length(10, 'Phone number must be 10 digits')
    .required('required'),
  address_1: yup.string().required('required'),
  address_2: yup.string().required('required'),
  role: yup.string().required('required'),
  password: yup
    .string()
    .min(6, 'Must contain atleast 6 characters')
    .max(20, 'Should be under 20 characters')
    .required('Password is required'),
});

interface Props {
  open: boolean;
  onClose: () => void;
  appId: string;
}

const EditTeamModal: React.FC<Props> = ({ open, onClose, appId }) => {

  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Team>({
    resolver: yupResolver(userSchema),
  });

  const RoleOptions = ['Admin', 'Doctor', 'Receptionist'];

  // useEffect(() => {
  //   fetchdata();
  // })

  // const fetchdata = async () => {
  //   try {
  //     const response = await axios.get(`http://localhost:3000/auth/get/${appId}`)
  //     const appData = await response.data;

  //     // console.log('fetched team data', appData);

  //     setValue('firstName', appData.firstName)
  //     setValue('lastName', appData.lastName)
  //     setValue('address_1', appData.address_1)
  //      setValue('address_2', appData.address_2)
  //     setValue('role', appData.role)
  //     setValue('email', appData.email)
 
  //     setValue('password', appData.password)
  //     setValue('phoneNumber', appData.phoneNumber)
      
  //   }catch (error){
  //     console.log('Error fetching team data')
  //   }
  // }

  // const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  // const handleFormSubmit: SubmitHandler<Team> = async (values) => {
  //   // handleAddAppointment(formData);
  //   // console.log('Form Data', values);
  //   console.log(appId);

  //   try {
  //     const response = axios.patch(
  //       `http://localhost:3000/auth/teamUpdate/${appId}`,
  //       values
  //     );
  //     // console.log(appId)
  //     if ((await response).status === 200) {
  //       enqueueSnackbar('Team Edited Successfully', { variant: 'success' });

  //       onClose();
  //       // navigate(`/appointment`);
  //     }
  //   } catch (error) {
  //     console.error('Error adding appointment', error);
  //   }
  // };

  useEffect(() => {
    fetchdata();
  }, [appId]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/auth/get/${appId}`);
      const appData = response.data;

      Object.keys(appData).forEach((key) => {
        setValue(key as keyof Team, appData[key]);
      });
    } catch (error) {
      console.log('Error fetching team data', error);
    }
  };

  
  const handleFormSubmit: SubmitHandler<Team> = async (values) => {
    try {
      const response = await axios.patch(`http://localhost:3000/auth/teamUpdate/${appId}`, values);

      if (response.status === 200) {
        enqueueSnackbar('Team Edited Successfully', { variant: 'success' });
        onClose();
      }
    } catch (error) {
      console.error('Error editing Team', error);
      enqueueSnackbar('Failed to edit Team', { variant: 'error' });
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
          }}
        >
          {/* <Stack spacing={3}
        sx={{
        
          }}
        > */}
          <TextField
            // fullWidth
            variant="filled"
            type="text"
            label="First Name"
            defaultValue={""}
            id="firstName"
            {...register('firstName')}
            error={!!errors.firstName}
            helperText={errors.firstName?.message}
            //   sx={{
            //     gridColumn: "span 1"
            //   }}
          />
          <TextField
            // fullWidth
            variant="filled"
            type="text"
            label="Last Name"
            defaultValue={""}
            id="lastName"
            {...register('lastName')}
            error={!!errors.lastName}
            helperText={errors.lastName?.message}
            //   sx={{
            //     gridColumn: "span 1"
            //   }}
          />
          <TextField
            // fullWidth
            variant="filled"
            type="text"
            label="email"
            id="email"
            defaultValue={""}
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            //   sx={{
            //     gridColumn: "span 4"
            //   }}
          />
          <TextField
            //   fullWidth
            variant="filled"
            type="text"
            label="Contact Number"
            defaultValue={""}
            id="phoneNumber"
            {...register('phoneNumber')}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            //   sx={{
            //     gridColumn: "span 4"
            //   }}
          />

          <TextField
            // fullWidth
            variant="filled"
            type="text"
            label="Address 1"
            defaultValue={""}
            id="address_1"
            {...register('address_1')}
            error={!!errors.address_1}
            helperText={errors.address_1?.message}
            //   sx={{
            //     gridColumn: "span 4"
            //   }}
          />
          <TextField
            // fullWidth
            variant="filled"
            type="text"
            label="Address 2"
            defaultValue={""}
            id="address_2"
            {...register('address_2')}
            error={!!errors.address_2}
            helperText={errors.address_2?.message}
            //   sx={{
            //     gridColumn: "span 4"
            //   }}
          />

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
              defaultValue={""}
              id="role"
              {...register('role')} // Provide a default value
              error={!!errors.role}
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              {RoleOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            <FormHelperText error>{errors.role?.message}</FormHelperText>
          </FormControl>

          <TextField
            // fullWidth
            variant="filled"
            type="text"
            label="Password"
            defaultValue={""}
            id="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            //   sx={{
            //     gridColumn: "span 4"
            //   }}
          />

          <Box display="flex" justifyContent="center" mt="20px" ml="-35px">
            <Button variant="contained" type="submit">
              Edit Team
            </Button>
            {/* </Stack> */}
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

export default EditTeamModal;
