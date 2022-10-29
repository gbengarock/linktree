import React from 'react'

const Button = (props) => {
  return (
    <div className='items-center w-full gap-8 mx-auto'>
      
        <a className='block w-[343px] sm:w-[1152px] h-[68px] sm:h-[76px] mx-auto my-6 text-center items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg px-8 py-6 text-sm sm:text-lg font-medium' href={props.url} title={props.title} target='_blank' rel="noopener noreferrer">{props.description}</a>
      
        
    </div>
  )
}

export default Button