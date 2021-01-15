import {useContext} from 'react';
import  {Store} from '../DataSource/cartcontext/store';
import {useHistory} from 'react-router-dom';

const Cart = () => {
    const store = useContext(Store);
    const {totalCart,cart,deleteFromCart} = store;

    const history = useHistory();
    const redireccionar = ()=>{
        history.push("/")
    };
    return ( 
        <div className="container">
            <div className="section">
               {totalCart === 0 ? 
               <>
               <p>Tu carrito de compras esta vacio :(. ¿Que esperas para llenarlo?</p>
                <button  onClick={redireccionar}>Volver a listado de productos..</button>    
               </>
                :
                <>
                 <ul className="collection with-header">
                    <li className="collection-header"><h5>Todo esto tienes en tu carro de compras :)! Ver por más! :P</h5></li>
                    {cart.map((item,index)=>{
                        return(
                         <li key={index} className="collection-item"><div>{item.titulo} Precio: ${item.precio} Cantidad:{item.quantity}  <button  className="secondary-content"  onClick={()=>{deleteFromCart(item.id)}}>Elminar del carrito</button></div></li>
                        );
                    })}
                   
                    <li className="collection-header"><div><h5>Todo esto por:</h5><p>${totalCart}  Pesos!</p></div></li>
                </ul>
                </>}
            </div>
        </div>
     );
}
 
export default Cart;