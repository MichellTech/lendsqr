import React, { useEffect, useState } from 'react'
import back from '../images/back.png'
import star from '../images/star.png'
import startf from '../images/startf.png'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

import { useLocation } from 'react-router-dom'

const SingleUser = () => {
  const [singleData, setSingleData] = useState(null)
  const { state } = useLocation()

  const navigate = useNavigate()

  useEffect(() => {
    setSingleData(state.value[0].item)
  }, [state])

  // handle return
  const handleReturn = () => {
    navigate('/dashboard')
  }

  return (
    <>
      <Navbar />
      <div className='flex justify-start bg-[#FBFBFB] gap-10'>
        <div className='font-sans  hidden lg:block bg-white px-6 py-10 shadow-blueColor shadow-md   '>
          <Sidebar />
        </div>
        <div className='font-sans min-h-screen w-full  px-4 md:px-6 2xl:px-8 py-8  lg:py-10 2xl:py-12 space-y-10 overflow-hidden'>
          {/* header */}
          <div className='space-y-10'>
            {/* back */}
            <div className='flex items-center gap-4'>
              <img src={back} alt='' />
              <button
                className='font-bold text-lg'
                onClick={() => handleReturn()}
              >
                back to users
              </button>
            </div>
            {/* userDeatails */}
            <div className=' flex justify-between items-center '>
              <h1 className='font-bold text-xl'>User Details</h1>
              {/* button */}
              <div className='flex items-center gap-4'>
                <button className='px-2 lg:px-4 py-1 rounded-md border border-red-500 text-red-500 font-bold text-xs lg:text-lg'>
                  Blacklist User
                </button>
                <button className='px-2 lg:px-4 py-1 rounded-md border border-lightGreenColor font-bold text-lightGreenColor text-xs lg:text-lg'>
                  Activate User
                </button>
              </div>
            </div>

            {/* bio- data */}
            <div className='w-full bg-white rounded-md shadow-md px-2 md:px-6 pt-8 overflow-x-scroll space-y-8 md:space-y-12 lg:space-y-16 md:overflow-hidden lg:overflow-x-scroll 2xl:overflow-hidden '>
              {/* first data */}
              <div className='flex items-center gap-4 lg:gap-8'>
                {/* pics */}
                <div className='flex items-start gap-3 lg:gap-8'>
                  <img
                    src={singleData?.profile.avatar}
                    alt=''
                    className='rounded-full w-14 md:w-24 lg:w-max'
                  />
                </div>
                <div className=''>
                  <div className='flex items-center gap-1 md:gap-4 font-bold text-sm lg:text-lg'>
                    <h1 className=''>{singleData?.profile.firstName}</h1>
                    <h1>{singleData?.profile.lastName}</h1>
                  </div>
                  <h1 className='text-xs lg:text-base'>
                    {singleData?.accountNumber}
                  </h1>
                </div>
                {/* border */}
                <div className='bg-blackColor h-14 rounded-md w-[2px]'></div>
                {/* use tier */}
                <div>
                  <h1 className='font-medium text-xs md:text-base'>
                    User's Tier
                  </h1>
                  <div className='flex items-center gap-1 md:gap-2 '>
                    <img src={startf} alt='' />
                    <img src={star} alt='' />
                    <img src={star} alt='' />
                  </div>
                </div>
                {/* border */}
                <div className='bg-blackColor h-14 rounded-md w-[2px]'></div>
                {/* account Balance */}
                <div>
                  <h1 className='font-bold'>$ {singleData?.accountBalance}</h1>
                  <h1 className='text-xs md:text-base'>
                    9912345678/Providus Bank
                  </h1>
                </div>
              </div>
              {/* second data */}
              <div className='flex items-start text-xs md:text-sm lg:text-base  w-max gap-4 2xl:justify-between 2xl:w-full '>
                <div className=''>
                  <h1 className='text-lightGreenColor font-semibold'>
                    General Details
                  </h1>
                  <div className='w-full bg-lightGreenColor h-[2px] lg:h-[4px]  mt-4 '></div>
                </div>

                <h1>Documents</h1>
                <h1>Bank Details</h1>
                <h1>Loans</h1>
                <h1>Savings</h1>
                <h1>App and System</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleUser
