import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export interface LayoutProps { }

export function Layout(props: LayoutProps) {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null) {
      navigate("/login");
      console.log('User not logged in')
    } else {
      return
    }
  }, []);

  return (
    <div
      // className={}
      style={{ marginLeft: '200px' }}
    >
      {/* <Topbar/>
          <Sidebar/> */}
      <div
        // className={styles['outlet']}
        style={{ width: '85%', margin: '120px', marginLeft: '5%' }}
      >
        <Outlet />
      </div>
    </div>
  )
}
