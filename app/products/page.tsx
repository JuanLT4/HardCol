"use client";

import React from 'react';
import Image from 'next/image';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/constants';
import NavbarProducts from '@/components/NavbarProducts';

interface ColorVariant {
  title: string;
  color: string;
  price: number;
  img: string;
}

interface ProductItem {
  title: string;
  colors: ColorVariant[];
}

interface ProductCategory {
  title: string;
  products: ProductItem[];
}

const ProductCard = ({ product }: { product: ProductItem }) => {
  const { dispatch } = useCart();

const addToCart = (variant: ColorVariant) => {
  console.log(variant, 'click')
  dispatch({
    type: 'ADD_ITEM',
    payload: {  // Ensure that the payload matches the CartItem structure
      id: `${product.title}-${variant.title}`,
      title: `${product.title} - ${variant.title}`,
      price: Math.floor(variant.price * 1.15 * 3900),
      quantity: 1,  // This will be managed in the reducer
      img: variant.img, // Include img property
    },
  });
};

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-bold">{product.title}</h3>
      {product.colors.map((variant, index) => (
        <div key={index} className="flex items-center mt-2">
          <Image src={variant.img} alt={variant.title} width={80} height={80} className="object-cover mr-4" />
          <div>
            {/* <h4 className="text-md font-semibold">{variant.title}</h4> */}
            <p className="text-sm">${(Math.floor(variant.price * 1.15 * 3900)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</p>
            { variant.color === "arcoiris" ? (
            <div className="w-6 h-6 rounded-full border bg-arcoiris border-black"></div>
            ) : (
            <div style={{ backgroundColor: variant.color }} className="w-6 h-6 rounded-full border border-black"></div>
            )}
          </div>
          <button
            onClick={() => {
              console.log(variant)
              addToCart(variant)}}
            className="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
            Agregar al carrito
          </button>
        </div>
      ))}
    </div>
  );
};

const page = () => {
  return (
    <>
      <NavbarProducts />
      <main className="overflow-hidden">
        <div className='mt-12 padding-x padding-y max-width'>
          <div className="pt-[5rem]">
            {products.map((category: ProductCategory, index: number) => (
              <div key={index} className="mb-6">
                <h2 className="text-xl font-extrabold title-gradient py-2">{category.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {category.products.map((product, idx) => (
                    product.title === 'Sin Disipador' ? ('') : <ProductCard key={idx} product={product} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>

  );
};

export default page;
