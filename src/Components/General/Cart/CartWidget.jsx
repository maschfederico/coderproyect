import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
function CartWidget() {
    return(
        <i>
        <Link to={"/cart"} className="nav-link">
         <FaShoppingCart/>         
        </Link>
        </i>
    )
}
export default CartWidget;