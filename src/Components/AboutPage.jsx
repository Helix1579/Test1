import React from 'react'

const AboutPage = () => {
  return (
    <div name='About' className='w-full h-screen bg-gradient-to-b from-gray-800
        to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-10'>
                I am a dedicated Full Stack Developer, adept at leveraging a diverse toolkit of modern technologies to construct high-performance web applications. 
                My expertise spans across a range of frameworks and languages, including Java Spring Boot, React JS, Node.js, Express.js, Tailwind CSS, MongoDB, and MySQL. 
                With each project, I strive to merge innovation with functionality, consistently delivering solutions that not only meet but exceed client expectations.
            </p>
            <br/>
            <p className='text-xl'>
                Driven by a passion for crafting scalable and responsive web experiences, I am committed to creating applications that prioritize user satisfaction. 
                Whether it's optimizing backend processes for efficiency or designing intuitive frontend interfaces, I am relentless in my pursuit of excellence. 
                Through meticulous attention to detail and a focus on user-centric design, I aim to transform concepts into captivating digital realities. 
                Let's collaborate and bring your vision to fruition with dynamic and immersive web solutions!
            </p>
        </div>
    </div>
  )
}

export default AboutPage