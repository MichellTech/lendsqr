import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import search from '../images/search.png'
import bell from '../images/bell.png'
import avatar from '../images/avatar.png'
import down from '../images/down.png'
import Sidebar from './Sidebar'

const Header = () => {
  const [pannel, setPannel] = useState(false)

  return (
    <nav className=' relative mx-auto px-1 md:px-4 lg:px-10 py-2 md:py-2 bg-white shadow-md shadow-blue'>
      {/* <!-- Flex Container For Nav Items --> */}
      <div className='flex items-center justify-between lg:justify-start px-4 sm:px-6 md:px-0 my-6 '>
        {/* <!-- Logo --> */}
        <div className=''>
          {pannel ? (
            <img src={logo} alt='' id='logo' className='w-3/5 ' />
          ) : (
            <Link to='/'>
              <img src={logo} alt='' id='logo' className='w-3/5 xl:w-full' />{' '}
            </Link>
          )}
        </div>

        {/* <!-- Menu Items --> */}
        <div className='hidden items-center font-sans   space-x-10 lg:space-x-10 xl:space-x-20  text-grayishBlue md:ml-2 xl:ml-40 lg:flex justify-between w-full '>
          {/* search */}
          <div className='flex'>
            <input
              type='text'
              placeholder='Search anything'
              className='border border-blackColor rounded-r-none rounded-md px-4 py-1  w-full 2xl:w-96 placeholder:text-blackColor placeholder:text-sm border-r-0 outline-none '
            />
            <button className='bg-lightGreenColor rounded-r-md px-4 py-1 xl:py-2'>
              <img src={search} alt='search' />
            </button>
          </div>
          {/* profile */}
          <div className='flex justify-around gap-6 2xl:gap-12 items-center'>
            <h1 className='underline'>Docs</h1>
            <img src={bell} alt='bell' />
            <img src={avatar} alt=' avatar' />
            <div className='flex items-center gap-2'>
              <h1 className='font-semibold'>Ayodeji</h1>
              <img src={down} alt='' />
            </div>
          </div>
        </div>

        {/* <!-- Hamburger Button --> */}
        {pannel ? (
          <button
            id='menu-btn'
            className='z-30 open block lg:hidden focus:outline-none hamburger'
            onClick={() => setPannel(!pannel)}
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        ) : (
          <button
            id='menu-btn'
            className='z-30 block lg:hidden focus:outline-none hamburger'
            onClick={() => setPannel(!pannel)}
          >
            <span className='hamburger-top'></span>
            <span className='hamburger-middle'></span>
            <span className='hamburger-bottom'></span>
          </button>
        )}
      </div>
      {/* <!-- Mobile Menu --> */}
      {pannel ? (
        <div
          id='menu'
          className='fixed inset-0 z-20  flex-col items-center self-end w-2/3 h-full  overflow-y-scroll m-h-screen px-6 py-1 pt-10 pb-4 tracking-widest text-white uppercase bg-lightGreenColor space-y-10'
        >
          {/* search */}
          <div className='flex'>
            <input
              type='text'
              placeholder='Search anything'
              className='border border-blackColor rounded-r-none rounded-md px-4 py-1  w-full 2xl:w-96 placeholder:text-blackColor placeholder:text-sm border-r-0 outline-none '
            />
            <button className='bg-blueColor rounded-r-md px-4 py-1 xl:py-2'>
              <img src={search} alt='search' />
            </button>
          </div>
          <Sidebar />
          {/* profile */}
          <div className='flex justify-between items-center'>
            <h1 className='underline'>Docs</h1>
            <img src={bell} alt='bell' />
            <img src={avatar} alt=' avatar' />
            <div className='flex items-center gap-2'>
              <h1 className='font-semibold'>Ayodeji</h1>
              <img src={down} alt='' />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </nav>
  )
}

export default Header
