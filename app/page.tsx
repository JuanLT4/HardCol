"use client";

import Image from "next/image";
import { Hero, CustomFilter, SearchBar, ComputerCard, Flyer } from "@/components"
import type { ComputerProps } from "@/types";
import { computers, ramCapacity, ssdCapacity, orden } from "@/constants";
import { useEffect, useState } from "react";




export default function Home() {

  const [cpu, setCpu] = useState('');
  const [vga, setVga] = useState('');
  const [ram, setRam] = useState('');
  const [ssd, setSsd] = useState('');
  const [order, setOrder] = useState('');
  const [isSortingHigh, setIsSortingHigh] = useState(false);
  const [_allComputers, setAllComputers] = useState(computers); // Debes definir y establecer este estado
  const [_filterComputers, setFilterComputers] = useState(computers); // Debes definir y establecer este estado

  // useEffect(() => {

  // }, [ram, ssd]);


  const handleModelChange = (_cpu: string, _vga: string) => {
    setCpu(_cpu);
    setVga(_vga);
    console.log(_cpu, _vga);
  };

  const handleSsdChange = (_ssd: string) => {
    setSsd(_ssd);
    console.log('desde handle ssd', _ssd);
  }

  const handleRamChange = (_ram: string) => {
    setRam(_ram);
    console.log('desde handle ram', _ram);
  }

  const handleOrderChange = (_order: string) => {
    setOrder(_order);
    console.log('desde handle order', _order);
  }


  const handleApplyFilters = () => {
    if (order === '') {
      setIsSortingHigh(false);
    }
    if (order === 'mayor precio') {
      setIsSortingHigh(true);
    }
    if (order === 'menor precio') {
      setIsSortingHigh(false);
    }
    const filtered = (ram === "" && ssd === "") ? _allComputers : _allComputers.filter((computer) => {

      const formattedRamModel = ram.toLowerCase().replace(/\s+/g, "");
      const formattedSsdModel = ssd.toLowerCase().replace(/\s+/g, "");

      const concatenatedModels = (computer.ram + computer.ssd).toLowerCase().replace(/\s+/g, "");
      return concatenatedModels.includes(formattedRamModel) && concatenatedModels.includes(formattedSsdModel);

    });

    const finalFiltered = (cpu === "" && vga === "") ? filtered : filtered.filter((computer) => {

      const formattedCpuModel = cpu.toLowerCase().replace(/\s+/g, "");
      const formattedVgaModel = vga.toLowerCase().replace(/\s+/g, "");

      const concatenatedModels = (computer.cpu + computer.vga).toLowerCase().replace(/\s+/g, "");
      return concatenatedModels.includes(formattedCpuModel) && concatenatedModels.includes(formattedVgaModel);
    });
    setFilterComputers(finalFiltered);
    console.log(_filterComputers);

  }

  const allComputers: ComputerProps[] = computers
  let filterComputers = (cpu === "" && vga === "") ? allComputers : allComputers.filter((computer) => {

    const formattedCpuModel = cpu.toLowerCase().replace(/\s+/g, "");
    const formattedVgaModel = vga.toLowerCase().replace(/\s+/g, "");

    const concatenatedModels = (computer.cpu + computer.vga).toLowerCase().replace(/\s+/g, "");
    return concatenatedModels.includes(formattedCpuModel) && concatenatedModels.includes(formattedVgaModel);

  })

  const isDataEmpty = !Array.isArray(_allComputers) || _allComputers.length < 1 || !_allComputers

  return (
    <main className="overflow-hidden">
      <Hero>
      <p className='hero__subtitle'>
            Desata el poder del juego con nuestra gama de computadoras diseñadas para dominar. 
            ¡Convierte cada partida en una experiencia épica con nuestros equipos gamer de alto rendimiento!
      </p>
      </Hero>
      {/* <Flyer /> */}
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">
            Catálogo
          </h1>
          <p>Encuentra el equipo perfecto para ti.</p>
        </div>

        <div className="home__filters">
          <SearchBar onModelChange={handleModelChange} />

          <div className="home__filter-container">
            <CustomFilter title="Almacenamiento" options={ssdCapacity} onModelChange={handleSsdChange} />
            <CustomFilter title="Ram" options={ramCapacity} onModelChange={handleRamChange} />
            <CustomFilter title="Orden" options={orden} onModelChange={handleOrderChange} />
          </div>
          <button onClick={() => {
            handleApplyFilters()
          }} className="text-white text-[14px] rounded-lg bg-primary-blue p-2">Aplicar Filtros</button>
        </div>

        {!isDataEmpty ? (
          <section>
            {isSortingHigh ? (
              <div className="home__cars-wrapper">
                {cpu == "" && vga === "" ? '' : ''}
                {_filterComputers.sort((a, b) => {
                  if (a.price > b.price) {
                    return -1;
                  }
                  if (a.price < b.price) {
                    return 1;
                  }
                  // a must be equal to b
                  return 0;
                }).map((computer: ComputerProps, index: number) => (
                  <ComputerCard computer={computer} key={index} />
                ))}

              </div>
            ) : (<div className="home__cars-wrapper">
              {_filterComputers.sort((a, b) => {
                if (a.price > b.price) {
                  return 1;
                }
                if (a.price < b.price) {
                  return -1;
                }
                // a must be equal to b
                return 0;
              }).map((computer: ComputerProps, index: number) => (
                <ComputerCard computer={computer} key={index} />
              ))}
            </div>)
            }
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>Error sisas</p>
          </div>
        )}

      </div>
    </main>
  );
}
