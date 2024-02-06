import React, { useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {

    const list = [
        'Home', 'About', 'Portfolio', 'Experience', 'Contact'
    ]

    const [nav, setnav] = useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 
    text-white fixed bg-black px-4'>
        <div>
            <h1 className='text-5xl ml-2'>Helix</h1>
        </div>

        <ul className='hidden md:flex'>
            {list.map((item) => (
                <li className='px-4 cursor-pointer font-medium 
                hover:scale-105 duration-300 text-gray-300'>{item}</li>
            ))}
        </ul>

        <div onClick={() => setnav(!nav) } className='cursor-pointer pr-4 z-10 md:hidden'>
            {
                nav ? <FaTimes size={30} /> : <FaBars size={30} />
            }
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0
                    w-full h-screen bg-gradient-to-b from-black to-gray-600 '>

                    {list.map((item) => (
                        <li className='px-4 cursor-pointer text-3xl py-6 text-gray-300'>{item}</li>
                    ))}
            </ul>
        )}

    </div>
  )
}

export default NavBar