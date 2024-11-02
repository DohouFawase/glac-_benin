import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navigation/navbar'
import Footer from '../components/navigation/footer'

export default function Layout() {
  return (
    <div>
        <div className="">
        <Navbar />
        <Outlet />
        <Footer/>
        </div>
    </div>
  )
}
