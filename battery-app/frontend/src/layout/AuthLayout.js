import React from 'react'

const AuthLayout = () => {
  return (
    <div className='flex-col relative top-[-20vh]'>
        <button className="btn text-white bg-[#3B97C6] w-auto flex mx-auto mb-2">Login with your credentials</button>
        <div className='text-center text-lg font-bold'>
        If you want to know more about that battery, <br/> login with your credentials!
        </div>
    </div>
  )
}

export default AuthLayout
