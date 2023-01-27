import React, { useEffect, useState } from 'react'
import dropdown from '../images/dropdown.png'
import details from '../images/details.png'
import Loader from './Loader'
import { format } from 'date-fns'
import ReactPaginate from 'react-paginate'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'

const url = 'https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users'

const Userlist = () => {
  const [info, setInfo] = useState([])
  const [allData, setAllData] = useState([])
  const [loading, setLoading] = useState(true)
  const [userOrg, setUserOrg] = useState('')
  const [userUsername, setUserUsername] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userNumber, setUserNumber] = useState('')
  const [userDate, setUserDate] = useState('')
  const navigate = useNavigate()

  // fetching data

  const fetchData = async () => {
    try {
      const resposne = await fetch(url)
      const data = await resposne.json()
      setInfo(data)
      setAllData(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  console.log(userDate, userEmail, userNumber, userOrg, userUsername)

  // pagination
  const [itemOffset, setItemOffset] = useState(0)
  const [pageCount, setPageCount] = useState(0)
  const [currentItems, setCurrentItems] = useState([])
  const [params, setParams] = useState(0)
  const [count, setCount] = useState(true)
  const [label, setLabel] = useState(null)
  const [searchModal, setSearchModal] = useState(false)

  const itemsPerPage = 10

  useEffect(() => {
    if (count) {
      const endOffset = itemOffset + itemsPerPage
      setCurrentItems(info.slice(itemOffset, endOffset))
      setPageCount(Math.ceil(info.length / itemsPerPage))
      setLabel('')
    } else {
      const endOffset = +params + itemsPerPage
      setLabel(endOffset / 10 - 1)
      setCurrentItems(info.slice(+params, endOffset))
      setPageCount(Math.ceil(info.length / itemsPerPage))
    }
  }, [itemOffset, info, count, params])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % info.length
    setItemOffset(newOffset)
    if (newOffset === 100) {
      return setParams(newOffset + itemsPerPage)
    } else {
      setParams(newOffset)
    }

    setCount(true)
  }

  // handle serach
  const resetSearch = () => {
    setUserDate('')
    setUserNumber('')
    setUserEmail('')
    setUserOrg('')
    setUserUsername('')
  }

  const handleSearch = (e) => {
    e.preventDefault()
    if (!userDate && !userEmail && !userNumber && !userOrg && !userUsername) {
      return toast.warning('please input search parameter')
    } else {
      let newData = allData.filter((item) => {
        return (
          item.orgName.includes(userOrg) &&
          item.userName.includes(userUsername) &&
          item.createdAt.includes(userDate) &&
          item.email.includes(userEmail) &&
          item.profile.phoneNumber.includes(userNumber)
        )
      })
      setCurrentItems(newData)
      setSearchModal(false)
    }
  }

  // single view
  const handleSinglePerson = (item) => {
    // navigate(`/User/${item.userName}`, { itemid: item })
    // console.log(item)
    navigate(`/User/${item.userName}`, {
      state: { name: 'king', value: [{ item }] },
    })
    console.log(item.userName)
  }

  return (
    <>
      {loading ? (
        <div className=''>
          <Loader />
        </div>
      ) : (
        <div className='bg-white rounded-sm shadow-sm px-6 py-6 md:py-8 font-sans relative  overflow-x-scroll 2xl:overflow-hidden min-h-screen '>
          {/* data display */}
          <div className='w-full '>
            <div className='w-full overflow-x-scroll'>
              <table className='min-w-max w-full divide-y  overflow-auto relative divide-gray-1 '>
                <thead className='text-xs  text-left text-gray-700 uppercase'>
                  <tr>
                    <th
                      scope='col'
                      className='pl-3 pr-2  text-left font-medium text-gray-500'
                    >
                      <div className='flex items-center gap-4 mb-6'>
                        <h2 className='text-base font-semibold '>
                          Organization
                        </h2>
                        <img
                          src={dropdown}
                          alt=''
                          className='cursor-pointer'
                          onClick={() => setSearchModal(!searchModal)}
                        />
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='pl-3 pr-2  text-left text-sm font-medium text-gray-500'
                    >
                      <div className='flex items-center justify-start gap-4 mb-6'>
                        <h2 className='text-base font-semibold '>USERNAME</h2>
                        <img
                          src={dropdown}
                          alt=''
                          className='cursor-pointer'
                          onClick={() => setSearchModal(!searchModal)}
                        />
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='pl-3 pr-2  text-left text-sm font-medium text-gray-500'
                    >
                      <div className='flex items-center gap-4 mb-6'>
                        <h2 className='text-base font-semibold '>Email</h2>
                        <img
                          src={dropdown}
                          alt=''
                          className='cursor-pointer'
                          onClick={() => setSearchModal(!searchModal)}
                        />
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='pl-3 pr-2  text-left font-medium text-gray-500'
                    >
                      <div className='flex items-center gap-4 mb-6'>
                        <h2 className='text-base font-semibold '>
                          Phone number
                        </h2>
                        <img
                          src={dropdown}
                          alt=''
                          className='cursor-pointer'
                          onClick={() => setSearchModal(!searchModal)}
                        />
                      </div>
                    </th>
                    <th
                      scope='col'
                      className='pl-3 pr-2 w-28 text-right font-medium text-gray-500'
                    >
                      <div className='flex items-center gap-4 mb-6'>
                        <h2 className='text-base font-semibold '>
                          date joined
                        </h2>
                        <img
                          src={dropdown}
                          alt=''
                          className='cursor-pointer'
                          onClick={() => setSearchModal(!searchModal)}
                        />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white py-5 overflow-x-auto  divide-y divide-gray-1 cursor-pointer'>
                  {currentItems.map((item, index) => {
                    const { id, createdAt, orgName, userName, profile, email } =
                      item

                    return (
                      <tr
                        key={index}
                        className='hover:bg-gray-2 text-xs md:text-sm '
                        onClick={() => handleSinglePerson(item)}
                      >
                        <td className='px-2 py-2 '>{orgName}</td>
                        <td className='px-2 w-32 py-4 whitespace-nowrap text-left text-gray-600 font-normal'>
                          {userName}
                        </td>
                        <td className='px-2 py-4 whitespace-nowrap text-gray-600 font-normal'>
                          {email}
                        </td>
                        <td className='px-2 py-4 whitespace-nowrap text-gray-600 font-normal'>
                          {profile.phoneNumber}
                        </td>
                        <td className='px-2 py-4 whitespace-nowrap  text-gray-600 font-normal'>
                          {format(
                            new Date(createdAt),
                            ` MMMM do, Y HH:mm aaaaa'm'`
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* search container */}
          {searchModal ? (
            <div className='bg-white  rounded-md max-w-xs px-6 py-8 lg:py-12 shadow-xl  shadow-blackColor absolute left-0 bottom-0 z-50 '>
              <form
                action=''
                className='space-y-6 lg:space-y-7'
                onSubmit={handleSearch}
              >
                <div className='space-y-2'>
                  <label htmlFor=''>Organization</label>
                  <input
                    type='text'
                    placeholder='Organization'
                    className='border border-blackColor  rounded-md px-4 py-1  w-full  placeholder:text-blackColor placeholder:text-sm  outline-none'
                    value={userOrg}
                    onChange={(e) => setUserOrg(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor=''>Username</label>
                  <input
                    type='text'
                    placeholder='Username'
                    className='border border-blackColor  rounded-md px-4 py-1  w-full  placeholder:text-blackColor placeholder:text-sm  outline-none'
                    value={userUsername}
                    onChange={(e) => setUserUsername(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor=''>Email</label>
                  <input
                    type='email'
                    placeholder='Email'
                    className='border border-blackColor  rounded-md px-4 py-1  w-full  placeholder:text-blackColor placeholder:text-sm  outline-none'
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor=''>Phone Nuber</label>
                  <input
                    type='text'
                    placeholder='Phone Number'
                    className='border border-blackColor  rounded-md px-4 py-1  w-full  placeholder:text-blackColor placeholder:text-sm  outline-none'
                    value={userNumber}
                    onChange={(e) => setUserNumber(e.target.value)}
                  />
                </div>
                <div className='space-y-2'>
                  <label htmlFor=''>Date</label>
                  <input
                    type='date'
                    placeholder='Date'
                    className='border border-blackColor  rounded-md px-4 py-1  w-full  placeholder:text-blackColor placeholder:text-sm  outline-none'
                    value={userDate}
                    onChange={(e) => setUserDate(e.target.value)}
                  />
                </div>

                <div className='flex justify-between gap-4 items-center'>
                  <button
                    className='border border-blackColor  rounded-md px-4 py-1 w-full '
                    onClick={() => resetSearch()}
                    type='reset'
                  >
                    Reset
                  </button>
                  <button
                    type='submit'
                    className='bg-lightGreenColor rounded-md text-white px-4 py-1 w-full  '
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          ) : (
            ''
          )}

          {currentItems.length < 1 ? (
            <div className='absolute mt-20  flex justify-start items-start   w-full h-full '>
              <h1 className='font-bold text-red-500 text-2xl'>
                No data found, Refresh Page
              </h1>
            </div>
          ) : (
            ''
          )}
        </div>
      )}

      {/* toast */}
      <ToastContainer />
      {/* pagination*/}
      {currentItems.length < 10 ? (
        ''
      ) : (
        <div className='font-sans lg:flex justify-between item-center space-y-8 lg:space-y-0'>
          {/* selection */}
          <div className='flex justify-center lg:justify-start  item-center gap-3'>
            <h1>showing</h1>
            <select
              type='number'
              placeholder=''
              value={params}
              onChange={(e) => {
                setParams(e.target.value)
                setCount(false)
              }}
              className=' border border-blackColor rounded rounded-md px-2 py-1 w-16 '
            >
              {/* <option value=''>Select Range</option> */}
              <option value='0'>10</option>
              <option value='10'>20</option>
              <option value='20'>30</option>
              <option value='30'>40</option>
              <option value='40'>50</option>
              <option value='50'>60</option>
              <option value='60'>70</option>
              <option value='70'>80</option>
              <option value='80'>90</option>
              <option value='90'>100</option>
            </select>
            <h1>of {info.length}</h1>
          </div>
          {/* clicking pagination */}
          <ReactPaginate
            breakLabel='...'
            nextLabel='>'
            onPageChange={handlePageClick}
            forcePage={label}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel='< '
            renderOnZeroPageCount={null}
            className='flex justify-center lg:justify-end items-center gap-4 font-sans'
            containerClassName='pagination'
            pageLinkClassName='page-num'
            nextLinkClassName='page-num bg-[#213F7D1A] p-2 rounded-md font-bold'
            previousLinkClassName='page-num bg-[#213F7D1A] p-2 rounded-md font-bold'
            activeClassName='active font-extrabold text-lg'
          />
        </div>
      )}
    </>
  )
}
export default Userlist
