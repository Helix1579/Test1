/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const SocialLinks = () => {

    const links= [
        {
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            link: 'https://www.linkedin.com/'
        },
        {
            child: (
                <>
                    Github <FaGithub size={30} />
                </>
            ),
            link: 'https://github.com'
        },
        {
            child: (
                <>
                    E-Mail <HiOutlineMail size={30} />
                </>
            ),
            link: 'mailto:mashruwalayashraj9@gmaul.com'
        },
        {
            // Add resume file in public folder PDF
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            link: 'https://docs.google.com/document/d/14rz3NyXCvkpMjBMD0rXTPGR_nvDei9nv/edit?usp=sharing&ouid=103738310555314052098&rtpof=true&sd=true',
            download: true
        }
    ]


    return (
        <div className='flex flex-col top-[35%] left-0 fixed'>
            <ul>

                {
                    links.map(({link, download,child}) => (
                        <li className='flex justify-between items-center w-40 h-14 px-4 ml-[-100px]
                            hover:ml-[-10px] hover:rounded-md duration-200 
                            bg-gradient-to-l from-black to-gray-500'>
                            <a href={link} className='flex justify-between items-center w-full text-white'
                                download={download}
                                target='_blank'
                                rel='noreferrer'>
                                    {child}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default SocialLinks