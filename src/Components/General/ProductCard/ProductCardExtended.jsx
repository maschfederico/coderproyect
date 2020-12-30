import {useState} from 'react';
import ItemCount from "./ItemCount";

const ProductCardExtended = ({data}) => {
   
    const [cantidad, setCantidad] = useState(1);
   

    const handleClickResta = () => {
        if(cantidad> 1) {
            setCantidad(cantidad - 1);
        }
    }

    const handleClickSuma = () => {
        if(cantidad < data.stock) {
            setCantidad(cantidad + 1);
        }
    }

    const onAdd = () => {
        alert(`Agregaste ${cantidad} productos al carrito`);
    }
    return (  
            <div className="card">
                <div className="card-image">
                    <img src="" alt="Source Imagen Fail"/>
                    <span className="card-title black-text">{data.titulo}</span>
                </div>
                <div className="card-content">
                    <span className="card-title black-text">${data.precio}</span>
                    <p>{data.descripcion_extendida}</p>
                </div>
                <div className="card-content">
                    <ItemCount cantidad = {cantidad} stock={data.stock} resta={handleClickResta}  suma={handleClickSuma} eventAddCarrito={onAdd}/>   
                </div>
                
            </div>
    );
}
 
export default ProductCardExtended;