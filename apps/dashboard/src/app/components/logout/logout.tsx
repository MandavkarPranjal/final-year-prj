
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LogOutProps {}

export function LogOut({onLogout}:{onLogout: () => void}) {

    const navigate = useNavigate(); 

  const logout=async()=>{
    // const response=await axios.post(`http:locohost:3000/auth/logout`,
    // {withCredentials:true}
    // )
    localStorage.clear();
  }
  useEffect(()=>{
    logout().then(onLogout);
    console.log('logout successfully');
    // navigate('/login');
    // localStorage.removeItem('User');
  },[])
  return <></>
}

export default LogOut;