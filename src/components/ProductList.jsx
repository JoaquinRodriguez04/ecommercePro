import React from 'react'
import products from '../products.json';
import ProductItem from './ProductItem';

const ProductList = () => {

  return (
    <ul className='grid gap-2 desktop:grid-cols-4 laptop:grid-cols-3 mobile:grid-cols-2 grid-cols-1 pb-10'>
      {products.map((prod) => (
        <ProductItem prod={prod} key={prod.id}/>
      ))}
    </ul>
  )
};

export default ProductList;