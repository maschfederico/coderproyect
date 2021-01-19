import ProductCard from '../Components/ProductCard/ProductCard'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import productos from '../DataSource/mockdata/productos';
import {getFirestore}  from '../DataSource/firestore'; 

const DetalleProducto = () => {
    const [item, setItem] = useState([]);
    const {productoid} = useParams ();
   
    
    const callProducto = ()=>{
      const db = getFirestore();
      const producto =  db.collection("items").where('id','==',productoid).get();
      let obj =[]; // Array de volcado
      producto.then((docs)=>{
        docs.forEach(
          doc => {
            obj.push(doc.data())
          }
        ); 
        setItem(obj[0]);
      }
      ).catch(function(error) {
        console.log("Error getting documents: ", error);
    });
      
    }
   
    useEffect(() => {
        callProducto()
    }, [])

    return ( 
       <ProductCard data={item} extended={true} />
     );
}
 
export default DetalleProducto;