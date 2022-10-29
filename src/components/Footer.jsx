import React from 'react'
import ingressive from '../assets/logo.png'
import zuri from '../assets/Zuri.png'


const Footer = () => {
  return (
    <div className='w-full'>
        <div className='sm:flex justify-between border-t-2 w-[90%] sm:w-[60%] mx-auto py-5 sm:pt-10 pb-10'>
          <img src={zuri} alt='/' className='my-3 w-[138px] sm:[185px] h-[18px] sm-[24px]' />
          <h3 className='text-gray-500 text-sm sm:text-base my-3'>HNG Internship 9 Frontend Task</h3>
          <img src={ingressive} alt='/' className='w-[99px] h-[24px] sm:w-[132px] sm:h-[32px]' />
        </div>
    </div>
  )
}

export default Footer