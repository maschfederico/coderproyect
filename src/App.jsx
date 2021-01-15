import Nav from './Components/general/Nav/Nav';
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CartWidget from './Components/Cart/CartWidget';
import Home from './Vistas/Home'
import DetalleProducto from './Vistas/DetalleProducto';
import Cart from './Vistas/Cart';
import  StoreProvider from './DataSource/cartcontext/store';

function App() {
  
  return (
    <StoreProvider >
      <BrowserRouter>
        <Nav>
        <CartWidget/>
        </Nav>
        <Switch>
          <Route exact path="/">
            <Home />
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
  </StoreProvider>
  );
}

export default App;
