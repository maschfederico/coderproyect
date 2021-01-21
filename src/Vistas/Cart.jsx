import {useContext, useState} from 'react';
import  {Store} from '../DataSource/cartcontext/store';
import {useHistory} from 'react-router-dom';

const Cart = () => {
    const store = useContext(Store);
    const {totalCart,cart,deleteFromCart,user,buyCart,id_compra} = store;
    

    const history = useHistory();
    const redireccionar = ()=>{
        history.push("/")
    };


    return ( 
        <>
        <div className="container">
        <div className="section">
           {totalCart === 0 ? 
           <>
           <p>{user.name} tu carrito de compras se encuentra vacio :(. ¿Que esperas para llenarlo?</p>
            <button  onClick={redireccionar}>Volver a listado de productos..</button>    
           </>
            :
            <>
             <ul className="collection with-header">
                <li className="collection-header"><h5>{user.name } todo esto tienes en tu carro de compras :)! Ver por más! :P</h5></li>
                {cart.map((item,index)=>{
                    return(
                     <li key={index} className="collection-item"><div>{item.titulo} Precio: ${item.precio} Cantidad:{item.quantity}  <button  className="secondary-content"  onClick={()=>{deleteFromCart(item.id)}}>Elminar del carrito</button></div></li>
                    );
                })}
               
                <li className="collection-header"><div><h5>Todo esto por:</h5><p>${totalCart}  Pesos!</p> {id_compra === 0?<button  onClick={buyCart}>Pagar la Compra</button>:<p>Su compra quedo registrada N° {id_compra}</p>} </div></li>
            </ul>
            </>}
            </div>
        </div>
        </>
                
     );
}
 
export default Cart;