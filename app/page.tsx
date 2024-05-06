"use client";

import Image from "next/image";
import { Hero, CustomFilter, SearchBar, ComputerCard, Flyer } from "@/components"
import type { ComputerProps } from "@/types";
import { computers, fuels, yearsOfProduction } from "@/constants";
import { useState } from "react";




export default function Home() {

  const [cpu, setCpu] = useState('');
  const [vga, setVga] = useState('');


  const handleModelChange = (_cpu: string, _vga: string) => {
    setCpu(_cpu);
    setVga(_vga);
    console.log(_cpu, _vga);
  };

  const handleFilter1Change = (value: string) => {

  }

  const handleFilter2Change = (value: string) => {

  }

  const allComputers: ComputerProps[] = computers
  const filterComputers = (cpu === "" && vga === "") ? allComputers : allComputers.filter((computer) => {

    const formattedCpuModel = cpu.toLowerCase().replace(/\s+/g, "");
    const formattedVgaModel = vga.toLowerCase().replace(/\s+/g, "");

    const concatenatedModels = (computer.cpu + computer.vga).toLowerCase().replace(/\s+/g, "");
    return concatenatedModels.includes(formattedCpuModel) && concatenatedModels.includes(formattedVgaModel);

  })

  const isDataEmpty = !Array.isArray(allComputers) || allComputers.length < 1 || !allComputers

  return (
    <main className="overflow-hidden">
      <Hero />
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
{/* 
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} onModelChange={handleFilter1Change} />
            <CustomFilter title="year" options={yearsOfProduction} onModelChange={handleFilter2Change} />
          </div> */}
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {filterComputers.sort((a, b) => {
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
            </div>
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
