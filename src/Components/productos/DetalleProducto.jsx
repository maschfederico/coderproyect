import ProductCardExtended from '../general/ProductCard/ProductCardExtended'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import productos from '../../mockdata/productos';

const DetalleProducto = () => {
    const [item, setItem] = useState([]);
    const {productoid} = useParams ();
   
    
    const ProductoSelected = new Promise((resolve, reject) => {
        setTimeout(() => {
          const productoClickeado = productos.find( producto => producto.id === productoid )
          resolve(productoClickeado);
        }, 500);
      });
    
    const callProducto = ()=>{ProductoSelected.then((data)=>setItem(data))}
   
    useEffect(() => {
        callProducto()
    }, [productoid])

    return ( 
       <ProductCardExtended data={item}/>
     );
}
 
export default DetalleProducto;