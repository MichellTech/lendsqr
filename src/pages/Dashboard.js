import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Users from '../components/Users'
import Userlist from '../components/Userlist'
const Dashboard = () => {
  return (
    <>
      <Navbar />
      {/* conten */}
      <div className='flex justify-start bg-[#FBFBFB] gap-10'>
        {/* sidebar */}
        <div className='font-sans  hidden lg:block bg-white px-0 py-10 shadow-blueColor shadow-md   '>
          <Sidebar />
        </div>
        {/* user */}
        <div className='min-h-screen w-full  px-4 md:px-6 2xl:px-8 py-8  lg:py-10 2xl:py-12 space-y-10 overflow-hidden'>
          <Users />
          <Userlist />
        </div>
      </div>
    </>
  )
}
export default Dashboard
