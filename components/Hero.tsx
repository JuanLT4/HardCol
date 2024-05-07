"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/components'

const Hero = ({ children } : {children: React.ReactNode}) => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
              <span className='title-gradient'>Gaming</span> al siguiente <span className='title-gradient'>nivel</span>
            </h1>
            <br />
            {children}

            <CustomButton 
              title="Quiero hablar con un asesor"
              containerStyles="bg-[#4964fb]  text-white rounded-full mt-10"
              handleClick={(e) => {
                window.open('https://api.whatsapp.com/send?phone=573024278167', '_blank')
              }}
            />
        </div>
        <div className='hero__image-container'>
          <div className='hero__image'>
            <Image 
              src={"/musetex-black.png"} 
              alt='hero'
              fill 
              className='object-contain animate__animated animate__bounceInRight'
            />
          </div>
          
            <div className='hero__image-overlay' />
        </div>
    </div>
  )
}

export default Hero