import React from 'react'
import logo from '../images/logo.svg'
import signup from '../images/signup.svg'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showpassword, setShowpassword] = useState(false)
  const [verified, setVerified] = useState(false)
  const navigate = useNavigate()

  // function that handles the login
  const handleLogin = (e) => {
    e.preventDefault()
    if (!email || !password) {
      toast.error('Please fill in the input fields')
      return
    }
    if (!email.includes('@ ' && '.')) {
      toast.error('Please input a valid email address')
      return
    }
    if (password.length < 8) {
      toast.error('Password length must be more than 8 characters')
      return
    } else {
      setVerified(true)
      toast.success('Login successfull')
      return setTimeout(() => {
        navigate(`/dashboard`, {
          state: { name: 'Login', value: { verified } },
        })
      }, 3000)
    }
  }

  return (
    <section className='login-center space-y-24 lg:space-y-20 min-h-screen flex flex-col justify-center '>
      {/* logo */}
      <div className='flex justify-center lg:justify-start '>
        <img src={logo} alt='logo' />
      </div>
      {/* login details */}
      <div className=' lg:flex justify-between items-center '>
        {/* login images */}
        <div className='hidden lg:block lg:w-1/2  '>
          <img src={signup} alt='signup' className='w-full' />
        </div>
        {/* login group */}
        <div className='space-y-10 lg:space-y-16 lg:w-1/2   '>
          {/* header */}
          <div className='text-center lg:text-left space-y-2 w-10/12 lg:w-8/12 font-sans mx-auto'>
            <h1 className='font-sans text-4xl font-extrabold  text-blueColor'>
              Welcome!
            </h1>
            <h1 className='font-sans text-blackColor'>
              Enter details to login
            </h1>
          </div>
          {/* form */}
          <form
            className='w-10/12 lg:w-8/12 font-sans mx-auto'
            onSubmit={handleLogin}
          >
            <input
              type='email'
              placeholder='Email'
              className='border border-blackColor rounded-sm px-4 py-2 w-full placeholder:text-blackColor'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* password */}
            <div className='relative'>
              <input
                type={showpassword ? 'text' : 'password'}
                placeholder='Password'
                className='border border-blackColor rounded-sm px-4 py-2 w-full placeholder:text-blackColor mt-8 '
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <h1
                className='text-lightGreenColor font-medium mt-3 absolute top-7 right-4 text-sm cursor-pointer'
                onClick={() => setShowpassword(!showpassword)}
              >
                {showpassword ? 'hide' : 'show'}
              </h1>
            </div>
            {/* forgpot password */}
            <h1 className='text-lightGreenColor font-medium mt-3  text-sm'>
              Forgot Password ?
            </h1>
            {/* submit */}
            <button
              type='submit'
              className='bg-lightGreenColor text-white w-full px-4 py-2 font-sans font-semibold rounded-sm mt-8'
            >
              Login
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
