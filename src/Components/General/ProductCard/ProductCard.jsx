import {useState} from 'react';
import ItemCount from "./ItemCount";
const ProductCard = ({titulo,precio,descripcion,imagen,stock, inicial =1 }) => {
    const [cantidad, setCantidad] = useState(inicial);

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

    const onAdd = () => {
        alert(`Agregaste ${cantidad} productos al carrito`);
    }
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
                    <ItemCount cantidad = {cantidad} stock={stock} resta={handleClickResta}  suma={handleClickSuma} eventAddCarrito={onAdd}/>           
                </div>
            </div>
    );
}
 
export default ProductCard;