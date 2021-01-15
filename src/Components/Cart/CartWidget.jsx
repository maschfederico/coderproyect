import { FaShoppingCart } from "react-icons/fa";
import  {Store} from '../../DataSource/cartcontext/store';
import {Link} from 'react-router-dom';
import {useContext} from 'react';

function CartWidget() {
    const store = useContext(Store);
    const {itemCart} = store;     
    return(
        <li>
       
        <Link to={"/cart"} className="nav-link">
         <FaShoppingCart/> {itemCart !==0 ? itemCart: null }
        </Link>
      
        </li>
    )
}
export default CartWidget;