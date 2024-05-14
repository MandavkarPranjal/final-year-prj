
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface LogOutProps { }

export function LogOut({ onLogout }: { onLogout: () => void }) {

  const logout = async () => {
    localStorage.clear();
  }
  useEffect(() => {
    logout().then(onLogout);
    console.log('logout successfully');
  }, [])
  return <></>
}

export default LogOut;
