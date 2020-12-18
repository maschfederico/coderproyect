const Itemcount = ({cantidad,eventAddCarrito,stock,resta,suma}) => {
    return (  
        <div className="container">
            <div className="row">
                <div className=" col 4">
                    <button 
                        disabled={cantidad === 1 ? 'disabled' : null } 
                        onClick={resta}
                    >
                        -
                    </button>
                </div>
                <div className=" col 4">
                    {stock === "0"? <p> Sin stock</p> :<input type="text" value={cantidad} readOnly/>
                    }
                    
                </div>
                <div className=" col 4">
                    <button disabled = {cantidad >= stock || stock === "0" ? 'disabled': null} onClick={suma}>+</button>
                </div>
            </div>   
            <div className=" row">  
                <button disabled = {stock === "0" ? 'disabled': null} onClick={eventAddCarrito}>Agregar al carrito</button>
            </div>
        </div>
    );
    
}
 
export default Itemcount;