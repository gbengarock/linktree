import React from 'react'

const Button = (props) => {
  return (
    <div className='w-full my-6 mx-auto flex items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-2 font-semibold'>
        <a className='p-2' href={props.url}>{props.description}</a>
    </div>
  )
}

export default Button