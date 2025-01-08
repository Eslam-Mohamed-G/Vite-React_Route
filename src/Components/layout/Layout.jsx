import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBar from '../1_header/Navbar';
import Footer from '../6_footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout() {
    return (
        <>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout
