import Button from './Button'
import React from 'react'

const Links = () => {
  return (
    <div className='w-[80%] mx-auto flex-col py-2 mt-[-30px]'>
                
        <Button id='btn__zuri' url='https://training.zuri.team/' description='Zuri Team' title='' />
        <Button id='books' url='http://books.zuri.team' description='Zuri Books' title='This is where you find books about design and coding' />
        <Button id='book__python' url='https://books.zuri.team/python-for-beginners?ref_id=Capo' description='Python Books' title='Learn python in all its awesomeness at a pocket friendly price' />
        <Button id='pitch' url='https://backgroundcheck.zuri.team' description='Background Check for Coders' title='Everything you need to know about that developer is right here' />
        <Button id='book__design' url='https://books.zuri.team/design-rules' description='Design Books' title='Design in the 21st century' />

    </div>
  )
}

export default Links
