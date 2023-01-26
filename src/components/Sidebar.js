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
import pref from '../images/pref.png'
import audit from '../images/audit.png'
const Sidebar = () => {
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

  return (
    <>
      <div className='space-y-4 '>
        {/* organization */}
        <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  '>
          <img src={briefcase} alt='briefcase' />
          <div className='flex items-center gap-2'>
            <h1 className='font-semibold text-sm'>Switch Organization</h1>
            <img src={down} alt='down' />
          </div>
        </div>
        {/* Dashboard */}
        <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  '>
          <img src={home} alt='briefcase' />
          <div className='flex items-center gap-2'>
            <h1 className='font-semibold text-sm'>Dashboard</h1>
          </div>
        </div>
        {/* customers */}
        <div>
          <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  '>
            <div className='flex items-center gap-2'>
              <h1 className='font-semibold text-sm'>Customers</h1>
            </div>
          </div>
          {data.customers.info.map((item) => {
            const { id, name, img } = item
            return (
              <div
                key={item.id}
                className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  '
              >
                <img src={item.img} alt={item.name} className='w-4' />
                <div className='flex items-center gap-2'>
                  <h1 className='font-medium  '>{item.name}</h1>
                </div>
              </div>
            )
          })}
        </div>
        {/* Businesses */}
        <div>
          <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  '>
            <div className='flex items-center gap-2'>
              <h1 className='font-semibold text-sm'>Businesses</h1>
            </div>
          </div>
          {data.Business.info.map((item) => {
            const { id, name, img } = item
            return (
              <div
                key={item.id}
                className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  '
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
          <div className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  '>
            <div className='flex items-center gap-2'>
              <h1 className='font-semibold text-sm'>SETTINGS</h1>
            </div>
          </div>
          {data.Settings.info.map((item) => {
            const { id, name, img } = item
            return (
              <div
                key={item.id}
                className='w-full py-3 text-left font-sans text-xs flex items-center gap-4  '
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
    </>
  )
}
export default Sidebar
