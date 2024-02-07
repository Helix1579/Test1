import React from 'react'
import placeholderImage from '../assets/portfolio/PLACEHOLDER-IMAGE.png'

// import project thumbnauls


const Portfolio = () => {

    const projects = [
        {
            title: 'Project 1',
            description: 'This is a description of project 1',
            image: placeholderImage,
            demo: 'https://www.google.com',
            code: 'https://www.google.com'
        },
        {
            title: 'Project 2',
            description: 'This is a description of project 2',
            image: placeholderImage,
            demo: 'https://www.google.com',
            code: 'https://www.google.com'
        },
        {
            title: 'Project 3',
            description: 'This is a description of project 3',
            image: placeholderImage,
            demo: 'https://www.google.com',
            code: 'https://www.google.com'
        }
    ]

    return (
        <div name='Portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Here are some of my projects</p>
                </div>
                
                {/* Card Structure */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                
                {
                    projects.map(({image}) => (
                        <div className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={image} alt="Project 1"  className='rounded-md duration-200 hover:scale-105'/>
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110'>Demo</button>
                                <button className='w-1/2 px-6 py-2 m-1 duration-200 hover:scale-110'>Code</button>
                            </div>
                        </div>
                    ))
                }
                
                </div>
            </div>
        </div>
    )
}

export default Portfolio