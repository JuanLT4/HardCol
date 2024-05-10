import React, { useState } from "react";
import { products } from "../constants/index";
import Image from "next/image";

interface Product {
  title: string;
  colors: {
    title: string;
    color: string;
    price: number;
    img: string;
  }[];
}

interface Category {
  title: string;
  products: Product[];
}

interface SelectedItem extends Product {
  selectedColor: string;
}

interface SelectedItems {
  [key: string]: SelectedItem;
}

interface Props {
  products: Category[];
}

const ComputerBuilder = ({ products }: Props) => {
  const [selectedItems, setSelectedItems] = useState<SelectedItems>({});

  // Función para actualizar el estado cuando se selecciona un producto
  const handleSelect = (category: string, item: Product | undefined, color: string) => {
    if (!item) {
      // Si se selecciona "Selecciona un producto", eliminar la entrada correspondiente en selectedItems
      setSelectedItems(prev => {
        const updatedSelectedItems = { ...prev };
        delete updatedSelectedItems[category];
        return updatedSelectedItems;
      });
      return;
    }
    setSelectedItems(prev => ({
      ...prev,
      [category]: { ...item, selectedColor: color }
    }));
  };

  // Función para calcular el total del pedido
  const calculateTotal = () => {
    return Object.values(selectedItems).reduce((acc, item) => {
      if (item && item.selectedColor) { // Validar si se ha seleccionado un color
        const selectedColorPrice = item.colors.find(color => color.title === item.selectedColor)?.price || 0;
        return acc + selectedColorPrice;
      }
      return acc;
    }, 0);
  };

  return (
    <div>
    <h1 className="text-4xl font-extrabold title-gradient py-2 mb-2">¡Armalo tú mismo!</h1>
    <div className="w-full mx-auto p-6 bg-white rounded-lg shadow-xl">
      {products.map((category: any) => (
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
                  handleSelect(category.title, undefined, ""); // Reiniciar el estado si se selecciona "Seleccione un producto"
                }
              }}
            >
              <option value="">Selecciona un producto</option>
              {category.products.map((product: any, index: any) => (
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
                      {color.title} - ${color.price}
                    </option>
                  ))}
                </select>
                <img src={selectedItems[category.title].colors.find(color => color.title === selectedItems[category.title].selectedColor)?.img} alt={selectedItems[category.title].title} className="w-full" />
              </div>
            )}
          </div>
        </div>
      ))}
      <div>
        <h3 className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</h3>
      </div>
    </div>

    </div>
  );
};

export default ComputerBuilder;
