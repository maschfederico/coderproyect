import {useState} from 'react';
import ItemCount from "./ItemCount";
import {Link,useHistory} from 'react-router-dom';

const ProductCard = ({data,extended = false }) => {
    
    
    const history = useHistory();

    const [cantidad, setCantidad] = useState(1);
    const onAdd = (cant_data) => {
        setCantidad(cant_data);   
    };

    const redireccionar = ()=>{
        history.push("/cart")
    };

    return ( 
        <div className="card">
            <div className="card-image">
                <img src={data.imagen} alt="Tomate Imagen"/>
                <span className="card-title black-text">{data.titulo}</span> 
            </div>
            <div className="card-content">
                <span className="card-title black-text">${data.precio}</span>
                <p> {extended ? data.descripcion: data.descripcion_extendida} </p>
            </div>
            <div className="card-content">
                <ItemCount cantidad_inicial = {1} stock={data.stock} id={data.id}  eventAddCarrito={onAdd}/>   
                <Link to={`/detalle/${data.id}`}>Ver más</Link> 
                <button disabled = {cantidad === 0 ? true:false} onClick={redireccionar}>Terminar mi compra</button>       
            </div>
        </div>
    );
}
 
export default ProductCard;