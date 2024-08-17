import React from 'react'
import Image from 'next/image'
import AsiaBanner from './assets/images/asian-food-banner.jpg'
import FamilyFood from './assets/images/Family-food.jpg'
import FoodQC from './assets/images/FOODQC1.jpg'
import Shushi from './assets/images/Shushi.jpg'
import PhoHanoi from './assets/images/pho-ha-noi.jpg'

const banner = () => {
  return (
    <>
      <div className='flex h-60 w-full'>
        <Image
          src={AsiaBanner}
          alt={'AsiaBanner'}
          className='object-cover w-full h-auto'
        />
      </div>
      <div className='flex mx-auto container justify-center mt-5'>
        <div className='relative bg-black w-[300px] h-[508px] flex-col group'>
          <Image
            className='object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-50'
            src={FoodQC}
            alt={'FoodQC'}
          />
          <div
            className='absolute inset-1 flex items-center justify-center opacity-0
                        group-hover:opacity-100 transition-opacity duration-300'>
            <p className='text-white text-xl font-bold'>Family food</p>
            <div className='absolute bottom-0 left-0'>
              <button className='text-white m-1'>Read more...</button>
            </div>
          </div>
        </div>
        <div className='flex-col ml-2'>
          <div className='relative group w-[600px] h-[250px] flex-row mb-2 bg-black'>
            <Image
              className='object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-50'
              src={FamilyFood}
              alt={'FamilyFood'}
            />
            <div
              className='absolute inset-0 flex items-center justify-center opacity-0
                        group-hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white text-xl font-bold'>Family food</p>
              <div className='absolute bottom-0 left-0'>
                <button className='text-white m-1'>Read more...</button>
              </div>
            </div>
          </div>
          <div className='relative group w-[600px] h-[250px] flex-row bg-black'>
            <Image
              className='object-cover w-full h-full transition-opacity duration-300 group-hover:opacity-50'
              src={Shushi}
              alt={'Shushi'}
            />
            <div
              className='absolute inset-0 flex items-center justify-center opacity-0
                        group-hover:opacity-100 transition-opacity duration-300'>
              <p className='text-white text-xl font-bold'>Shushi</p>
              <div className='absolute bottom-0 left-0'>
                <button className='text-white m-1'>Read more...</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5 h-60 w-full'>
        <Image
          src={PhoHanoi}
          alt={'PhoHanoi'}
          className='object-cover w-full h-full'
        />
      </div>
    </>
  )
}

export default banner
