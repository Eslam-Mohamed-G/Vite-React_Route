import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { Outlet, createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router-dom';

import Layout from './Components/layout/Layout';
import Home from './Components/2_home/Home';
import About from './Components/3_about/About';
import Contact from './Components/5_contact/Contact';
import Portfolio from './Components/4_portfolio/Portfolio';

let routs = createBrowserRouter([
  {path:'', element : <Layout/>, children:[
    {index:true, element : <Home/>},
    {path:'about', element:<About/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},
  ]}
])
function App() {
  return (
    <RouterProvider router={routs}>
      <Outlet/>
    </RouterProvider> 
  );
}

export default App
