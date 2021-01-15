import {useState, useEffect} from 'react';
import ProductCard from "../../ProductCard/ProductCard";
import productos from '../../../DataSource/mockdata/productos';
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
        <div className="row" key={1}>
            <div className=" col s12">
                <span className="title"> Verduras y Frutas</span>
            </div>
            {items.length ? 
            items.map((item,i)=>{
               
                    return(
                    <div className="col s12 m6 l4">
                        < ProductCard key={i} 
                       data ={item}
                       extended = {false}
                        />
                    </div>
                    )
            })
            :<p>Cargando Verduras...</p>}
           
        </div>
     );
}
 
export default ItemList;