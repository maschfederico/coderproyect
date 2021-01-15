import { useState, useEffect, createContext } from "react";
import productos from '../mockdata/productos'

export const Store = createContext();

const StoreProvider = ({ children }) => {

    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);
    const [totalCart, settotalCart] = useState(0);
    const [itemCart, setitemCart] = useState(0);
  
    const addItemCart = ({productId,cantidad}) => {
      const prodAlCart = products.filter(prod => prod.id === productId)[0];
      if (!prodAlCart.quantity) {
        console.log("Funciono en true");
        prodAlCart.quantity = cantidad;
        setCart([...cart, prodAlCart]);
      } else {
        cart[cart.indexOf(prodAlCart)].quantity= cart[cart.indexOf(prodAlCart)].quantity + cantidad;
        setCart([...cart]);
      }
    };
  
    const deleteFromCart = productId => {
      const prodFueraDeCart = cart.filter(prod => prod.id !== productId);
      setCart(prodFueraDeCart);
    };

    const computarTotal = ()=>{
        let total = 0;
        cart.forEach((item)=>{
            total += parseFloat(item.quantity)*parseFloat(item.precio);
            console.log("Total")
            console.log(total)
        });
        console.log("Total pesos Carrito:")
        console.log(total)
        settotalCart(total);
    };

    const computarItem = ()=>{
        setitemCart(cart.length);
        console.log("Total Items Carrito:")
        console.log(cart.length)
    }
  
    useEffect(() => {
      setProducts(productos);
      computarTotal();
      computarItem();  
      console.log("Productos:");
      console.log(productos);
      console.log("carrito:");
      console.log(cart);
    }, [cart]);
  
    return (
      <Store.Provider
        value={{
          cart,
          products,
          totalCart,
          itemCart,
          addItemCart,
          deleteFromCart
        }}
      >
        {children}
      </Store.Provider>
    );
  };
  
  export default StoreProvider;
