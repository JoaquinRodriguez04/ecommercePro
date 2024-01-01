import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext';

const ProductItem = ({prod}) => {

  const {handleAddToCart, openSlider} = useContext(ProductContext);

  return (
    <li className='flex flex-col justify-between gap-5 bg-bgCard rounded p-2 shadow-xl'>
      <div className='flex flex-col gap-5 justify-between flex-[2]'>
        <div className='flex justify-between items-start gap-5'> 
          <div>
            <h2>{prod.title}</h2>
          </div>
          <span className='text-clrCyan px-2 rounded'>${prod.price}</span>
        </div> 
        <div className='flex justify-between'>
          <span className={`
          rounded 
          px-1 
          text-clrBlack 
          ${prod.stock >= 50 && 'text-clrGreen'}
          ${prod.stock <= 40 && prod.stock > 20 && 'text-clrOrange'}
          ${prod.stock <= 20 && 'text-clrRed'}
          bg-bgAmount
          `}>
            {prod.stock} uni.
          </span>
          {
            prod.percentage &&
            <span className='bg-bgCyan text-clrBlack font-semibold px-2 rounded'>{prod.percentage}%OFF</span>
          }
        </div>
      </div>
      <button 
        className='hover:bg-bgBtnHover rounded p-1'
        onClick={() => (handleAddToCart(prod), openSlider())}>
        agregar al carrito
        <i className="bi bi-plus"></i>
      </button>
    </li>
  )
};

export default ProductItem;