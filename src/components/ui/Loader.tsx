import React from 'react'

function Loader() {
  return (
    <div className='flex justify-center h-screen items-center'>
      <img className='animate-grow' src="/logo-removebg.png" alt="loader" />
    </div>
  )
}

export default Loader