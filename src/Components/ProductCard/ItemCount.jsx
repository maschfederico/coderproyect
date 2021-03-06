import {useEffect, useState, useContext} from 'react';
import  {Store} from '../../DataSource/cartcontext/store';

const Itemcount = ({cantidad_inicial,eventAddCarrito,stock, id}) => {
    const [cantidad, setCantidad] = useState(0);

    const store = useContext(Store);

    const {addItemCart} = store;

    const handleClickResta = () => {
        if(cantidad> 1) {
            setCantidad(cantidad - 1);
        }
    }

    const handleClickSuma = () => {
        if(cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    }

    const agregarItemCarrito = ()=>{
    addItemCart({productId: id, cantidad: cantidad});
    eventAddCarrito(cantidad)
    };

    useEffect(()=>{
        setCantidad(cantidad_inicial)
    },[]);

    return (  
        <div className="container">
            <div className="row">
                <div className=" col 4">
                    <button 
                        disabled={cantidad === 1 ? 'disabled' : null } 
                        onClick={handleClickResta}
                    >
                        -
                    </button>
                </div>
                <div className=" col 4">
                    {stock === "0"? <p> Sin stock</p> :<input type="text" value={cantidad} readOnly/>
                    }
                    
                </div>
                <div className=" col 4">
                    <button disabled = {cantidad >= stock || stock === "0" ? 'disabled': null} onClick={handleClickSuma}>+</button>
                </div>
            </div>   
            <div className=" row">  
                <button disabled = {stock === "0" ? 'disabled': null} onClick={agregarItemCarrito}>Agregar al carrito</button>
            </div>
        </div>
    );
    
}
 
export default Itemcount;