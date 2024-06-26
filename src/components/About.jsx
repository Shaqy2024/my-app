import React from 'react'
import { IoBookSharp } from "react-icons/io5";

const About = () => {
  return (
    <div className= ' bg-[#050a22] dark:bg-white w-full pb-24 dark:text-black '>
<div className='ml-10 w-full flex display-row'>
  <div className=' flex- display-row'>


  <div>
    
  </div>
        <input className= 'dark:text-black black mt-10 bg-[#38384b71] px-10 border-none outline-none rounded text-white py-2' type="text" placeholder='Quick search'/>
       <div className='flex display-row gap-8 mt-8'>
            <IoBookSharp size={25} className='text-white pt-1 dark:text-black' />
            <h1 className='text-[#54aae4] font-semibold dark:text-black '>Documentation</h1>

       </div>
          
        </div>

  

<div className='mt-8 ml-20'>
  
          <p className='text-[#54aae4] text-[15px] tracking-wide	 font-bold'>Installation</p>
          <h1 className='text-white text-4xl font-extrabold mt-5 dark:text-black'>Get started with Tailwind CSS</h1>
          <p className='text-[#999999] font-[500] tracking-wide text-[18px] pt-5 pb-3 dark:text-black'>Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates<br /> for class names, generating the corresponding styles and then writing them to a static CSS file</p>
          <p className='text-[#999999] font-[500] tracking-wide text-[18px] pt-5 pb-3 dark:text-black'>It's fast, flexible, and reliable — with zero-runtime.

            Installation</p>

          <h1 className='text-white text-2xl font-bold pt-10 pb-8 dark:text-black'>Installation</h1>
</div>
       

      </div>
      <div className=''>
        <ul className='flex display-row gap-10 ml-[28%] text-[white] tracking-wide font-bold dark:text-black'>
          <li className='text-[#54aae4] border-white'>Tailwind CLI </li>
          <li>Using PostCSS</li>
          <li>FrameWorks Guides</li>

          <li>Play CDN</li>
        </ul>

        <p className='ml-[28%] text-[#999999] font-[500] tracking-wide text-[18px] pt-5 pb-3 dark:text-black'>The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind<br /> CLI tool. The CLI is also available as a <span className='font-bold text-white underline-offset-2-black dark:text-black'>standalone executable</span> if you want to use it without installing Node.js.</p>
      </div>
    </div>


    
  )
}

export default About