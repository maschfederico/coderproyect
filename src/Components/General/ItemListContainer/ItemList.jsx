import {useState, useEffect} from 'react';
import ProductCard from "../../ProductCard/ProductCard";
import {getFirestore} from '../../../DataSource/firestore';
import productos from '../../../DataSource/mockdata/productos'

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadProductos();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const loadProductos = ()=>{
        const db = getFirestore();
        db.collection("items").get().then(
            items =>{
                let obj = [];
            items.forEach(doc =>{
                obj.push({id: doc.id, ...doc.data() })
                })
            setItems(obj)    
            }
        )
        
        
    };

    const loadProdcutosToFireStore = ()=>{
        console.log("Carga a Firestore")
        const db = getFirestore()
        productos.forEach(
            producto =>{
                db.collection("items").add(
                    producto
                ).then(()=>{
                    console.log("Producto cargado:")
                    console.log(producto.nombre)
                }).catch(()=>{
                    console.log(" Error al calrgar Producto:")
                    console.log(producto.nombre)
                })
            }
        )
    };

   

    return ( 
        <>
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
        <div className="row" key={2}>
        <div className=" col s12">
            Boton de carga de items a fireStore()
            <button disabled = {true} onClick={loadProdcutosToFireStore}>Cargar data a FireStores</button>
        </div>
        </div>
        </>
     );
}
 
export default ItemList;