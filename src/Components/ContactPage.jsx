import React from 'react'

const ContactPage = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    Contact</p>
                <p className='py-6'>Submit the form to get in touch.</p>
            </div>

            <div className='flex justify-center items-center'>
                {/* Fill out action in form action attribute. */}
                <form action="" method='' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" placeholder="Name" className='p-2 bg-transparent border-2 
                        rounded-md text-white focus:outline-none'/>
                    <input type="text" placeholder="E-Mail" className='my-4 p-2 bg-transparent border-2 
                        rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows={10} className='p-2 bg-transparent border-2 rounded-md
                     text-white focus:outline-none' placeholder='Enter y our message here.' />

                    <button type="submit" className='text-white bg-gradient-to-r from-cyan-500 
                        to-blue-700 px-4 py-1 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200'>
                        Submit</button> 
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactPage