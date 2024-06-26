import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuSunMoon } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";



const Navbar = () => {
const togaleThem = ()=>{
 
 
  document.documentElement.classList.toggle("dark")
};
console.log("helloo")
  return (
    <nav className="bg-[#050a22] dark:bg-gray-900 text-white p-4">
      <div className=" ml-10  flex gap- items-center justify-between mr-10">
        <h1 className='flex display-row text-2xl font-bold gap-2'><SiTailwindcss className='mt-[3px] ml-2 text-blue-400' size={30} />
Tailwindcss</h1>
        <div className="flex display-row  gap-10 ">
          <Link to="/" className="hover:text-gray-400 font-bold" >Home</Link>
          <Link to="/about" className="hover:text-gray-400 mr-  font-bold">Docs</Link>
          <Link to="/services" className="hover:text-gray-400 font-bold">Components</Link>
          <Link to="/contact" className="hover:text-gray-400 font-bold">Blog</Link>
          <div className='items-center mt-1 flex gap-5  display-row'>
            <LuSunMoon onClick={() => togaleThem()} className='cursor-pointer'  size={20} />
            <FaGithub className='cursor-pointer' size={20} />
          </div>
         

        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
