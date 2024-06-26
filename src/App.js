import React from 'react'
import Profile from './components/Profile'
import { Toaster } from 'react-hot-toast';
import { GlobalContext } from './context/GlobalContext';
import { useContext } from 'react';
import Navbar from './components/Navbar';


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';


const App = () => {
  const { data, myData } = useContext(GlobalContext)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home /></>,

    },
    {
      path: "/about",
      element: <><Navbar /> <About /></>
    },
    {
      path: "/services",
      element: <><Navbar /> <Services /> <h1 className='text-white'></h1></>
    },
    {
      path: "/contact",
      element: <>  <Navbar /><Contact /></>
    }
  ])


  return (
    <div>

      <RouterProvider router={router} />
    
    
    </div>
  )
}

export default App