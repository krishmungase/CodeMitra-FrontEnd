import React from 'react'

const ErrorPage = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex items-center justify-center flex-col space-y-2'>
        <h1 className='text-3xl font-bold'>Error 404</h1>
        <p className='text-md font-medium'>Page not found</p>
      </div>
    </div>
  )
}

export default ErrorPage