import Nav from './components/general/Nav/Nav';
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartWidget from './components/general/Cart/CartWidget';
import Productos from './components/productos/Productos'
import DetalleProducto from './components/productos/DetalleProducto'
import Cart from './components/general/Cart/Cart'
function App() {
  return (
    <>
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
  </>
  );
}

export default App;
