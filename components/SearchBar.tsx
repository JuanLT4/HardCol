"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import SearchManufacturer from './SearchManufacturer'
import { useState } from 'react'



const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt='magnifying-glass'
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
)

const SearchBar = ({ onModelChange }: {
  onModelChange: (_cpu: string, _vga: string) => void
}) => {
  // const [manufacturer, setManufacturer] = useState('')
  const [cpu, setCpu] = useState('')
  const [vga, setVga] = useState('')

  useEffect(() => {
    handleChange(cpu, vga)
  }, [cpu, vga])


  const handleChange = (cpu: string, vga: string) => {

    onModelChange(cpu, vga);
    console.log(cpu, vga);
  };

  const handleChangeCpu = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCpu(e.target.value)

  }

  const handleChangeVga = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVga(e.target.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  }

  // const updateComputers = () => {

  // }

  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        <Image
          src="/cpu.png"
          alt='model-icon'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input type='text' name='model' onChange={(e) => {
          handleChangeCpu(e)
        }} placeholder='Buscar por procesador' value={cpu} className='searchbar__input sinEsquinas' />
        {/* <SearchButton otherClasses={"sm:hidden"}/> */}
      </div>
      <div className='searchbar__item'>
        <Image
          src="/vga.png"
          alt='model-icon'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
        />
        <input type='text' name='model' onChange={(e) => {
          handleChangeVga(e)
        }}
          placeholder='Buscar por tarjeta gráfica' value={vga} className='searchbar__input ' />
        {/* <SearchButton otherClasses={"sm:hidden"} /> */}
      </div>
      {/* <SearchButton otherClasses={"max-sm:hidden"}/> */}
    </form>
  )
}

export default SearchBar