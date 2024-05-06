"use client";

import React, { Fragment } from 'react'
import Image from 'next/image'
import { ComputerDetailsProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import CustomButton from '@/components/CustomButton'

const ComputerDetails = ({
  isOpen,
  closeModal,
  computer,
}: ComputerDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[95vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button type='button' onClick={closeModal} className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'>
                    <Image
                      src="/close.svg"
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain'
                    />
                  </button>

                  <div className='flex-1 flex flex-col gap-3'>
                    <div className='relative w-full h-60 bg-pattern bg-cover bg-center rounded-lg'>
                      <Image
                        src={computer.imgs[0]}
                        alt="computer"
                        fill
                        priority
                        className='object-contain bg-[#FFC100]'
                      />
                    </div>

                    <div className='flex gap-3'>
                      <div className='flex-1 relative w-full h-36 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={computer.imgs[1]}
                          alt="computer"
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-36 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={computer.imgs[2]}
                          alt="computer"
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                      <div className='flex-1 relative w-full h-36 bg-primary-blue-100 rounded-lg'>
                        <Image
                          src={computer.imgs[3]}
                          alt="computer"
                          fill
                          priority
                          className='object-contain'
                        />
                      </div>
                    </div>
                  </div>

                  <div className='flex-1 flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl capitalize'>
                      {computer.cpu} {computer.vga}
                    </h2>

                    <div className='mt-3 flex flex-wrap gap-4'>
                      {Object.entries(computer).map(([key, value]) => (
                        key === "id" ? ('') : key === "price" ? (
                          <div className='flex justify-between gap-5 w-full text-right' key={key}>
                            <h4 className='text-grey capitalize'>{'Precio'.split("_").join(" ")}</h4>
                            <p className='text-[#fb6d48] font-bold'> <span className='text-[#FFC100]'>
                              {'$ '}
                            </span>
                              {value}
                              <span className='text-black-100'>
                                {' COP'}
                              </span>
                            </p>
                          </div>
                        ) : key === "imgs" ? ('') : (
                          <div className='flex justify-between gap-5 w-full text-right'  key={key}>
                            <h4 className='text-grey capitalize'>{key.split("_").join(" ")}</h4>
                            <p className='text-black-100 font-semibold'>{value}</p>
                          </div>
                        )
                      ))}
                      <div className='m-auto w-full flex flex-row justify-center items-center'>
                        <CustomButton
                          title='Lo quiero!'
                          btnType="button"
                          containerStyles='text-white rounded-full bg-[#fb6d48] min-w-[130px]'
                          handleClick={(e) => {
                            const message = 
                            `Estoy interesado en el siguiente producto:\n\n` +
                            `Procesador: ${computer.cpu}\n` +
                            `Tarjeta de vídeo: ${computer.vga}\n` +
                            `Placa madre: ${computer.motherBoard}\n` +
                            `Fuente de poder: ${computer.powerSupply}\n` +
                            `RAM: ${computer.ram}\n` +
                            `Almacenamiento: ${computer.ssd}\n` +
                            `Refrigeración: ${computer.cooling}\n` +
                            `Chasis: ${computer.chasis}\n` +
                            `Precio: ${computer.price}`;
        
                            const whatsappUrl = `https://wa.me/573024278167?text=${encodeURIComponent(message)}`;
                            window.open(whatsappUrl, '_blank');
                          }}
                        />
                      </div>
                    </div>
                  </div>

                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default ComputerDetails