import React, { useContext } from 'react';
import logo from '../assets/icons/favicon.png';
import { ProductContext } from '../context/ProductContext';

const ProductHeader = () => {
    const {cart, openSlider} = useContext(ProductContext);

    return (
      <header className='py-5 flex justify-between items-center'>
          <div className='flex items-center gap-2'>
              <img src={logo} className='w-[3rem]' alt="logo-app" />
              <span>
                  ecommercePro
              </span>
          </div>
          <div className='relative'>
              <button onClick={() => openSlider()}>
                  <i className="bi bi-bag-fill"></i>
              </button>
              <span className='absolute left-[15px] bottom-[15px] text-sm bg-bgNumberCart text-clrBlack rounded-[50rem] w-[1.5em] flex items-center justify-center'>
                  {cart.length}
              </span>
          </div>
      </header>
    )
}

export default ProductHeader