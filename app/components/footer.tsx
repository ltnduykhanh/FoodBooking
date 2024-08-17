import React from 'react'
import Image from 'next/image'
import Logo from './assets/images/OIP.jpg'

const footer = () => {
  return (
    <>
      <div className='flex flex-row bg-zinc-400 w-full h-52 mt-5 justify-between'>
        <div className='flex flex-col justify-center ml-5'>
          <Image
            className='h-32 w-auto'
            src={Logo}
            alt='Logo'
          />
        </div>
        <div className='flex flex-col justify-center'>
          <h4 className='font-bold'>MORE INFOMATION</h4>
          <ul>
            <li>
              <a href=''>News</a>
            </li>
            <li>
              <a href=''>Promotion</a>
            </li>
            <li>
              <a href=''>Career Opportunities</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center'>
          <h4 className='font-bold'>SUPPORT</h4>
          <ul>
            <li>
              <a href=''>Customer care</a>
            </li>
            <li>
              <a href=''>Delivery policy</a>
            </li>
            <li>
              <a href=''>Problem booking</a>
            </li>
          </ul>
        </div>
        <div className='flex flex-col justify-center mr-5'>
          <h4 className='font-bold'>FOLLOW US</h4>
          <ul>
            <li>
              <a href=''>Facebook</a>
            </li>
            <li>
              <a href=''>Instagram</a>
            </li>
            <li>
              <a href=''>Zalo</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default footer
