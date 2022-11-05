import React from 'react'

const ContactForm = () => {
    
   const name = 'Capo'

  return (
    <div className='w-full sm:py-24'>
        <div className='sm:w-[40%] mx-auto my-auto p-8'>

        <h1 className='text-4xl font-semibold text-gray-900'>Contact Me</h1>
        <h1 className='text-lg sm:text-xl font-normal text-gray-600 my-1'>Hi there, contact me to ask me about anything you have in mind.</h1>
                
        <form method='POST' action='https://getform.io/f/f3fc1e76-d936-409a-be62-21ed74ddfc74' className='flex flex-col max-w-[600px] w-full my-4'>
            <div className='sm:flex my-2'>
                <div className='flex flex-col sm:mr-10'>
                    <label className='text-xs text-gray-700 sm:text-sm font-medium my-2'>First name</label>
                    <input name='first_name' id='first_name' type='text' placeholder='Enter your first name' className='py-2 px-3 rounded-lg items-center border focus:outline-[#B4CAFF] border-gray-300 shadow-sm gap-2 sm:w-[340px] sm:h-[44px] text-sm' required />
                </div>
                <div className='flex flex-col'>
                    <label className='text-xs text-gray-700 sm:text-sm font-medium my-2'>Last name</label>
                    <input  name='last_name' id='last_name' type='text' placeholder='Enter your last name' className='py-2 px-3 rounded-lg items-center border focus:outline-[#B4CAFF] border-gray-300 shadow-sm gap-2 sm:w-[340px] sm:h-[44px] text-sm' required/>
                </div>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-xs text-gray-700 sm:text-base font-medium my-2'>Email</label>
                <input name='email' id='email' type='email' placeholder='yourname@email.com' className='p-2 border focus:outline-[#B4CAFF] rounded-lg border-gray-300 shadow-sm gap-2 py-2 px-3 items-center text-sm sm:w-[720px] sm:h-[44px]' required/>
            </div>
            <div className='flex flex-col my-2'>
                <label className='text-xs text-gray-700 sm:text-base font-medium my-2'>Message</label>
                <textarea name='message' id='message'className='border focus:outline-[#B4CAFF] rounded-lg border-gray-300 shadow-sm gap-2 py-2 px-3 items-center text-sm sm:w-[720px]' rows='6' placeholder="Send me a message and I'll reply you as soon as possible..." required/>
            </div>

            <p className='text-gray-600 my-4'><input type='checkbox' className='mr-3 cursor-pointer' />You agree to providing your data to {name} who may contact you.</p>     
            
            <button id='btn__submit' className='justify-center text-white text-center border-none shadow-sm rounded-lg px-5 py-3 mx-auto w-full sm:w-[720px] h-[48px] flex items-center bg-[#1570EF] hover:bg-[#175CD3] focus:drop-shadow-sm disabled:bg-[#B2DDFF]'>Send message</button>
        </form>

        </div>
    </div>
  )
}

export default ContactForm