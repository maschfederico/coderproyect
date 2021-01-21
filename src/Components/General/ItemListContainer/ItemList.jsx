import {useContext} from 'react';
import ProductCard from "../../ProductCard/ProductCard";
import {Store} from '../../../DataSource/cartcontext/store';


const ItemList = () => {
    const store = useContext(Store);
    const {products} = store;

    return ( 
        <>
        <div className="row" key={1}>
            <div className=" col s12">
                <span className="title"> Verduras y Frutas</span>
            </div>
            {products.length ? 
            products.map((item,i)=>{
               
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
        </>
     );
}
 
export default ItemList;