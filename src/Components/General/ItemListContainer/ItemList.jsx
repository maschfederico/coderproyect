import {useState, useEffect} from 'react';
import ProductCard from "../ProductCard/ProductCard"
const ItemList = () => {
    const [items, setItems] = useState([]);

    const productos = [
        {
            id: '1',
            imagen: 'lechugas.jpg',
            nombre: 'Lechuga Francesa',
            precio: 50.23,
            descripcion: "Lechuga francesa hidropónica" ,
            stock: 120,
        },
        {
            id: '2',
            imagen: 'tomates.jpg',
            titulo: 'Tomate Redondo',
            precio: 50,
            descripcion: "Tomate redondo cultivado y cosechado de  forma orgánica.",
            stock: 10,
        },
        {
            id: '2',
            imagen: 'zanahorias.jpg',
            titulo: 'Zanahorias',
            precio: 50,
            descripcion: "Zanahorias envasadas en origen. Bolsa de 1 Kg.",
            stock: 10,
        }
    ];

  

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
                <span className="title"> Verduras </span>
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
                        />
                    </div>
                    )
            })
            :<p>Cargando Verduras...</p>}
           
        </div>
     );
}
 
export default ItemList;