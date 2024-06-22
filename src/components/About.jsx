import React from 'react'

const About = () => {
  return (
    <div>

      <div className='bg-white w-full p-5 rounded-md mt-10'>
       
       <img className='rounded-md w-72'src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgs675fiGV3TPuxAKQvRXoc3zpTAv_7uATU9AqtYuRHzY05ApsTmKocBAg_YRWOmIlxqc&usqp=CAU'/>
     <h1 className='text-black text-3xl mt-4'>This is about</h1>

     <p className='text-black mt-4'>Lorem ipsum dolor sit, amet consectetur <br/>adipisicing elit. Harum, iste.</p>
     <button className='bg-black mt-4 text-white px-5 rounded-sm font-bold hover:bg-slate-900'>
      Add
     
     </button>
     <h1 className='text-black text-2xl ml-40 font-bold'>About</h1>
      </div>



    </div>


    
  )
}

export default About