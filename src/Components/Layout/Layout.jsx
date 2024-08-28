import React, { useContext, useEffect, useState } from 'react'
import style from './Layout.module.css'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from '../Context/UserContext.jsx'

export default function Layout() {

/* 
let {setUserData} = useContext(UserContext)
let navigate = useNavigate() */







  return <>
    <Navbar />
    <div className="container py-24">

      <Outlet></Outlet>

    </div>

    <Footer />
  </>
}
