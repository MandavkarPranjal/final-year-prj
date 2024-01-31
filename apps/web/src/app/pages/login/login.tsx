

// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState } from "react";
// import { ILogin } from '../../models/ILogin';
// import './login.css';


// interface IState {
//   user: ILogin;
// }

// const Login: React.FC = () => {
//   const [state, setState] = useState<IState>({
//     user: {
//       email: "",
//       password: "",
//     },
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setState({
//       user: {
//         ...state.user,
//         [e.target.name]: e.target.value,
//       },
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(state.user);
//     alert("Login Successful");

//     // const response = await axios.post('http://localhost:3000/', state.user){
//     //   email: state.user.email,
//     //   password: state.user.password,
//     // };
//   };

//   return (
//     <div className="m-container">
//       <div className="login-card">
//         <form className="w-100" onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">
//               Email address
//             </label>
//             <input 
//               type="email"
//               name="email"
//               value={state.user.email}
//               onChange={handleChange}
//               className="form-control1"
//               id="exampleInputEmail1"
//               aria-describedby="emailHelp"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               name="password"
//               value={state.user.password}
//               onChange={handleChange}
//               className="form-control2"
//               id="exampleInputPassword1"
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import  Typography  from '@mui/material/Typography';
import React from 'react';
import './Login.css';
// import logo from '/public/images/logo.jpg';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm} from 'react-hook-form';

import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
type Login = {
  email: string;
  password: string;
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

  const onSubmit: SubmitHandler<Login> = async (values) => {
    try {
      // No need to validate again here as it's already done by react-hook-form and yupResolver
      // If validation succeeds, navigate to '/menu'
    } catch (error) {
      // Specify the type of the error as Yup.ValidationError
      if (error instanceof Yup.ValidationError) {
        // If validation fails, handle the error (you can log it or update state to show error messages)
        console.error(error.errors);
      }
    }
    console.log(values);
  };

  return (
    <div>
      <div>
        {/* <img src={logo} alt="Logo" className="logo" /> */}
      </div>
      <form className="Signin-Form" onSubmit={handleSubmit(onSubmit)}>
        <div className="login-head">
          <Typography variant="h3">Sign in</Typography>
        </div>
        <br />
        <div className="sub-head">
          {/* <p>Please login to continue to your account.</p> */}
        </div>
        <div className="button-row">
          <TextField
            className="email"
            label="Email"
            variant="outlined"
            type="email"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            className="password"
            label="Password"
            variant="outlined"
            type="password"
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          <Button
            className="signinButton"
            variant="contained"
            type="submit"
          >
            Sign in
          </Button>
        </div>

        
      </form>
    </div>
  );
};

export default Login;
