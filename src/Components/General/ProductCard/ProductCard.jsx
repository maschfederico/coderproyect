import {useState} from 'react';
import ItemCount from "./ItemCount";
import {Link,useHistory} from 'react-router-dom';

const ProductCard = ({titulo,precio,descripcion,imagen,stock, inicial =0,id }) => {
    
    
    
    const history = useHistory();

    const [cantidad, setCantidad] = useState(0);
    const onAdd = (cant_data) => {
        setCantidad(cant_data);   
    };

    const redireccionar = ()=>{
        history.push("/cart")
    };

    return ( 
        <div className="card">
            <div className="card-image">
                <img src={imagen} alt="Tomate Imagen"/>
                <span className="card-title black-text">{titulo}</span> 
            </div>
            <div className="card-content">
                <span className="card-title black-text">${precio}</span>
                <p>{descripcion}</p>
            </div>
            <div className="card-content">
                <ItemCount cantidad_inicial = {1} stock={stock} id={id}  eventAddCarrito={onAdd}/>   
                <Link to={`/detalle/${id}`}>Ver más</Link> 
                <button disabled = {cantidad === 0 ? true:false} onClick={redireccionar}>Terminar mi compra</button>       
            </div>
        </div>
    );
}
 
export default ProductCard;