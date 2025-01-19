import React, { useState, useEffect } from 'react';
import { productsImgsStyles } from '../constants/index';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';


interface Product {
  title: string;
  colors: {
    title: string;
    color: string;
    price: number;
    img: string;
  }[];
}

type PositionClasses = {
  [key in keyof typeof productsImgsStyles]: string;
};


interface Category {
  title: string;
  products: Product[];
}

interface SelectedItem extends Product {
  selectedColor: string;
  selectedImage: string; // Nueva propiedad para almacenar la imagen seleccionada
}

interface SelectedItems {
  [key: string]: SelectedItem;
}

interface Props {
  products: Category[];
}

const positionClasses: PositionClasses = {
  CPU: "absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ",
  VGA: "absolute z-50 top-[50%] left-[50%] translate-x-[-30%] translate-y-[-30%]",
  MOTHER_BOARD: "absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  POWER_SUPPLY: "absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  RAM: "absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  SSD: "absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  CHASIS: 'absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]',
  COOLING: 'absolute z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
}

const ComputerBuilder = ({ products }: Props) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({});
  const handleSelect = (category: string, item: Product | undefined, color: string) => {
    if (!item) {
      setSelectedItems(prev => {
        const updatedSelectedItems = { ...prev };
        delete updatedSelectedItems[category];
        return updatedSelectedItems;
      });
      return;
    }
    const selectedColorDetail = item.colors.find(c => c.title === color);
    setSelectedItems(prev => ({
      ...prev,
      [category]: {
        ...item,
        selectedColor: color,
        selectedImage: selectedColorDetail?.img || ''
      }
    }));
  };

  const calculateTotal = () => {
    console.log(selectedItems);
    return Object.values(selectedItems).reduce((acc, item) => {
      const selectedColorPrice = item.colors.find(color => color.title === item.selectedColor)?.price || 0;
      return acc + Math.floor(selectedColorPrice * 1.15 * 3900);
    }, 0);
  };

  return (
    <div className="">
      <h1 className="text-4xl font-extrabold title-gradient py-2 mb-2">¡Armalo tú mismo!</h1>
      <div className="flex flex-col lg:flex-row relative">
        <div className="w-[100%] lg:w-[40%] p-6 bg-white rounded-lg shadow-xl">
          {products.map((category: Category) => (
            <div key={category.title} className="mb-4">
              <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
              <div className="flex flex-col">
                <select
                  className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                  onChange={(e) => {
                    const selectedIndex = parseInt(e.target.value);
                    if (!isNaN(selectedIndex)) {
                      handleSelect(category.title, category.products[selectedIndex], category.products[selectedIndex].colors[0].title);
                    } else {
                      handleSelect(category.title, undefined, '');
                    }
                  }}
                >
                  <option value="">Selecciona un producto</option>
                  {category.products.map((product: Product, index: number) => (
                    <option key={product.title} value={index}>
                      {product.title}
                    </option>
                  ))}
                </select>
                {selectedItems[category.title] && (
                  <div>
                    <select
                      className="block w-full p-2 border border-gray-300 rounded-md mb-2"
                      onChange={(e) => handleSelect(category.title, selectedItems[category.title], e.target.value)}
                    >
                      {selectedItems[category.title].colors.map(color => (
                        <option key={color.title} value={color.title}>
                          {color.title} - ${Math.floor(color.price * 1.15 * 3900)}
                        </option>
                      ))}
                    </select>
                    <Image src={selectedItems[category.title].selectedImage} alt={selectedItems[category.title].title} className="object-contain" width={100} height={100} />
                  </div>
                )}
              </div>
            </div>
          ))}
          <div>
            <h4 className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)} <CustomButton title={'¡Lo quiero!'} btnType="button"
              containerStyles='text-white rounded-full bg-[#fb6d48] min-w-[130px]' handleClick={() => {
                let message = ``
                for (let item in selectedItems) {
                  message += `${item} - ${selectedItems[item].title} - ${selectedItems[item].selectedColor} - ${selectedItems[item].colors.find(color => color.title === selectedItems[item].selectedColor)?.price} - ${selectedItems[item].colors.find(color => color.title === selectedItems[item].selectedColor)?.img} \n`;
                }
                message += calculateTotal().toFixed(2)

                const whatsappUrl = `https://wa.me/573116378132?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }} />
            </h4>
          </div>
        </div>
        <div id="computer-builder-imgs" className="w-[100%] lg:w-[600px] flex justify-center items-center relative h-[500px] m-auto">
          {Object.entries(selectedItems).map(([category, item], index) => {

            return (
              <div key={index} id={category}>
                {category === "CPU" ? (
                  <Image src={item.colors.find(color => color.title === item.selectedColor)?.img || ''} alt={item.title} className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" width={140} height={140} />
                ) : category === "VGA" ? (
                  <Image src={item.colors.find(color => color.title === item.selectedColor)?.img || ''} alt={item.title} className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" width={140} height={140} />
                ) : category === "MOTHER_BOARD" ? (
                  <Image src={item.colors.find(color => color.title === item.selectedColor)?.img || ''} alt={item.title} className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" width={140} height={140} />
                ) : category === "POWER_SUPPLY" ? (
                  <Image src={item.colors.find(color => color.title === item.selectedColor)?.img || ''} alt={item.title} className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" width={140} height={140} />
                ) : category === "RAM" ? (
                  <Image src={item.colors.find(color => color.title === item.selectedColor)?.img || ''} alt={item.title} className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" width={140} height={140} />
                ) : category === "SSD" ? (
                  <Image src={item.colors.find(color => color.title === item.selectedColor)?.img || ''} alt={item.title} className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" width={140} height={140} />
                ) : category === "COOLING" ? (
                  <Image src={item.colors.find(color => color.title === item.selectedColor)?.img || ''} alt={item.title} className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" width={140} height={140} />
                ) : category === "CHASIS" ? (
                  <Image src={item.colors.find(color => color.title === item.selectedColor)?.img || ''} alt={item.title} className="object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.3)]" width={500} height={500} />
                ) : ''}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComputerBuilder;
