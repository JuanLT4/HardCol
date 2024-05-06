import Image from 'next/image'
import React from 'react'

const Flyer = () => {
  return (
    <div className='flex justify-center items-center'>
        <div className='w-[1200px] relative h-[400px] m-auto-0'>
            <Image
                src="/banner.png"
                alt='banner'
                fill
                className='w-full h-full object-contain'
            />
        </div>
    </div>
  )
}

export default Flyer