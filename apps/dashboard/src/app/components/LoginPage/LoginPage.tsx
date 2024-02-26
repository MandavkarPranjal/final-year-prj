import { User } from "../../context/user-data-transfer";
import './loginPage.css';
import React, { useContext } from "react";
import  Button  from "@mui/material/Button";
import { TextField, Typography } from "@mui/material";
import axios from "axios";

import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { UserContext } from "../../context/user-context";

export interface LoginPageProps {
    onLogin: (user: User) => void;
}

export function LoginPage({ onLogin} : LoginPageProps) {
    const usercontext = useContext(UserContext);
    console.log('user context in Login', usercontext);

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Must be a valid email')
            .required('Email is required'),
        
        password: yup.string().required('Password is required')
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(validationSchema)});

    const handleOnSubmit = async (formdata: {email: string, password: string}) => {
        try {
            const {email, password} = formdata;
            const res = await axios.post<User>(
                'http://localhost:3000/auth/login',
                {email, password},
                // {
                //     withCredentials: true
                // }
            );
            const user = res.data;
            onLogin(user);
            console.log('res', res);
        } catch (error) {
            console.log('error', error);
        }
    };
    
    return (
        //    <div className='form-container'>
        // <form onSubmit={handleSubmit(handleOnSubmit)}>
    //     {/* <div className={styles['logo']}>
    //       <img src={FL} alt="font lab logo" width="150px" height="150px" />
    //     </div> */}
    //     <div className='email'>
    //       <TextField
    //         fullWidth
    //         type="email"
    //         {...register('email')}
    //         label="Email"
    //         error={!!errors.email}
    //         helperText={errors.email?.message}
    //         className="form-control"
    //         placeholder="Enter Your Email Id"
    //       />
    //     </div>

    //     <div className="password">
    //         <TextField
    //             type="password"
    //             {...register('password')}
    //             label="Password"
    //             error={!!errors.password}
    //             helperText={errors.password?.message}
    //             className="form-control"
    //             placeholder="Enter Your Password"
    //         />
    //     </div>
        
    //     <div className='submit_btn'>
    //       <Button type="submit" variant="contained" className="btn" sx={{backgroundColor: ""}}>
    //         Log In
    //       </Button>
    //     </div>
    //   </form>
    //   </div>
      
    <div >
      <div className="signup-body">
      <form className="Signin-Form" onSubmit={handleSubmit(handleOnSubmit)}>
        <div className="login-head">
          <Typography variant="h1">Login</Typography>
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
    
    )
}