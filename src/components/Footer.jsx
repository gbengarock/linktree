import React from 'react'
import ingressive from '../assets/logo.png'
import zuri from '../assets/Zuri.png'


const Footer = () => {
  return (
    <div className='w-full'>
        <div className='sm:flex justify-between border-t-2 w-[80%] sm:w-[65%] mx-auto py-5 sm:pt-10 pb-10'>
          <img src={zuri} alt='/' className='my-3 w-[140px]' />
          <h3 className='text-gray-500 my-3'>HNG Internship 9 Frontend Task</h3>
          <img src={ingressive} alt='/' className='w-[100px] sm:w-[140px]' />
        </div>
    </div>
  )
}

export default Footer