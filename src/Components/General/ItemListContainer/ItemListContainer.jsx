
import tomate from "./imagenes/tomates.jpg";
import zanahorias from "./imagenes/zanahorias.jpg";
import lechugas from "./imagenes/lechugas.jpg";
import ProductCard from "../ProductCard/ProductCard"
const ItemListContainer = () => {
    return ( 
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className=" col s12">
                        <span className="title"> Verduras </span>
                    </div>
                    <div className="col s12 m6 l4">
                        <ProductCard 
                        titulo = "Tomates" 
                        precio="45.50" 
                        descripcion="Tomate redondo cultivado y cosechado de  forma orgánica." 
                        imagen={tomate} 
                        stock="0"/>
                    </div>
                    <div className="col s12 m6 l4">
                        <ProductCard 
                        titulo = "Lechuga Francesa" 
                        precio="120.45" 
                        descripcion="Lechuga francesa hidropónica" 
                        imagen={lechugas} 
                        stock="5"/>
                    </div>
                    <div className="col s12 m6 l4">
                        <ProductCard 
                        titulo = "Zanahorias"
                        precio="12.45" 
                        descripcion="Zanahorias envasadas en origen. Bolsa de 1 Kg." 
                        imagen={zanahorias} 
                        stock="3"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ItemListContainer;