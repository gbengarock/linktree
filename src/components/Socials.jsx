import React from 'react'
import github from '../assets/github.png'
import slack from '../assets/slack.png'


const Socials = () => {
  return (
    <div className='flex items-center justify-center mb-10 p-4'>
        <p><a href='https://app.slack.com/client/T042F7V19Q8/D047W3C6M2T/rimeto_profile/U048AKKMEFL'><img src={slack} alt='/' className='mx-3' /></a></p>
        <p><a href='https://github.com/gbengarock'><img src={github} alt='/' className='mx-3' /></a></p>
    </div>
  )
}

export default Socials