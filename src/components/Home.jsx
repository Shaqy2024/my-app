import React from 'react'
import { Link } from 'react-router-dom';
import { LuSunMoon } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";




const Home = () => {
const Togle =()=>{
 document.documentElement.classList.toggle('dark')
}

  return (


    <div className='bg-white text-black dark:bg-white'>
      




      <div className=' dark:bg-white dark-mood:text-black justify-center items-center center cursor-poiter px-14 pb-40 bg-[#050a22]'>
        
  <div className='center items-center'>
        
          <h1 className="text-white text-6xl font-extrabold pb-5   pt-32 ml-[12%] dark:text-black"> Rapidly build modern websites<br/> without ever leaving your HTML. </h1>
          <p className='text-slate-400 text-xl tracking-widest ml-[17%]	leading-8 pb-5 dark:text-black 	'>A utility-first CSS framework packed with classes like <span className='text-blue-400 dark:text-blue-700 dark:font-bold'>flex, pt-4, text-center</span>
            and <br/> <span className='text-blue-400 dark:text-blue-700 dark:font-bold'>rotate-90</span>that can be composed to build any design, directly in your markup.</p>
  <button className='text-white font-bold bg-blue-400 px-14 rounded py-2 ml-[32%]'>Get start</button>
  <input className='text-white border-none outline-none ml-5 px-5 py-2 mb-10 bg-slate-700 rounded w-[25%]' type="text" placeholder='Quick search...' />
  </div>


</div>


</div>







 
  )
}

export default Home