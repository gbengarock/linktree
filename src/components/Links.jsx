import Button from './Button'
import React from 'react'

const Links = () => {
  return (
    <div className='w-[80%] mx-auto flex-col py-2 mt-[-30px]'>
                
        <Button id='btn__zuri' url='https://training.zuri.team/' description='Zuri Team' />
        <Button id='books' url='http://books.zuri.team' description='Zuri Books' />
        <Button id='book__python' url='https://books.zuri.team/python-for-beginners?ref_id=Capo' description='Python Books' />
        <Button id='pitch' url='https://background.zuri.team' description='Background Check for Coders' />
        <Button id='book__design' url='https://books.zuri.team/design-rules' description='Design Books' />

    </div>
  )
}

export default Links
