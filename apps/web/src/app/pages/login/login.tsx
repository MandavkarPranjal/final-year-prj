import Typography from '@mui/material/Typography';
import React from 'react';
import './Login.css';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import signin from '../../../../public/images/signin.png';

type Login = {
  email: string;
  password: string;
};

const verifyLogin = async (email: string, password: string, navigate: any) => {
  const response = axios.post('http://192.168.183.30:3000/api/auth/signin', {
    email: email,
    password: password,
  });
  if((await response).status === 201){
    console.log("Login Successful");
    navigate('/', { replace: true });
  }
  
  // .then(function (response) {
  //   console.log(response);
  //   if (response.status === 200) {
  //     console.log("Login Successful");
  //     navigate('/app/dashboard', { replace: true });

  //   }
  // })
};

const Login = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<Login>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<Login> = async (values : any) => {
    console.log(values)
    try {
      await verifyLogin(values.email, values.password, navigate);
    } catch (error) {
      // Specify the type of the error as Yup.ValidationError
      if (error instanceof Yup.ValidationError) {
        // If validation fails, handle the error (you can log it or update state to show error messages)
        console.error(error.errors);
      }
    }
  };

  return (
    <div >
      <div className="signup-body">
      <form className="Signin-Form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-head">
          <Typography variant="h3">Sign in</Typography>
        </div>
        <br />
        <div className="sub-head">
          
        </div>
        <div className="button-row">
          <TextField
          sx={{
            width: 370,
          }}
            className="email"
            label="Email"
            variant="outlined"
            type="email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
           sx={{
            width: 370,
          }}
            className="password"
            label="Password"
            variant="outlined"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button className="signinButton" variant="contained" type="submit">
            Sign in
          </Button>
        </div>
      </form>

      </div>
    </div>
  );
};

export default Login;
