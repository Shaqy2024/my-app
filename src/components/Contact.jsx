import React from 'react'

const Contact = () => {
  return (
    <div>
   
<div className='bg-white text-black w-full h-full p-5 rounded-md mt-10'>
        <h1 className='text-black text-3xl ml-24 mb-5 font-bold'>Logedin</h1>
<input className='w-80 p-2 text-white bg-black font-bold rounded-full outline-none' type='text' placeholder='UserName'/>
<br/>

<input className=' mt-10 w-80 p-2 text-white bg-black font-bold rounded-full outline-none' type='password' placeholder='Password'/>
       <br/>
        <button className='bg-black text-white font-bold px-5 py-1 rounded-md mt-5  ml-24'>
          Submit
        </button>
</div>


    </div>
  )
}

export default Contact