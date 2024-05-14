"use client";

import ComputerBuilder from '@/components/ComputerBuilder'
import { products } from '@/constants'
import React from 'react'
import { Navbar } from '@/components';

const page = () => {
  return (
    <>
        <Navbar />
        <main className='overflow-hidden'>
            <div className="mt-12 pt-[5rem] padding-x max-width">
                <ComputerBuilder products={products}/>
            </div>
        </main>
    </>
  )
}

export default page