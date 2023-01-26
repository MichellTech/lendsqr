import React from 'react'
import error from '../images/error.png'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <section className='px-4 font-sans '>
        <div className=' space-y-8 flex flex-col justify-center items-center min-h-screen'>
          {/* image */}
          <div className='mx-auto max-w-xs md:max-w-md xl:max-w-lg'>
            <img src={error} alt='error' />
          </div>
          {/* text */}
          <div>
            <h3 className='mt-0 text-xl max-w-xs mx-auto md:max-w-md xl:text-2xl xl:max-w-xl text-center'>
              Opps ! you seem to have clicked or entered an old or expired link.
              Click on the button below to return to the home page
            </h3>
          </div>
          {/* button */}
          <Link
            to='/'
            className='mx-auto bg-blue text-white font-alata px-4 py-2 shadow-md rounded-md'
          >
            Return to Hompage
          </Link>
        </div>
      </section>
    </>
  )
}
export default Error
