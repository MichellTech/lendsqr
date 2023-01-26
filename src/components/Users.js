import React from 'react'
import icon from '../images/icon.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const Users = () => {
  return (
    <>
      {/* body */}
      <div className='font-sans  '>
        <h1 className='text-xl font-bold'>Users</h1>
        {/* individual content */}
        <div className='mt-6 flex flex-col justify-center md:items-start items-center '>
          {/* grid */}
          <div className='grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-5 w-full '>
            {/* first component */}
            <div className='space-y-3 bg-white shadow-md px-4 py-6 w-full'>
              <img src={icon} alt='' />
              <h1 className=' text-lg'>Users</h1>
              <h1 className='font-bold text-2xl'>2,453</h1>
            </div>
            {/* second component */}
            <div className='space-y-3 bg-white shadow-md px-4 py-6 w-1/full'>
              <img src={icon2} alt='' />
              <h1 className=' text-lg'>Active Users</h1>
              <h1 className='font-bold text-2xl'>2,453</h1>
            </div>
            {/* THIRD component */}
            <div className='space-y-3 bg-white shadow-md px-4 py-6 w-full'>
              <img src={icon3} alt='' />
              <h1 className=' text-lg '>Users with loans</h1>
              <h1 className='font-bold text-2xl'>12,453</h1>
            </div>
            {/* fourth  component */}
            <div className='space-y-3 bg-white shadow-md px-4 py-6 w-full'>
              <img src={icon4} alt='' />
              <h1 className=' text-lg'>Users with savings</h1>
              <h1 className='font-bold text-2xl'>102,453</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Users
