import React from 'react'
import SignUpForm from './forms/signup-form'
import SignInForm from './forms/signin-form'


const AuthPage = () => {
  return (
    <div className='h-screen bg-gray-50 flex justify-center items-center'>
     <SignUpForm />
    </div>
  )
}

export default AuthPage