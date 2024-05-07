"use client";

import Image from "next/image";
import { Hero, CustomFilter, SearchBar, ComputerCard, Flyer } from "@/components"
import type { ComputerProps } from "@/types";
import { computers, ramCapacity, ssdCapacity, orden } from "@/constants";
import { useEffect, useState } from "react";
import ShowMore from "@/components/ShowMore";




export default function Home() {
  // Estado para controlar la página actual
  
  // Array de los elementos que se mostrarán en la página actual
  
  const [cpu, setCpu] = useState('');
  const [vga, setVga] = useState('');
  const [ram, setRam] = useState('');
  const [ssd, setSsd] = useState('');
  const [order, setOrder] = useState('');
  const [isSortingHigh, setIsSortingHigh] = useState(false);
  const [_allComputers, setAllComputers] = useState(computers); // Debes definir y establecer este estado
  const [_filterComputers, setFilterComputers] = useState(computers); // Debes definir y establecer este estado

  // PAGINACIOOOOOOOOOOOOOOOOOOON
  
  const [displayCount, setDisplayCount] = useState(8);
  const computersPerPage = 8; // Número de elementos que se añaden por página

  // Array de los elementos que se mostrarán hasta el momento
  const currentComputers = _filterComputers.slice(0, displayCount);

  // Función para cargar más elementos
  const handleShowMore = () => {
    setDisplayCount(prevDisplayCount => prevDisplayCount + computersPerPage);
  };

  // Determina si hay más elementos para mostrar
  const moreComputersAvailable = computers.length > displayCount;
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
    setDisplayCount(8)
    console.log(_filterComputers);

  }

  // const allComputers: ComputerProps[] = computers
  // let filterComputers = (cpu === "" && vga === "") ? allComputers : allComputers.filter((computer) => {

  //   const formattedCpuModel = cpu.toLowerCase().replace(/\s+/g, "");
  //   const formattedVgaModel = vga.toLowerCase().replace(/\s+/g, "");

  //   const concatenatedModels = (computer.cpu + computer.vga).toLowerCase().replace(/\s+/g, "");
  //   return concatenatedModels.includes(formattedCpuModel) && concatenatedModels.includes(formattedVgaModel);

  // })

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
            <CustomFilter title="z-[11]" options={ssdCapacity} onModelChange={handleSsdChange} />
            <CustomFilter title="z-[10]" options={ramCapacity} onModelChange={handleRamChange} />
            <CustomFilter title="z-[9]" options={orden} onModelChange={handleOrderChange} />
          </div>
          <button onClick={() => {
            handleApplyFilters()
          }} className="text-white text-[14px] rounded-lg bg-primary-blue p-2">Aplicar Filtros</button>
        </div>

        {!isDataEmpty ? (
          <section>
            {isSortingHigh ? (
              <div className="home__cars-wrapper">
  
                {currentComputers.sort((a, b) => {
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
              {currentComputers.sort((a, b) => {
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
              {moreComputersAvailable && (
             <ShowMore 
             pageNumber={ (10 / 10)}
             isNext={10 > _filterComputers.length}
             handleClick={
              () => {
                handleShowMore();
                console.log(currentComputers.length);
              }
             }

           />
      )}
       
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
