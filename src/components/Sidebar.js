import React from 'react'
import briefcase from '../images/briefcase.png'
import down from '../images/down.png'
import home from '../images/home.png'
import user from '../images/users.png'
import guarn from '../images/guarn.png'
import loan from '../images/loan.png'
import loanr from '../images/loanr.png'
import save from '../images/save.png'
import savep from '../images/savep.png'
import white from '../images/white.png'
import karma from '../images/karma.png'
import feesp from '../images/feesp.png'
import trans from '../images/trans.png'
import service from '../images/service.png'
import servicea from '../images/servicea.png'
import statements from '../images/statements.png'
import reports from '../images/reports.png'
import logout from '../images/logout.png'
import pref from '../images/pref.png'
import audit from '../images/audit.png'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Sidebar = () => {
  const navigate = useNavigate()
  const data = {
    customers: {
      info: [
        {
          id: 1,
          name: 'users',
          img: user,
        },
        {
          id: 2,
          name: 'Guarantors',
          img: guarn,
        },
        {
          id: 3,
          name: 'Loans',
          img: loan,
        },
        {
          id: 4,
          name: 'Savings',
          img: save,
        },
        {
          id: 5,
          name: 'Loan Request',
          img: loanr,
        },
        {
          id: 6,
          name: 'Whitelist',
          img: white,
        },
        {
          id: 7,
          name: 'Karma',
          img: karma,
        },
      ],
    },
    Business: {
      info: [
        {
          id: 1,
          name: 'Organization',
          img: briefcase,
        },
        {
          id: 2,
          name: 'Loan Products',
          img: loanr,
        },
        {
          id: 3,
          name: 'Savings Products',
          img: savep,
        },
        {
          id: 4,
          name: 'Fees and Charges',
          img: feesp,
        },
        {
          id: 5,
          name: 'Transactions',
          img: trans,
        },
        {
          id: 6,
          name: 'Services',
          img: service,
        },
        {
          id: 7,
          name: 'Service Account',
          img: servicea,
        },
        {
          id: 8,
          name: 'Settlements',
          img: statements,
        },
        {
          id: 9,
          name: 'Reports',
          img: reports,
        },
      ],
    },
    Settings: {
      info: [
        {
          id: 1,
          name: 'Preferences',
          img: pref,
        },
        {
          id: 2,
          name: 'Fees and Pricing',
          img: feesp,
        },
        {
          id: 3,
          name: 'Audit Logs',
          img: audit,
        },
      ],
    },
  }
  // handle Logout
  const handleLogout = () => {
    toast.success('Logining Out')
    return setTimeout(() => {
      navigate(`/`)
    }, 3000)
  }
  return (
    <>
      <ToastContainer />
      <div className='space-y-4  '>
        {/* organization */}
        <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4 px-6 '>
          <img src={briefcase} alt='briefcase' />
          <div className='flex items-center gap-2'>
            <h1 className='font-semibold text-sm'>Switch Organization</h1>
            <img src={down} alt='down' />
          </div>
        </div>
        {/* Dashboard */}
        <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4 px-6  '>
          <img src={home} alt='briefcase' />
          <div className='flex items-center gap-2'>
            <h1 className='font-semibold text-sm'>Dashboard</h1>
          </div>
        </div>
        {/* customers */}
        <div>
          <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4 px-6 '>
            <div className='flex items-center gap-2'>
              <h1 className='font-semibold text-sm'>Customers</h1>
            </div>
          </div>
          <div>
            <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4 bg-lightGreenColor bg-opacity-20 text-blackColor px-6 border-l-4 border-l border-lightGreenColor '>
              <img src={data.customers.info[0].img} alt='' className='w-4' />
              <div className='flex items-center gap-2'>
                <h1 className='font-medium  '>{data.customers.info[0].name}</h1>
              </div>
            </div>
            <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  px-6 '>
              <img src={data.customers.info[1].img} alt='' className='w-4' />
              <div className='flex items-center gap-2'>
                <h1 className='font-medium  '>{data.customers.info[1].name}</h1>
              </div>
            </div>
          </div>
        </div>
        {/* Businesses */}
        <div>
          <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4 px-6 '>
            <div className='flex items-center gap-2'>
              <h1 className='font-semibold text-sm'>Businesses</h1>
            </div>
          </div>
          {data.Business.info.map((item) => {
            const { id, name, img } = item
            return (
              <div
                key={item.id}
                className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  px-6 '
              >
                <img src={item.img} alt={item.name} className='w-4' />
                <div className='flex items-center gap-2'>
                  <h1 className='font-medium'>{item.name}</h1>
                </div>
              </div>
            )
          })}
        </div>
        {/* settings */}
        <div>
          <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4 px-6 '>
            <div className='flex items-center gap-2'>
              <h1 className='font-semibold text-sm'>SETTINGS</h1>
            </div>
          </div>
          {data.Settings.info.map((item) => {
            const { id, name, img } = item
            return (
              <div
                key={item.id}
                className='w-full py-3 text-left font-sans text-xs flex items-center gap-4 px-6  '
              >
                <img src={item.img} alt={item.name} className='w-4' />
                <div className='flex items-center gap-2'>
                  <h1 className='font-medium'>{item.name}</h1>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {/* log out */}
      <div className='mt-16 space-y-6'>
        <div className='w-full h-[1.5px] bg-blackColor'></div>
        <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  px-6 cursor-pointer  '>
          <img src={logout} alt='' />
          <h1 className='' onClick={() => handleLogout()}>
            Logout
          </h1>
        </div>
      </div>
      <h1 className='mt-6 px-6 font-sans text-xs'>v1.2.0</h1>
    </>
  )
}
export default Sidebar
