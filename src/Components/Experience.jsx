import React from 'react'

import git from '../assets/github.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import java from '../assets/java.png'
import CSharp from '../assets/CSharp.png'
import C from '../assets/C.png'


const Experience = () => {

    const technologies = [
        {
            name: 'HTML',
            img: html,
            style : 'shadow-orange-500'
        },
        {
            name: 'CSS',
            img: css,
            style : 'shadow-blue-500'
        },
        {
            name: 'Javascript',
            img: javascript,
            style : 'shadow-yellow-500'
        },
        {
            name: 'React',
            img: react,
            style : 'shadow-blue-500'
        },
        {
            name: 'Node',
            img: node,
            style : 'shadow-green-500'
        },
        {
            name: 'Next.js',
            img: nextjs,
            style : 'shadow-white'
        },
        {
            name: 'Tailwind',
            img: tailwind,
            style : 'shadow-sky-500'
        },
        {
            name: 'Java',
            img: java,
            style : 'shadow-orange-800'
        },
        {
            name: 'Github',
            img: git,
            style : 'shadow-gray-500'
        },
        {
            name: 'C#',
            img: CSharp,
            style : 'shadow-violet-800'
        },
        {
            name: 'C',
            img: C,
            style : 'shadow-blue-500'
        }
    ]

    return (
        <div name='Experience' className='bg-gradient-to-b from-gray-800 to-black
            w-full h-screen'>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center
                w-full h-full text-white'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>Here are a few technologies I've been working with recently:</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                    {technologies.map(({name, img, style}) => (
                        <div className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}>
                            <img src={img} alt={name} className='w-20 mx-auto' />
                            <p className='mt-3'>{name}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Experience