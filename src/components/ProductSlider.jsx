import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const ProductSlider = () => {
    const {
      cart, 
      deleteProdCart, 
      closeSlider, 
      lessQuantity, 
      addQuantity, 
      additionPrices,
      slider,
      emptyCart
    } = useContext(ProductContext);

    return (
      <section className={`fixed w-[25rem] p-5 top-0 bottom-0 right-0 bg-bgSlider clr-body overflow-auto flex flex-col justify-between slider ${slider && 'active'}`}>
        <div className='w-full flex flex-col items-end'>
          <button 
            onClick={closeSlider}
            className='bg-bgRed rounded px-1'>
            <i className="bi bi-x-lg text-sm"></i>
          </button>
          {cart.map((prodCart, index) => (
            <div 
              className='py-5 flex flex-col gap-5 w-full'
              key={index}
            >
              <div className='flex items-start justify-between'>
                <h1>{prodCart.title}</h1>
                <button 
                    className='hover:bg-bgBtnHover rounded px-1'
                    onClick={() => deleteProdCart(prodCart.id)}>
                    <i className="bi bi-trash2"></i>
                </button>
              </div>
              <div className='flex justify-between'>
                <span>${prodCart.price}</span>
                <div className='flex gap-2 flex-col items-end'>
                  <div className='flex gap-2'>
                    <p>cantidad:</p>
                    <span>{prodCart.quantity}</span>
                  </div>
                  <div className='flex justify-between w-full'>
                    <button 
                      className='bg-bgCard px-2 rounded hover:bg-bgBtnHover'
                      onClick={() => lessQuantity(prodCart)}>
                      -
                    </button>
                    <button 
                      className='bg-bgCard px-2 rounded hover:bg-bgBtnHover'
                      onClick={() => addQuantity(prodCart)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {
            cart.length === 0 
            && 
            <p className='mt-5'>
            el carrito esta vacio, <button className='text-clrCyan underline' onClick={closeSlider}>agregue</button> un producto a su compra :(
          </p>
          }
        </div>
        <div className='flex justify-between'>
          <span>total: ${additionPrices()}</span>
          {
            cart.length >= 1 &&
            <button 
              className='rounded bg-bgBtn hover:bg-bgRed hover:text-clrBlack px-2'
              onClick={emptyCart}
            >
              vaciar carrito
            </button>
          }
        </div>
      </section>
    )
};

export default ProductSlider;