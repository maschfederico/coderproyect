import {useState, useEffect} from 'react';
import ProductCard from "../ProductCard/ProductCard";
import productos from '../../../mockdata/productos';
const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getProductos.then(response=> setItems(response));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getProductos = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve (productos);
        }, 2000)
    })

   

    return ( 
        <div className="row">
            <div className=" col s12">
                <span className="title"> Verduras y Frutas</span>
            </div>
            {items.length ? 
            items.map((item)=>{
                const rutaImagen = require (`./imagenes/${item.imagen}`);
                    return(
                    <div className="col s12 m6 l4">
                        < ProductCard key={item.id} 
                        imagen={rutaImagen.default}
                        titulo={item.nombre}
                        descripcion={item.descripcion}
                        precio={item.precio}
                        stock={item.stock}
                        id={item.id}
                        />
                    </div>
                    )
            })
            :<p>Cargando Verduras...</p>}
           
        </div>
     );
}
 
export default ItemList;