// import React from 'react';
// import {Routes, Route, BrowserRouter} from "react-router-dom";
// import Home from "./pages/Home";
// import Products from "./pages/Products";
// import Analytics from "./pages/Analytics";
// import Settings from "./pages/Settings";

// export default function Dashboard() {
//   return (
//    <>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" exact element={<Home />}></Route>
//         <Route path="/products" exact element={<Products />}></Route>
//         <Route path="/analytics" exact element={<Analytics />}></Route>
//         <Route path="/settings" exact element={<Settings />}></Route>
//       </Routes>
//     </BrowserRouter>
//    </>
//   )
// }


import React from 'react';
import { Routes, Route, BrowserRouter, Link} from 'react-router-dom';
import dashHome from './pages/dashHome';
import Products from './pages/Products';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Home from '@mui/icons-material/Home';

const Dashboard: React.FC = () => {
  return (
    <>
    <h1>this is Dashboard</h1>
    
    
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/home">Home</Link></li>
          </ul>
        
    </>
  );
};

export default Dashboard;
