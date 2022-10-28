import React from 'react'

const Button = (props) => {
  return (
    <div className='w-full sm:w-[80%] mx-auto'>
        <a className='block w-full my-6 text-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-3 font-semibold' href={props.url} title={props.title}>{props.description}</a>
    </div>
  )
}

export default Button