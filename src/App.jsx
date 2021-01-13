import Nav from './components/general/Nav/Nav';
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartWidget from './components/general/Cart/CartWidget';
import Productos from './components/productos/Productos'
import DetalleProducto from './components/productos/DetalleProducto';
import Cart from './components/general/Cart/Cart';
import  {Store} from './components/cartcontext/store';
import { useState } from 'react';
function App() {
  // Estado del carrito y sus métodos.
  const [cart, setCart] = useState([]);

  const addItemCart = (obj)=>{
      console.log(cart)
      console.log(obj)
      // Controles de existencia del id en el array de productos. Falta Implemntar
      const carrito = cart;
      carrito.push(obj)
      setCart(carrito);
      console.log(carrito)
  };
  // Funcion para clear el cart
  const clear = ()=>{};
  // Funcion para comprobacion de existencia en el cart
  const isCart = (id)=>{};
  // Funcion para remover un item
  const removeItemCart = ()=>{};

  return (
    <Store.Provider value={[cart,addItemCart]} >
      <BrowserRouter>
        <Nav>
        <CartWidget/>
        </Nav>
        <Switch>
          <Route exact path="/">
            <Productos />
          </Route>
          <Route path="/detalle/:productoid">
            <DetalleProducto />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="*"> </Route>
        </Switch>
    </BrowserRouter>
  </Store.Provider>
  );
}

export default App;
