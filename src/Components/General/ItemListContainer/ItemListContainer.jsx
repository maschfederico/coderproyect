import {GoPlus} from "react-icons/go";
import tomate from "./imagenes/tomates.jpg";
import zanahorias from "./imagenes/zanahorias.jpg";
import lechugas from "./imagenes/lechugas.jpg"
const ItemListContainer = () => {
    return ( 
        <div className="container">
            <div className="section">
                <div className="row">
                    <div className=" col s12">
                        <span className="title"> Verduras </span>
                    </div>
                    <div className="col s12 m6 l4">
                        <div class="card">
                            <div className="card-image">
                                <img src={tomate} alt="Tomate Imagen"/>
                                <span class="card-title black-text">Tomates</span>
                                <a href="#top"className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"><GoPlus/></i></a>
                            </div>
                            <div class="card-content">
                                <p>Tomate redondo cultivado y cosechado de  forma orgánica.</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div class="card">
                            <div className="card-image">
                            <img src={lechugas} alt="Lechuga Imagen"/>
                                <span class="card-title black-text">Lechuga Francesa</span>
                                <a href="#top"className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"><GoPlus/></i></a>
                            </div>
                            <div class="card-content">
                                <p>Lechuga francesa hidropónica</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m6 l4">
                        <div class="card">
                            <div className="card-image">
                                <img src={zanahorias} alt="Zanahorias Imagen"/>
                                <span class="card-title black-text" >Zanahorias</span>
                                <a href="#top"className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons"><GoPlus/></i></a>
                            </div>
                            <div class="card-content">
                                <p>Zanahorias envasadas en origen. Bolsa de 1 Kg.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ItemListContainer;