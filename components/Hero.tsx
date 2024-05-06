"use client";

import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/components'

const Hero = () => {
  const handleScroll = () => {

  }

  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
              <span className='text-[#4964fb]'>Gaming</span> al siguiente <span className='text-[#4964fb]'>nivel</span>
            </h1>
            <br />
            <p className='hero__subtitle'>
            Desata el poder del juego con nuestra gama de computadoras diseñadas para dominar. 
            ¡Convierte cada partida en una experiencia épica con nuestros equipos gamer de alto rendimiento!
            </p>

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
              className='object-contain'
            />
          </div>
          
            <div className='hero__image-overlay' />
        </div>
    </div>
  )
}

export default Hero