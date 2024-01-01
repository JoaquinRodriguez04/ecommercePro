import ProductContent from "./components/ProductContent";
import { ProductProvider } from "./context/ProductContext";
import '../src/App.css';

function App() {

  return (
    <main className="text-clrBody font-AppPoppins font-medium flex justify-center">
      <ProductProvider>
        <ProductContent/>
      </ProductProvider>
    </main>
  )
};

export default App;
