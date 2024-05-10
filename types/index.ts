import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: 
    MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
  }

export interface CustomFilterProps {
    title: string;
    options: { title:string; value:string}[];
    onModelChange: (value: string) => void;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface ComputerProps {
    id: number;
    cpu: string;
    vga: string;
    motherBoard: string;
    powerSupply: string;
    ram: string;
    ssd: string;
    cooling?: string;
    chasis: string;
    salePrice: string;
    discount: string;
    price: string;
    imgs: string[];
}

export interface ComputerCardProps {
    computer: ComputerProps;
}

export interface ComputerDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    computer: ComputerProps;
}