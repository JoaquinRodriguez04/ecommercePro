import ProductList from './ProductList';
import ProductHeader from './ProductHeader';
import ProductSlider from './ProductSlider';

const ProductContent = () => {

  return (
    <section className='max-w-7xl px-10'>
      <ProductHeader/>
      <ProductList/>
      <ProductSlider/>
    </section>
  )
};

export default ProductContent;