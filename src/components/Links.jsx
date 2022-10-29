import React from 'react'
import './Links.css'

const Links = () => {
  const links = [
    {
      id: "twitter",
      name: "Twitter Link",
      link: "https://twitter.com/temidayo_capo",
      title: ""
    },
    {
      id: "btn__zuri",
      name: "Zuri Team",
      link: "https://training.zuri.team/",
      title: ""
    },
    {
      id: "books",
      name: "Zuri Books",
      link: "https://books.zuri.team/",
      title: "This is where you find books about design and coding"
    },
    {
      id: "book__python",
      name: "Python Books",
      link: "https://books.zuri.team/python-for-beginners?ref_id=Capo",
      title: "Learn python in all its awesomeness at a pocket friendly price"
    },
    {
      id: "pitch",
      name: "Background Check for Coders",
      link: "https://backgroundcheck.zuri.team/",
      title: "Everything you need to know about that developer is right here"
    },
    {
      id: "book__design",
      name: "Design Books",
      link: "https://books.zuri.team/design-rules",
      title: "Design in the 21st century"
    },
  ];
  return (
    <div className='mx-auto flex-col items-center justify-center'>
      <div className='w-mx-auto items-center '>
        
        <div className='items-center w-full gap-8 mx-auto'>
        {links.map((link) => (
          <a className='linkButton'
            key={link.id}
            href={link.link}
            id={link.id}
            title={link.title}
            target="_blank"
            rel="noopener noreferrer">{link.name}
          </a>
        ))
        }
        </div>
        
      </div>
       
    </div>
  )
}

export default Links
