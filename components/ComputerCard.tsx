"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { ComputerCardProps } from '@/types'
import CustomButton from './CustomButton'
import ComputerDetails from './ComputerDetails'

const ComputerCard = ({ computer }: ComputerCardProps) => {

  const { cpu, vga, motherBoard, powerSupply, ram, ssd, cooling, chasis, price, imgs, salePrice } = computer

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='car-card group animate__animated animate__backInUp'>
      <div className='car-card__content'>
        <h2 className='car-card__content-title'>
          {cpu} {vga}
        </h2>
      </div>

      <div className='flex mt-1 text-[20px] font-bold items-end flex-col w-full'>
        <p className='flex flex-col items-end justify-end'>
        <span className='text-[14px]'>
          Precio regular
        </span>
        <span className='text-gray-500 line-through'>
          $ {salePrice}  
        </span>
        </p>
      </div>

      <p className='flex mt-1 text-[32px] font-bold'>
        <span className='self-start text-[14px] discount-gradient'>
          {'-20%' + ' '}
        </span>
        <span className='price-gradient font-[900] ml-2'>
          {price}  
        </span>
        <span className='self-end text-[14px]'>
          COP
        </span>
      </p>

      <div className='relative w-full h-60 my-3 background-gradient-blue rounded-lg object-contain'>
        <Image
          src={imgs[0]}
          alt="computer"
          fill
          priority
          className='object-contain'
        />
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible w-full justify-between text-gray'>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src="/motherboard.png"
              width={25}
              height={25}
              alt='motherboard'
            />
            <p className='text-[14px]'>
              {motherBoard === 'MSI B550 Gaming GEN3' ? 'MSI B550' : motherBoard === 'ASRock A520M-HDV'? 'ASRock A520' : motherBoard === 'ASRock B550 Phantom Gaming 4' ? 'ASRock B550' : motherBoard === 'ASUS Prime B550-PLUS' ? 'ASUS B550' : motherBoard}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src="/ram.png"
              width={25}
              height={25}
              alt='ram'
            />
            <p className='text-[14px]'>
              {ram === 'Corsair Vengeance LPX 32GB (2x16GB)' ? '32GB' : ram === 'Corsair Vengeance LPX 32GB (2x16GB) RGB'? '32GB RGB' : ram}
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2'>
            <Image
              src="/ssd.png"
              width={25}
              height={25}
              alt='ssd'
            />
            <p className='text-[14px]'>
              {ssd === 'Crucial P3 1TB NVMe'? 'Crucial 1TB' : ssd === 'Wester Digital 1TB Blue SN580 NVMe' ? 'WD 1TB' : ssd === 'Samsung 990 EVO 1TB NVMe' ? 'Samsung 1TB' : ssd}
            </p>
          </div>
        </div>

        <div className='car-card__btn-container'>
          <CustomButton
            title='Ver Más'
            containerStyles='w-full py-[16px] rounded-full background-gradient-orange'
            btnType="button"
            textStyles="text-white text-[18px] leading-[17px] font-extrabold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <ComputerDetails isOpen={isOpen} closeModal={()=> {
        setIsOpen(false)
        console.log(computer.imgs)
        }} computer={computer}/>
    </div>
  )
}

export default ComputerCard