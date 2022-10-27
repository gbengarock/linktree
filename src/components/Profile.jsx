import React, { useState } from 'react';
import Avatar from '../assets/me.jpg'
import avatarIcon from '../assets/Icon.png'
import github from '../assets/github.png'
import slack from '../assets/slack.png'
import shareWeb from '../assets/shareWeb.png'
import shareMobile from '../assets/shareMobile.png'

function Profile() {
  const [display, setDisplay] = useState('none')

  const handleShareLink = () => {
    if ( display === 'none' ) {
      setDisplay( 'block' )
      } else {
        setDisplay( 'none' )
      }
    }

  return (
    <div className='w-full h-full items-center'>
      <div className='w-full sm:w-[80%] mx-auto items-center mt-10 sm:my-24'>
        <div className='flex items-end absolute right-10 top-3 sm:right-[500px]'>
          <img onClick={handleShareLink} src={shareWeb} alt='/' className='hidden sm:flex' />
          <img onClick={handleShareLink} src={shareMobile} alt='/' className='flex sm:hidden' />
          <div className='w-[100px] bg-black text-white p-2 rounded-3xl absolute right-10' style={{display:display}}>Share Link</div>
        </div>

        {/* avatar section */}

        <div className='w-full flex-col items-center py-2'>
          <div className='w-[400px] items-center justify-center mx-auto'>
            <div style={{backgroundImage: `url(${Avatar})`, width:'100px', height:'100px', borderRadius:'50%'}} className='group bg-cover bg-no-repeat justify-center items-center py-10 w-[100px] mx-auto my-2'>
              {/* overlay */}
              <div className='opacity-0 group-hover:opacity-100 w-[100px] h-[100px] relative top-[-40px] rounded-full hover:bg-black/50'>
                  <img src={avatarIcon} alt='/' className= 'mx-auto relative top-16' />
              </div>
            </div>
            
            <h1 id='twitter' className='text-center font-bold text-2xl sm:text-4xl'>Temidayo Olugbenga</h1>
            <h1 id='slack' className='hidden text-center font-bold text-2xl sm:text-4xl'>Capo</h1>
          
          </div>
        </div>
          


        {/* links section */}

        <div className='w-full flex-col py-2'>
          <p id='twitter' className='w-[80%] my-6 mx-auto flex items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-2 font-semibold'><a className='p-2' href='https://twitter.com/temidayo_capo'>Twitter Link</a></p>
          <p id='slack' className='hidden w-[80%] my-6 mx-auto items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-2 font-semibold'><a className='p-2' href='/'>Slack Link</a></p>
          <p id='btn_zuri' className='w-[80%] my-6 mx-auto flex items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-2 font-semibold'><a className='p-2' href='https://training.zuri.team/'>Zuri Team</a></p>
          <p id='books' className='w-[80%] my-6 mx-auto flex items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-2 font-semibold'><a className='p-2' href='http://books.zuri.team'>Zuri Books</a></p>
          <p id='book_python' className='w-[80%] my-6 mx-auto flex items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-2 font-semibold'><a className='p-2' href='https://books.zuri.team/python-for-beginners?ref_id=capo'>Python Books</a></p>
          <p id='pitch' className='w-[80%] my-6 mx-auto flex items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-2 font-semibold'><a className='p-2' href='https://background.zuri.team'>Background Check for Coders</a></p>
          <p id='book_design' className='w-[80%] my-6 mx-auto flex items-center justify-center bg-[#EAECF0] hover:bg-[#D0D5DD] rounded-lg p-2 font-semibold'><a className='p-2' href='https://books.zuri.team/design-rules'>Design Books</a></p>
        </div>

        {/* socials */}

        <div className='flex items-center justify-center mb-10 p-4'>
          <p><a href='https://app.slack.com/client/T042F7V19Q8/D047W3C6M2T/rimeto_profile/U048AKKMEFL'><img src={slack} alt='/' className='mx-3' /></a></p>
          <p><a href='https://github.com/gbengarock'><img src={github} alt='/' className='mx-3' /></a></p>
        </div>

      
      </div>
    </div>
  );
}

export default Profile;
