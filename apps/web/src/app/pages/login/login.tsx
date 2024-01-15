import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from "react";
import { ILogin } from '../../models/ILogin';

interface Istate{
  user: ILogin;
}

const Login: React.FC = () => {
  const [state, setState] = useState<Istate>({
    user:{
      email:"",
      password:"",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      user:{
        ...state.user,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.user);
    alert("Login Successful");  
  }
  return (


    <div className="container mt-4">
      <div className="w-20">
        <form className="card p-4 m-10 w-50  " onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name = "email"
              value = {state.user.email}
              onChange={handleChange}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name = "password"
              value = {state.user.password}
              onChange={handleChange}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;