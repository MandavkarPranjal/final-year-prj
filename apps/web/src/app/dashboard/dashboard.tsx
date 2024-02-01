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
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

const Dashboard: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Dashboard;
