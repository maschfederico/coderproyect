import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import ItemCount from "./ItemCount";

const ProductCardExtended = ({data}) => {
   
    const [cantidad, setCantidad] = useState(0);
    const history = useHistory();
 

    const onAdd = (value) => {
        setCantidad(value)
    };

    const redireccionar = ()=>{
        history.push("/cart")
    };
    return (  
            
            <div className="card">
                <div className="card-image">
                    <img src={data.imagen} alt="Source Imagen Fail"/>
                    <span className="card-title black-text">{data.titulo}</span>
                </div>
                <div className="card-content">
                    <span className="card-title black-text">${data.precio}</span>
                    <p>{data.descripcion_extendida}</p>
                </div>
                <div className="card-content">
                    <ItemCount cantidad_inicial = {1} stock={data.stock} id ={data.id} eventAddCarrito={onAdd}/>   
                    <button disabled = {cantidad === 0 ? true : false} onClick={redireccionar}>Terminar mi compra</button> 
                </div>
                
            </div>
           
    );
}
 
export default ProductCardExtended;