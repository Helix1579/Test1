import React from 'react'
import image from '../assets/yash.jpg'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const HomePage = () => {
    return (
        <div name="home" className='h-screen w-full 
                bg-gradient-to-b from-black via-black to-gray-700'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center 
                    h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>Full Stack Developer</h2>
                    <p className='text-gray-400 py-4 max-w-md'>
                        I am a Full Stack Developer with experience in building web applications using modern technologies.
                        Like Java Spring Boot, React JS, Node.js, and Express.js, Tailwind CSS, MongoDB and MySQL. 
                        I have a passion for building scalable and responsive web applications that provide a great user experience.
                    </p>
                    <div>
                        <button className='text-white w-fit pl-6 pr-3 py-2 my-2 flex items-center rounded-md 
                                bg-gradient-to-r from-cyan-500 to-blue-700 cursor-pointer group'>
                            Portfolio
                            <span className='group-hover:rotate-90 duration-200 px-1'>
                                <MdOutlineKeyboardDoubleArrowRight />
                            </span>
                        </button>
                    </div>
                </div>
                {/* Profile Picture */}
                {/* <div>
                    <img src={image} alt='yash' className='rounded-full' />
                </div> */}
            </div>
        </div>
    )
}

export default HomePage