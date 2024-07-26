import React from 'react'
import Frame37 from "/assets/images/Frame37.png"
import Frame46 from "/assets/images/Frame46.png"
import Frame47 from "/assets/images/Frame47.png"

const Images = () => {
  return (
    <div className='flex items-center flex-col space-y-5 md:space-y-0 md:flex-row space-x-5'>
      <img src={Frame37} alt="" className='shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]' />
      <img src={Frame46} alt="" className='shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]' />
      <img src={Frame47} alt="" className='shadow-[rgba(0,_0,_0,_0.2)_0px_60px_40px_-7px]' />
    </div>
  )
}

export default Images