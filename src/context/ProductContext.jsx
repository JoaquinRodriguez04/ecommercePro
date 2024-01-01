import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const cartLS = JSON.parse(localStorage.getItem('prod')) || [];

export const ProductProvider = ({children}) => {
    // estado que maneja el carrito
    const [cart, setCart] = useState(cartLS);
    // estado que maneja el slider
    const [slider, setSlider] = useState(false);

    // funcion que agrega productos al carrito
    const handleAddToCart = (prod) => {
        // verficamos si el producto ya se encuentra en el carrito
        const existingProd = cart.find((prodCart) => prodCart.id === prod.id);

        // si el producto existe agregamos actualizamos la propiedad cantidad 
        if (existingProd) {
            const updateCart = cart.map((prodCart) => ( 
            prodCart.id === prod.id &&
            {...prodCart, quantity: prodCart.quantity + 1 } 
            ));

            // seteamos el estado del carrito con el mapeo actualizado del carrito
            setCart(updateCart);
        } else {
            setCart([...cart, {...prod, quantity: 1}]);
        };
    };

    // useEffect que guarda productos en el localStorage
    useEffect(() => {
        localStorage.setItem('prod', JSON.stringify(cart));
    }, [cart]);
    
    // funcion que elimina individualmente cada producto
    const deleteProdCart = (id) => {

        // filtramos el carrito y retornamos todos los productos menos el que coincida con el id que traemos como parametro
        const cartReload = cart.filter((prod) => prod.id != id);
        setCart(cartReload);

        if (cart.length === 1) {
            setSlider(false);
        };
    };

    const openSlider = () => {
        setSlider(true);
    };

    const closeSlider = () => {
        setSlider(false);
    };

    const lessQuantity = (prod) => {
        // Creamos un nuevo array ('cartReload') mediante el mapeo del carrito actual ('cart')
        const cartReload = cart.map((prodCart) => (
            prodCart.id === prod.id ? // verficamos si el producto del mapeo es igual al que traemos como parametro
                prodCart.quantity > 1 ? // verficamos si la cantidad del producto es mayor a 1
                { ...prodCart, quantity: prodCart.quantity - 1 } : // si es mayor a 1, hacemos un spreed de ese objeto y le restamos 1 a su cantidad
                null // si su cantidad es igual / menor a 1 devolvemos null (indicamos que ese producto debe ser eliminado)
            : prodCart // si el producto no es igual al del parametro, devolvemos el producto sin cambios
        )).filter(Boolean); // se eliminarán todos los elementos que son evaluados como false por la función Boolean. Dado que null es evaluado como false

        setCart(cartReload);
    };

    // funcion que se encarga de sumar la cantidad de un producto en particular
    const addQuantity = (prod) => {
        const cartReload = cart.map((prodCart) => (
            prodCart.id === prod.id ? // verficamos si el producto del mapeo es igual al que traemos como parametro
            {...prodCart, quantity: prodCart.quantity + 1 } : // hacemos un spreed de ese objeto y le sumamos 1 a su cantidad
            prodCart // si el producto no es igual al del parametro, devolvemos el producto sin cambios
        ));

        setCart(cartReload);
    };

    // funcion que hace la suma de todos los productos
    const additionPrices = () => {
        const totalPrices = cart.reduce((total, prodCart) => total + (prodCart.price * prodCart.quantity), 0);

        return totalPrices;
    };

    // funcion que vacia el array de productos
    const emptyCart = () => {
        setCart([]);
    };

    return (
        <ProductContext.Provider value={{
            cart, 
            handleAddToCart, 
            deleteProdCart, 
            openSlider, 
            slider, 
            closeSlider,
            lessQuantity, 
            addQuantity,
            additionPrices,
            emptyCart
        }}>
            {children}
        </ProductContext.Provider>
    )
};